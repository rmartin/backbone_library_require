/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var Book = Backbone.Model.extend({
        url: '',

        initialize: function() {
        },

        defaults: {
            coverImage: 'http://placehold.it/350x130',
            title: 'no title',
            author: 'unknown',
            releaseDate: 'unknown',
            keywords: 'none'
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return Book;
});
