module.exports = function(app){

    var jargon = require('./lib/jargon.js');

    
    app.get('/', function(req,res){
        res.type("text/html");
        res.render('home', { data: jargon.getMaster(),
                        json_data: JSON.stringify(jargon.getMaster()) });
    });
    
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
    
    app.post("/add_definition", function(req,res){
        var target_term = req.body.detail_term;
        var add_one_def = req.body.add_one_def;
        var success = jargon.addTerm(target_term, add_one_def);
    });
    
    app.post('/add', function(req,res){
        res.type("text/html");
        var user_term = req.body.search_term;
        var user_definition = [];
        user_definition.push(req.body.definition);
        var term_exists = jargon.getJargon(user_term);
        var success = jargon.addJargon(user_term,user_definition);
        if(success == undefined || term_exists != undefined) {
            var fail_message = startOuter + 'Sorry.'
                + startInner + user_term + endTag
                + 'was not added.' + endTag;
            res.send(fail_message);
        } else {
            res.type("text/html");
            res.render('home', { data: jargon.getMaster(),
                            json_data: JSON.stringify(jargon.getMaster()) });
        }
    });
    
    app.post('/remove', function(req,res){
        res.type("text/html");
        var user_term = req.body.search_term;
        console.log("The user term is " + user_term);
        var term_exists = jargon.getJargon(user_term);
        var success = jargon.removeJargon(user_term);
        if(success == undefined || term_exists == undefined) {
            var fail_message = startOuter + 'Sorry. We were unable to remove'
                + startInner + user_term + endTag + endTag;
            res.send(fail_message);
        } else {
            res.render('home', { data: jargon.getMaster(),
                            json_data: JSON.stringify(jargon.getMaster()) });
        }
    });
    
    app.use(function(req, res, next){
        res.status(404);
        res.type("text/html");
        res.sendfile("./public/404.html");
    });

};