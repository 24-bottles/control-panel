var fs = require('fs');
var Uglifycss = require('uglifycss');
var UglifyJS = require("uglify-js");

// Vendor CSS
/*
console.log('Uglify CSS vendor');
console.log('=============================');
var uglified = Uglifycss.processFiles([
    'node_modules/animate.css/source/_base.css',
    'client/vendor/file-vider.css'
  ],{
    uglyComments: true
  }
);

fs.writeFile('public/css/vendor.min.css', uglified, function (err) {
  if (err) return console.log(err);
  console.log('Done!  public/css/vendor.min.css');
});
*/

// Uglify JS vendor
console.log('Uglify JS vendor');
console.log('=============================');
var files = [
  'node_modules/angular/angular.min.js',
  'node_modules/angular-sanitize/angular-sanitize.js',
  'node_modules/angular-messages/angular-messages.js',
  'node_modules/angular-translate/dist/angular-translate.js'
  //'client/vendor/data-ajax.js'
];
var uglyfyConfig = {};


files.forEach((item, i) => {
  uglyfyConfig[i] = fs.readFileSync(item, "utf8")
});

var uglified = UglifyJS.minify(uglyfyConfig).code;
fs.writeFileSync('public/js/vendor.min.js', uglified);
console.log('Done!  public/js/vendor.min.js');
