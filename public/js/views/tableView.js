define(['backbone',
  './cellView',

  'text!./tableView.html'
], function(Backbone,
  CellView,

  template
) {

  tableView = Backbone.View.extend({

    template: _.template(template),

    initialize: function() {
      var provinces = this.model.get('provinces');
      provinces.each(function(province) {
        var newCell = new CellView({
          model: province,
          id: province.get('id') + 'cell'
        })
      });

      this.render();
    },

    render: function() {
      this.$el.html(this.template({}));

      return this;
    }
  });

  return tableView;
})

