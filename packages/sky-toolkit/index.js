/* Disable ES6-Specific Rules */
/* eslint-disable no-var, prefer-template */
var skyToolkitCore = require('sky-toolkit-core');

var version = require('./package.json').version;

var cdnUrl = '//static.skyassets.com/assets/toolkit/v' + version + '/toolkit.min.css';
var cdnTag = '<link rel="stylesheet" href="' + cdnUrl + '">';

var skyToolkitCoreCdnUrl = skyToolkitCore.cdnUrl;
var skyToolkitCoreCdnTag = skyToolkitCore.cdnTag;

module.exports = {
  cdnUrl,
  cdnTag,
  skyToolkitCoreCdnUrl,
  skyToolkitCoreCdnTag,
};
