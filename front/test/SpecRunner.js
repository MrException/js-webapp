// Require.js allows us to configure shortcut alias
require.config({
  // The shim config allows us to configure dependencies for
  // scripts that do not call define() to register a module
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    'localstorage': {
      deps: ['backbone'],
      exports: 'Store'
    },
    jasmine: {
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine'
    },
    sinon: {
      exports: 'sinon'
    }
  },
  paths: {
    jquery: '../lib/jquery/jquery-1.8.2',
    underscore: '../lib/underscore/underscore-1.4.1',
    backbone: '../lib/backbone/backbone-0.9.2',
    text: '../lib/require/text-2.0.3',
    localstorage: '../lib/backbone/localstorage-1.0.0',
    jasmine: 'lib/jasmine/jasmine-1.2.0',
    'jasmine-html': 'lib/jasmine/jasmine-html-1.2.0',
    sinon: 'lib/sinon/sinon-1.4.2'
  }
});

require(['underscore', 'jquery', 'jasmine-html', 'sinon'], function(_, $, jasmine){

  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  var specs = [];

  specs.push('spec/models/todo-spec');

  $(function(){
    require(specs, function(){
      jasmineEnv.execute();
    });
  });

});
