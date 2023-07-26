const { bundle, browserslistToTargets } = require('lightningcss');
const browserslist = require('browserslist');

module.exports = function(content) {
  return bundle({
    filename: 'src/style.css',
    code: content,
    minify: true,
    targets: browserslistToTargets(browserslist('>= 0.25%')),
    drafts: {
      nesting: true
    }
  }).code.toString();
};
