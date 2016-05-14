var data = [
    {term: "iot", definition: "Internet Of Things. This is just random stuff that's connected to the web"},
    {term: "dom", definition: "Document Object Model. This is just code that makes up a web page"},
    {term: "woff", definition: "Web Open Font Format. Jargon for free fonts"},
    {term: "geolocation", definition: "Where are you now?"},
    {term: "api", definition: "Aplication Programmer Interface. This is how you can get data from Facebook or Twitter"},
    {term: "minify", definition: "Strip all the white space out of code. Results in unreadable code. Don't do it."},
    {term: "unicode", definition: "Letters, numbers, and common symbols."},
    {term: "ux", definition: "User Experience. Essentioally, is it usable?"},
    {term: "canvas", definition: "an HTML5 feature that allows you to draw stuff on the interwebs"}
];


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