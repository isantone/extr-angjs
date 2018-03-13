const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const mqpacker = require("css-mqpacker");

module.exports = {
  parser: 'postcss-scss',
  map: true,
  plugins: process.env.NODE_ENV === 'production' ? productionPlugins() : defaultPlugins(),
  // plugins: [
  //   autoprefixer,
  //   mqpacker,
  //   cssnano
  // ]
};

function isProdNodeEnv() {
  return process.env.NODE_ENV === 'production';
}

function productionPlugins() {
  return [
    autoprefixer,
    mqpacker,
    cssnano,
  ]
}

function defaultPlugins() {
  return [
    autoprefixer,
    mqpacker,
  ]
}