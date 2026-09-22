import resourceEditions from './resourceEditions.json';
// Configuration for asset URLs
// Verified A4 editions are bundled locally; other assets use the CloudFront source.

export const ASSETS_BASE_URL = 'https://d28muf2t6x3jzl.cloudfront.net';

// Helper function to get asset URL
export const getAssetUrl = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return resourceEditions[cleanPath] || `${ASSETS_BASE_URL}/${cleanPath}`;
};

// Original print layouts are kept separately from sequential A4 reading editions.
export const getOriginalAssetUrl = (path) => `${ASSETS_BASE_URL}/${path.replace(/^\//, "")}`;
