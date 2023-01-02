const path = require("path");

module.exports = function (config, options) {
  config.module.rules[0].exclude = /node_modules\/(?!@floating-ui)/;
  config.resolve.alias["@components"] = path.resolve(__dirname, "components");
  config.resolve.alias["@branding"] = path.resolve(__dirname, "branding");
  return config;
};
