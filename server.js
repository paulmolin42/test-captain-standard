var express = require('express');
var app = express();

console.log(('Yay');
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000);

