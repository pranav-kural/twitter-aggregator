// Crypto is required by the twitter npm package, but is set to false by default in webpack. Therefore, this script enables crypto and set it to true

var fs = require('fs')
console.log('running postinstall script to enable crypto')
fs.readFile('./node_modules/@angular/cli/models/webpack-configs/common.js', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/crypto: \'empty\',/g, 'crypto: true,');

  fs.writeFile('./node_modules/@angular/cli/models/webpack-configs/common.js', result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});