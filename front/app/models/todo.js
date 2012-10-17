define(['underscore', 'backbone'], function(_, Backbone, Store) {
  var Todo = Backbone.Model.extend({
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
