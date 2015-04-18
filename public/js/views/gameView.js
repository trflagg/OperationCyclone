define([
  'svg',
  'svg.import',
  './svgView',

  '../models/gameModel',

  'text!../../svg/Map.svg'
], function(
  SVG,
  svgImport,
  SVGView,

  GameModel,

  map
) {

  var gameView = SVGView.extend({

    initialize: function() {
      this.showMap();
      this.model = new GameModel();
      this.listenTo(this.model, 'change', this.gameModelChanged);
    },

    showMap: function() {
      var draw = SVG('drawing');
      draw.svg(map)

      var group = SVG.get('Group');
      group.each(function() {
          this.fill('#FF0000').stroke({color: '#000', width: 5})
      });
    },

    gameModelChanged: function(e) {
      $("#selected_province_name").html(e.get('selected').get('id'));
    }

  })

  return gameView;
});
