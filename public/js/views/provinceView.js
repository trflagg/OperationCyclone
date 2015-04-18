define(['backbone',
  'svg'
], function(Backbone,
  SVG
) {

  provinceView = Backbone.View.extend({

    initialize: function() {
      if (this.model) {
        this.listenTo(this.model, 'change', this.render);

        var _this = this
        this.$svg().on('click', function() {
          _this.gameModel().setSelected(_this.model);
        })
      }
    },

    $svg: function() {
      return SVG.get(this.model.get('id'));
    },

    render: function() {
      var influence = this.model.get('influence');
      var color = influence > .5 ? '#0069A4' : '#ED0021'
      var stroke = this.model.get('selected') ? '7' : '2'
      this.$svg().fill(color).stroke({width: stroke, color: '#FFF'});
    },

    gameModel: function() {
      return this.model.get('gameModel')
    }
  });

  return provinceView;
})
