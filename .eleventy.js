const processCss = require('./processCss');

module.exports = function (eleventyConfig) {
  eleventyConfig.addTemplateFormats('css');
  eleventyConfig.addExtension('css', {
    outputFileExtension: 'css',
    compile(content) {
      return async () => processCss(content);
    }
  })

  return {
    dir: {
      input: 'src',
    },
  };
};
