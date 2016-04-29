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
    
    var success = data.find(function(item) {
        return item.buzzword.toLocaleLowerCase() == user_input.toLowerCase();
    });
    return success;
}