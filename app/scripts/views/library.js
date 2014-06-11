/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'bookView',
  'library',
  'templates'
], function ($, _, Backbone, BookView, Library, JST) {
  'use strict';

  var LibraryView = Backbone.View.extend({
    template: JST['app/scripts/templates/library.ejs'],

    el: '#books',

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function (initialBooks) {
      var that = this;
      this.collection = new Library();
      this.collection.fetch().done(function(){
        that.render();
      });


    },

    render: function () {
      //this.$el.html(this.template(this.model.toJSON()));
      this.collection.each(function (item) {
        var bookView = new BookView({model: item});
        bookView.render();
        console.log(bookView.el);
        $('#books').append(bookView.render().el);
      });
    },

  });

  return LibraryView;
});
