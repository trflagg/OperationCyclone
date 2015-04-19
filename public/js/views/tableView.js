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
      // this.render();

      var provinces = this.model.get('provinces');
      provinces.each(function(province, i) {
        var newCell = new CellView({
          model: province,
          id: province.get('id') + 'cell',
          tagName: 'li',
          className: 'cell'
        });
        if (i < 15) {
          this.$el.append(newCell.el);
        } else {
          $('#second_table').append(newCell.el);
        }
      }, this);

    },

    render: function() {
      // this.$el.html(this.template({}));

      return this;
    }
  });

  return tableView;
})

