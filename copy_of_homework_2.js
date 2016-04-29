var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json()); //  support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true}));  //  support encoded bodies
app.use(express.static(__dirname + "/public"));

var data = [
        {buzzword: "IOT", plain: "Internet Of Things. This is just random stuff that's connected to the web"},
        {buzzword: "DOM", plain: "Document Object Model. This is just code that makes up a web page"},
        {buzzword: "WOFF", plain: "Web Open Font Format. Jargon for free fonts"},
        {buzzword: "geolocation", plain: "Where are you now?"},
        {buzzword: "API", plain: "Aplication Programmer Interface. This is how you can get data from Facebook or Twitter"},
        {buzzword: "minify", plain: "Strip all the white space out of code. Results in unreadable code. Don't do it."},
        {buzzword: "unicode", plain: "Letters, numbers, and common symbols."},
        {buzzword: "UX", plain: "User Experience. Essentioally, is it usable?"},
        {buzzword: "canvas", plain: "an HTML5 feature that allows you to draw stuff on the interwebs"}
    ];

app.get('/', function(req,res){
    res.type("text/html");
    res.sendfile("./public/home.html");
});

app.get('/about', function(req,res){
    res.type("text/html");
    res.sendFile("./public/about.html");
});

app.post('/search', function(req,res){
    res.type("text/html");
    var user_input = req.body.search_term;
    var success = data.find(function(item) {
        return item.buzzword.toLowerCase() == user_input.toLowerCase();
    });
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