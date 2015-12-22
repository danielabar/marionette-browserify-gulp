var Marionette = require('backbone.marionette');

var MyApp = new Marionette.Application();

MyApp.addRegions({
  navRegion: '#nav',
  mainRegion: '#main'
});

module.exports = MyApp;
