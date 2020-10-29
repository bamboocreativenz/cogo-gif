const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
  optimizeImagesInDev: true,
  images: {
    domains: ['dl.airtable.com']
  }
})
