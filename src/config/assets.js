// Configuration for asset URLs
// All environments (dev and production) use AWS S3 as the single source of truth

export const ASSETS_BASE_URL = 'https://d28muf2t6x3jzl.cloudfront.net';

// Helper function to get asset URL
export const getAssetUrl = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${ASSETS_BASE_URL}/${cleanPath}`;
};
