// PDFs and other download assets are served exclusively from CloudFront.
export const ASSETS_BASE_URL = 'https://d28muf2t6x3jzl.cloudfront.net';

export const getAssetUrl = (path) => {
  const cleanPath = path.replace(/^\/+/, '');
  return `${ASSETS_BASE_URL}/${cleanPath}`;
};

export const getOriginalAssetUrl = getAssetUrl;
