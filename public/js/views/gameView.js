define([
  'svg',
  'svg.import',
  'backbone',
  'text!../../svg/Map.svg'
], function(
  SVG,
  svgImport,
  Backbone,
  map
) {

  var gameView = Backbone.View.extend({
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
        group.each(function() {
          this.on('click', function() {
            this.fill('#0000FF');
          });
        })
    },

    nameSpace: "http://www.w3.org/2000/svg",
    _ensureElement: function() {
       if (!this.el) {
          var attrs = _.extend({}, _.result(this, 'attributes'));
          if (this.id) attrs.id = _.result(this, 'id');
          if (this.className) attrs['class'] = _.result(this, 'className');
          var $el = $(window.document.createElementNS(_.result(this, 'nameSpace'), _.result(this, 'tagName'))).attr(attrs);
          this.setElement($el.get(0), false);
       } else {
          this.setElement(_.result(this, 'el'), false);
       }
    },
  })

  return gameView;
});
