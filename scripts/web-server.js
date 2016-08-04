var express = require('express');
var path = require('path');
var app = express();

// '/../' takes us up one path to the projects directory and sets it as rootpath
var rootPath = path.normalize(__dirname + '/../');

app.use(express.static(rootPath + '/app'));

app.listen(8000);

console.log('Listening on port 8000...');