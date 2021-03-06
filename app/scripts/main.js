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
        var books = [
            { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', releaseDate: '2008', keywords: 'JavaScript Programming' },
            { title: 'The Little Book on CoffeeScript', author: 'Alex MacCaw', releaseDate: '2012', keywords: 'CoffeeScript Programming' },
            { title: 'Scala for the Impatient', author: 'Cay S. Horstmann', releaseDate: '2012', keywords: 'Scala Programming' },
            { title: 'American Psycho', author: 'Bret Easton Ellis', releaseDate: '1991', keywords: 'Novel Splatter' },
            { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', releaseDate: '2011', keywords: 'JavaScript Programming' },
            { title: 'Developing Backbone Applications', author: 'Addy Osmani', releaseDate: '2011', keywords: 'JavaScript Programming' }
        ];

        new LibraryView( books );
    });
});
