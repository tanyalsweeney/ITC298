var mongoose = require("mongoose");

// local db settings 
var ip = process.env.ip || '127.0.0.1';
mongoose.connect('mongodb://' +ip+ '/projects');

var conn = mongoose.connection; 
conn.on('error', console.error.bind(console, 'connection error:'));  

var termSchema = mongoose.Schema({
    term: String,
    definition: [String]
});

module.exports = mongoose.model('Term', termSchema);