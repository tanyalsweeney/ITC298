var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'master'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json()); //  support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true}));  //  support encoded bodies
app.use(express.static(__dirname + "/public"));
app.use('/api', require('cors')());

var routes = require('./routes.js')(app); // passes ‘app’ instance to the routes module

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log('It lives!', app.get('port'));
});