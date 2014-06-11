/*global define*/

define([
    'underscore',
    'backbone',
    'models/book'
], function (_, Backbone, Book) {
    'use strict';

    var Library = Backbone.Collection.extend({
    	url: 'scripts/book.json',
      model: Book,
      getResults: function(){
        var that = this;

        this.fetch({
          reset: true,
          success: function(collection, response, options){
            that.trigger('successOnFetch');
          },
          error: function(collection, response, options){
            that.trigger('errorOnFetch');
          }
        })
      }
    });

    return Library;
});
