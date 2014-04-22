var traceur = require('traceur');
traceur.require.makeDefault();
traceur.options.experimental = true;
require('../lib/traceur-runtime.min')
require('./app')