var app = require('./config/express')();
require('./config/database')('mongodb://teste:teste@ds135624.mlab.com:35624/teste');

module.exports = app;