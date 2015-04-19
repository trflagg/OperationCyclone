define(['backbone',

  'text!./commandView.html'
], function(Backbone,

  template
) {

  commandView = Backbone.View.extend({

    template: _.template(template),

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html(this.template({}));
      return this;
    }
  });

  return commandView;
})

