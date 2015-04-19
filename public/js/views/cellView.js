define(['backbone',

  'text!./cellView.html'
], function(Backbone,

  template
) {

  tableView = Backbone.View.extend({

    template: _.template(template),

    initialize: function() {
      this.render();
      this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
      var attrs = this.model.attributes
      attrs.withComma = function(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      this.$el.html(this.template(this.model.attributes));
      var color = this.model.get('influence') > .5 ? '#0069A4' : '#ED0021'
      this.$el.css('border-color', color);
      return this;
    }
  });

  return tableView;
})
