// Configuration for asset URLs
// Use local paths for development, GitHub raw URL for production

const isDevelopment = import.meta.env.DEV;

export const ASSETS_BASE_URL = isDevelopment 
  ? '' 
  : 'https://raw.githubusercontent.com/Jaswanth19-596/LetTheTruthBeKnown-Website/main/public';

// Helper function to get asset URL
export const getAssetUrl = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  if (isDevelopment) {
    // Local development - use relative paths from public folder
    return `/${cleanPath}`;
  }
  
  return `${ASSETS_BASE_URL}/${cleanPath}`;
};

