/** @type {import('next').NextConfig} */
const nextConfig = {
  husky: {
    hooks: {
      "pre-commit": "lint-staged",
    },
  },
  "lint-staged": {
    "*.js": ["eslint — fix", "prettier — write", "git add"],
  },
};

export default nextConfig;
