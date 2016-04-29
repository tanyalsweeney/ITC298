var data = [
    {buzzword: "iot", plain: "Internet Of Things. This is just random stuff that's connected to the web"},
    {buzzword: "dom", plain: "Document Object Model. This is just code that makes up a web page"},
    {buzzword: "woff", plain: "Web Open Font Format. Jargon for free fonts"},
    {buzzword: "geolocation", plain: "Where are you now?"},
    {buzzword: "api", plain: "Aplication Programmer Interface. This is how you can get data from Facebook or Twitter"},
    {buzzword: "minify", plain: "Strip all the white space out of code. Results in unreadable code. Don't do it."},
    {buzzword: "unicode", plain: "Letters, numbers, and common symbols."},
    {buzzword: "ux", plain: "User Experience. Essentioally, is it usable?"},
    {buzzword: "canvas", plain: "an HTML5 feature that allows you to draw stuff on the interwebs"}
];


exports.getJargon = function(user_input) {
    return data.find(function(item) {
        return item.buzzword.toLowerCase() == user_input.toLowerCase();
    });
}

exports.updateJargon = function(user_term, user_definition) {
    var input = user_term.toLowerCase();
    for(var i = 0; i < data.length; i++) {
        if(input == data[i].buzzword.toLowerCase()) {
            data[i].plain = user_definition;
            return data[i];
        }
    }
}

exports.addJargon = function(user_term, user_definition) {
    data.push({buzzword: user_term, plain: user_definition});
    return data[data.length-1];
}

exports.removeJargon = function(user_term) {
    var input = user_term.toLowerCase();
    for(var i = 0; i < data.length; i++) {
        if(input == data[i].buzzword.toLowerCase()){
            data.splice(i,1);
            return data.length;
        }
    }
}