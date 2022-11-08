const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  // replace with the name of your github repository - just the name, not the https://github.com/you/ part
    ? '/student-sign-in/'
    : '/',
    outputDir: "docs"
}
