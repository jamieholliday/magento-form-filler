var prefs = require('sdk/simple-prefs').prefs;
var defaults = prefs;

//add additional vales
defaults.confirmation = defaults.password;

exports.fields = defaults;