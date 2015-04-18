define(['backbone',
  'svg'
], function(Backbone,
  SVG
) {

  provinceView = Backbone.View.extend({

    initialize: function() {
      if (this.model) {
        this.listenTo(this.model, 'change', this.render);
      }
    },

    $svg: function() {
      return SVG.get(this.model.get('id'));
    },

    render: function() {
      var influence = this.model.get('influence');
      var color = influence > .5 ? '#0000FF' : '#FF0000'
      this.$svg().fill(color);
    }
  });

  return provinceView;
})
