define(['backbone',

  'text!./cellView.html'
], function(Backbone,

  template
) {

  tableView = Backbone.View.extend({

    template: _.template(template),

    initialize: function() {

      this.render();
    },

    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    }
  });

  return tableView;
})
