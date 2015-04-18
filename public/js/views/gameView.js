define([
  'svg',
  'svg.import',
  './svgView',
  'text!../../svg/Map.svg'
], function(
  SVG,
  svgImport,
  SVGView,
  map
) {

  var gameView = SVGView.extend({
    id: 'gameView',

    initialize: function() {
      this.showMap();
    },

    showMap: function() {
      var draw = SVG('drawing');
        draw.svg(map)

        var group = SVG.get('Group');
        group.each(function() {
            this.fill('#FF0000').stroke({color: '#000', width: 5})
        });
    },


  })

  return gameView;
});
