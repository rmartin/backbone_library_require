/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'bookView',
  'templates'
], function ($, _, Backbone, BookView, JST) {
  'use strict';

  var LibraryView = Backbone.View.extend({
    template: JST['app/scripts/templates/library.ejs'],

    el: '#books',

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function () {
      this.listenTo(this.collection, 'successOnFetch', this.handleSuccess);
      this.listenTo(this.collection, 'errorOnFetch', this.handleError);
    },

    handleSuccess: function(){
      this.render();
    },

    handleError: function(){
    },

    render: function () {
      //this.$el.html(this.template(this.model.toJSON()));
      this.collection.each(function (item) {
        var bookView = new BookView({model: item});
        bookView.render();
        console.log(bookView.el);
        $('#books').append(bookView.render().el);
      });
    }
  });

  return LibraryView;
});
