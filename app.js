var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json()); //  support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true}));  //  support encoded bodies

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req,res){
    res.render('home');
});

app.post('/api/users', function(req,res){
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;
    
    res.send(user_id + ' ' + token + ' ' + geo);
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log('It lives!', app.get('port'));
});