/** @type {import('next').NextConfig} */

const isCI = process.env.GITHUB_ACTIONS === "true";
const base = isCI ? "/my-portfolio" : "";

const nextConfig = {
  // CRITICAL: Enables static HTML export
  output: "export",

  // TypeScript errors are checked separately
  typescript: { ignoreBuildErrors: false },

  // Necessary for static export of images
  images: { unoptimized: true },

  // Sets the base path for GitHub Pages
  basePath: base,
  assetPrefix: base ? `${base}/` : undefined,

  // Ensures trailing slashes for clean file paths in static export
  trailingSlash: true,
  outputFileTracingRoot: __dirname,
};

module.exports = nextConfig;
