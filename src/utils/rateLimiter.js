// Rate Limiting Config
const LIMITS = {
  form_submission: {
    maxRequests: 3,
    windowMs: 30 * 60 * 1000, // 30 minutes
    displayName: 'form submissions'
  },
  pdf_download: {
    maxRequests: 15,
    windowMs: 15 * 60 * 1000, // 15 minutes
    displayName: 'PDF downloads/views'
  }
};

const STORAGE_KEY = 'lttbk_rate_limits';

// Safe localStorage wrapper to handle Incognito / Disabled states
const storage = {
  get: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  },
  set: (data) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // Fail silently (runs in-memory during session implicitly via mutations if we keep a cache,
      // but for simple fallback we just do nothing or use window global)
      window.__rate_limit_fallback = data;
    }
  }
};


// Return the current data, checking fallback if localStorage fails
const getLimitData = () => {
  const data = storage.get();
  if (Object.keys(data).length === 0 && window.__rate_limit_fallback) {
    return window.__rate_limit_fallback;
  }
  return data;
};

/**
 * Checks if a specific action is allowed under the rate limit.
 * @param {string} action - 'form_submission' or 'pdf_download'
 * @returns {object} { allowed: boolean, timeToWaitMs: number, remaining: number }
 */
export const checkLimit = (action) => {
  const config = LIMITS[action];
  if (!config) return { allowed: true, timeToWaitMs: 0, remaining: 1 };

  const data = getLimitData();
  const now = Date.now();
  const history = data[action] || [];

  // Filter out expired timestamps
  const activeRequests = history.filter(timestamp => now - timestamp < config.windowMs);

  if (activeRequests.length >= config.maxRequests) {
    // Calculate how long before the oldest active request expires
    const oldestRequest = activeRequests[0];
    const timeToWaitMs = config.windowMs - (now - oldestRequest);
    return {
      allowed: false,
      timeToWaitMs: Math.max(0, timeToWaitMs),
      remaining: 0
    };
  }

  return {
    allowed: true,
    timeToWaitMs: 0,
    remaining: config.maxRequests - activeRequests.length
  };
};

/**
 * Registers a new action occurrence.
 * @param {string} action - 'form_submission' or 'pdf_download'
 */
export const registerAction = (action) => {
  const config = LIMITS[action];
  if (!config) return;

  const data = getLimitData();
  const now = Date.now();
  const history = data[action] || [];

  // Clean old requests and add new one
  const updatedHistory = [
    ...history.filter(timestamp => now - timestamp < config.windowMs),
    now
  ];

  const updatedData = {
    ...data,
    [action]: updatedHistory
  };

  storage.set(updatedData);
};
