/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var BookView = Backbone.View.extend({
        template: JST['app/scripts/templates/book.ejs'],

        tagName: 'div',

        id: '',

        className: 'bookContainer',

        events: {},

        initialize: function () {
           
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return BookView;
});
