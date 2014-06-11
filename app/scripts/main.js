/*global require*/
'use strict';

require.config({
    shim: {
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        library: 'collections/library',
        bookView: 'views/book',
        libraryView: 'views/library',
        app: 'app'
    }
});

require([
	'jquery',
    'backbone',
    'libraryView'
], function ($,Backbone, LibraryView) {
    $(function() {

        new LibraryView(books);
    });
});
