var traceur = require('traceur');

// override require
traceur.require.makeDefault();
// enable experimental features
traceur.options.experimental = true;
traceur.options.blockBinding = true;

// include app
require('./app');
