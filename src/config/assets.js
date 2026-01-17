// Configuration for asset URLs
// Using GitHub raw URL for production deployment

export const ASSETS_BASE_URL = 'https://raw.githubusercontent.com/Jaswanth19-596/LetTheTruthBeKnown-Website/main/public';

// Helper function to get asset URL
export const getAssetUrl = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${ASSETS_BASE_URL}/${cleanPath}`;
};
