var data = [
    {term: "IOT",
     definition: [
        "Internet Of Things. This is just random stuff that's connected to the web.", 
        "Stuff like connected thermostats and web capable refrigerators and web-enabled watches."
        ]},
    {term: "DOM", definition: ["Document Object Model. This is just code that makes up a web page"]},
    {term: "WOFF", definition: ["Web Open Font Format. Jargon for free fonts"]},
    {term: "Geolocation", definition: ["Where are you now?"]},
    {term: "API", definition: ["Aplication Programmer Interface. This is how you can get data from Facebook or Twitter"]},
    {term: "Minify", definition: ["Strip all the white space out of code. Results in unreadable code. Don't do it."]},
    {term: "Unicode", definition: ["Letters, numbers, and common symbols."]},
    {term: "UX", definition: ["User Experience. Essentially, is it usable?"]},
    {term: "Canvas", definition: ["an HTML5 feature that allows you to draw stuff on the interwebs"]}
];

exports.getMaster = function() {
    return data;
}

exports.getJargon = function(user_input) {
    return data.find(function(item) {
        return item.term.toLowerCase() == user_input.toLowerCase();
    });
}

exports.updateJargon = function(user_term, user_definition) {
    var input = user_term.toLowerCase();
    for(var i = 0; i < data.length; i++) {
        if(input == data[i].term.toLowerCase()) {
            data[i].definition = user_definition;
            return data[i];
        }
    }
}

exports.addTerm = function(target_term, add_one_def) {
    var input = user_term.toLowerCase();
    for(var i = 0; i < data.length; i++) {
        if(input == data[i].term.toLowerCase()) {
            data[i].definition += user_definition;
            return data[i];
        }
    }
}

exports.addJargon = function(user_term, user_definition) {
    data.push({term: user_term, definition: user_definition});
    return data[data.length-1];
}

exports.removeJargon = function(user_term) {
    var input = user_term.toLowerCase();
    for(var i = 0; i < data.length; i++) {
        if(input == data[i].term.toLowerCase()){
            data.splice(i,1);
            return data.length;
        }
    }
}