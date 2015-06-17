var express = require('express');
var expressApp = express();
expressApp.use(express.static(__dirname));

expressApp.listen(3031);

console.log('Web listen 3031');