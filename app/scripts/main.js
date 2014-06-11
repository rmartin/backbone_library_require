/*global require*/
'use strict';

require.config({
    shim: {
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        libraryCollection: 'collections/library',
        bookView: 'views/book',
        libraryView: 'views/library',
        app: 'app'
    }
});

require([
	'jquery',
    'backbone',
    'libraryCollection',
    'libraryView'
], function ($,Backbone, LibraryCollection, LibraryView) {
    $(function() {

        var libraryCollection = new LibraryCollection();
        var libraryView = new LibraryView({ collection: libraryCollection });
        libraryCollection.getResults();
    });
});
