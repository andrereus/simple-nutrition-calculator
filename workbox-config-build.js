module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
    "**/*.{png,ico,html,svg,webmanifest,js,css}"
  ],
  "swDest": "build\\sw.js",
  skipWaiting: true,
  clientsClaim: true
};