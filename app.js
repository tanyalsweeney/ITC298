var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var jargon = require('./lib/jargon.js');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'master'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json()); //  support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true}));  //  support encoded bodies
app.use(express.static(__dirname + "/public"));


app.get('/', function(req,res){
    res.type("text/html");
    res.render('home', { data: jargon.getMaster(), json_data: JSON.stringify(jargon.getMaster()) });
});

app.get('/about', function(req,res){
    res.type("text/html");
    res.sendfile("./public/about.html");
});

//  define some reusable html tags for success and fail
//  message definition
var startOuter = '<div style="font: 16px arial; color: #999; padding: 50px;">';
var startInner = '<div style="font: bold 22px arial">';
var endTag = '</div>';

// app.post('/search', function(req,res){
//     res.type("text/html");
//     var user_input = req.body.search_term;
//     var success = jargon.getJargon(user_input);
//     if(success == undefined) {
//         var fail_message = startOuter + 'Sorry.' 
//             + startInner + user_input + endTag
//             + 'not found.' + endTag;
//         res.send(fail_message);
//     } else {
//         var success_message = startOuter + 'Success!'
//             + startInner + success.term + endTag
//             + 'means ' + success.definition + endTag;
//         res.send(success_message);
//     }
// });

app.post('/update', function(req,res){
    res.type("text/html");
    var user_term = req.body.search_term;
    var user_definition = req.body.definition;
    var success = jargon.updateJargon(user_term, user_definition);
    if(success == undefined || user_definition.length < 10) {
        var fail_message = startOuter + 'Sorry. The definition for'
            + startInner + user_term + endTag
            + 'did not update.' + endTag;
        res.send(fail_message);
    } else {
        var success_message = startOuter + 'Success!'
            + startInner + success.term + endTag
            + 'is now defined as ' + success.definition + endTag;
        res.send(success_message);
    }
});

app.post('/add', function(req,res){
    res.type("text/html");
    var user_term = req.body.search_term;
    var user_definition = req.body.definition;
    var term_exists = jargon.getJargon(user_term);
    var success = jargon.addJargon(user_term,user_definition);
    if(success == undefined || term_exists != undefined) {
        var fail_message = startOuter + 'Sorry.'
            + startInner + user_term + endTag
            + 'was not added.' + endTag;
        res.send(fail_message);
    } else {
        res.type("text/html");
        res.render('home', { data: jargon.getMaster(), json_data: JSON.stringify(jargon.getMaster()) });
        // var success_message = startOuter + 'Success!'
        //     + startInner + success.term + endTag
        //     + 'has been added! It means ' + success.definition + endTag;
            
        // res.send(success_message);
    }
});

app.post('/remove', function(req,res){
    res.type("text/html");
    var user_term = req.body.search_term;
    var term_exists = jargon.getJargon(user_term);
    var success = jargon.removeJargon(user_term);
    if(success == undefined || term_exists == undefined) {
        var fail_message = startOuter + 'Sorry. We were unable to remove'
            + startInner + user_term + endTag + endTag;
        res.send(fail_message);
    } else {
        var success_message = startOuter + 'Success!'
            + startInner + user_term + endTag
            + 'has been removed!' + endTag;
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