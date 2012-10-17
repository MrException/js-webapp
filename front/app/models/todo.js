define([
       'underscore',
       'backbone',
       'localstorage'
], function(_, Backbone, Store) {

  var Todo = Backbone.Model.extend({
    url: "/todo",
    //localStorage: new Store('todos-backbone'),
    // Default attributes for the todo
    // and ensure that each todo created has `title` and `completed` keys.
    defaults: {
      title: '',
      completed: false
    },

    validate: function(attrs) {
      if (_.isEmpty(attrs.title)) {
        return "Missing Title";
      }
    },

    // Toggle the `completed` state of this todo item.
    toggle: function() {
      this.save({
        completed: !this.get('completed')
      });
    }
  });

  return Todo;
});
