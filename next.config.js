const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
require('dotenv').config();

module.exports = withSass(withCss({
  publicRuntimeConfig: {
    api: process.env.API_URL
  }
}));
