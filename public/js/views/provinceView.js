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
      console.log(this.model.get('id'));
      return SVG.get(this.model.get('id'));
    },

    render: function() {
      var influence = this.model.get('influence');
      var color = influence > .5 ? '#0000FF' : '#FF0000'
      var stroke = this.model.get('selected') ? '5' : '2'
      this.$svg().fill(color).stroke({width: stroke});
    },

    gameModel: function() {
      return this.model.get('gameModel')
    }
  });

  return provinceView;
})
