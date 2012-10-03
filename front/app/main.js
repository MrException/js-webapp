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
        }
	},
	paths: {
		jquery: '../lib/jquery/jquery-1.8.2',
		underscore: '../lib/underscore/underscore-1.4.1',
		backbone: '../lib/backbone/backbone-0.9.2',
		text: '../lib/require/text-2.0.3',
		localstorage: '../lib/backbone/localstorage-1.0.0'
	}
});

require([
	'views/app',
	'routers/router'
], function( AppView, Workspace ) {
	// Initialize routing and start Backbone.history()
	new Workspace();
	Backbone.history.start();

	// Initialize the application view
	new AppView();
});
