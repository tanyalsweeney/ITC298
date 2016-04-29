var express = require('express');
var bodyParser = require('body-parser');
var jargon = require('./lib/jargon.js');

var app = express();

app.use(bodyParser.json()); //  support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true}));  //  support encoded bodies
app.use(express.static(__dirname + "/public"));


app.get('/', function(req,res){
    res.type("text/html");
    res.sendfile("./public/home.html");
});

app.get('/about', function(req,res){
    res.type("text/html");
    res.sendfile("./public/about.html");
});

app.post('/search', function(req,res){
    res.type("text/html");
    var user_input = req.body.search_term;
    var success = jargon.getJargon(user_input);
    if(success == undefined) {
        var fail_message = '<div style="font: 16px arial; color: #999; padding: 50px;">Sorry.<br><span style="font: bold 22px arial">' + user_input
        + "</span><br>not found.</div><br>"
        res.send(fail_message);
    } else {
        var success_message = '<div style="font: 16px arial; color: #999; padding: 50px;">Success!<br><span style="font: bold 22px arial">' + user_input
            + "</span><br>means " + success.plain + "</div>!";
        res.send(success_message);
    }
});


app.use(function(req, res, next){
    res.status(404);
    res.type("text/html");
    res.sendfile("./public/404.html");
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log('It lives!', app.get('port'));
});