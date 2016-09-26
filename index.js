var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("<h1>What's the weather in ______?</h1>");
});

app.get('/city/:cityId/currentTemp/:currenttemp', function(req, res) {
    res.status(200);
    res.type('html');
    res.send('The current temperature in ' + req.params.cityId + ' is ' + req.params.currenttemp + 'F');
});

//    var name = data.name;
//    var currentTemp = data.main.temp;
//    var hiTemp = data.main.temp_max;
//    var loTemp = data.main.temp_min;
//    var windSpeed = data.wind.speed;
//    var cloudPer = data.clouds.all;
//    var desc = data.weather[0].description;

app.use(function(req, res, next) {
    console.log('your name is ' + req.query.name);
    next();
});

//app.get('/profile/:name', function(req, res) {
//    res.status(200);
//    res.type('json');
//    res.send({
//        name : req.params.name
//    }); 
//});

app.use(express.static(__dirname + '/public'));


app.use(function(req, res) {
    res.status(404);
    res.send('404 - Not Found');
});

app.listen(3001);

console.log('listening on port 3001');