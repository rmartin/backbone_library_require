/*global define*/

define([
    'underscore',
    'backbone',
    'models/book'
], function (_, Backbone, Book) {
    'use strict';

    var Library = Backbone.Collection.extend({
    	url: 'scripts/book.json',
        model: Book
    });

    return Library;
});
