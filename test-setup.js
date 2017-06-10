var JSDOM = require('jsdom').JSDOM;
var dom = new JSDOM('<!doctype html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;
