var Term = require('./models/term.js');

new Term({term: "WOFF", definition: ["Web Open Font Format. Jargon for free fonts"]}).save();
new Term({term: "Geolocation", definition: ["Where are you now?"]}).save();
new Term({term: "API", definition: ["Aplication Programmer Interface. This is how you can get data from Facebook or Twitter"]}).save();
new Term({term: "Minify", definition: ["Strip all the white space out of code. Results in unreadable code. Don't do it."]}).save();
new Term({term: "Unicode", definition: ["Letters, numbers, and common symbols."]}).save();
new Term({term: "UX", definition: ["User Experience. Essentially, is it usable?"]}).save();
new Term({term: "Canvas", definition: ["an HTML5 feature that allows you to draw stuff on the interwebs"]}).save();

Term.find(function(err, result) {
    console.log(result);
});