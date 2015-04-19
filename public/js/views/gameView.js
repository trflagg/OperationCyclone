define([
  'svg',
  'svg.import',
  './svgView',

  './tableView',
  './commandView',

  '../models/gameModel',

  'text!../../svg/Map2.svg'
], function(
  SVG,
  svgImport,
  SVGView,

  TableView,
  CommandView,

  GameModel,

  map
) {

  var gameView = SVGView.extend({

    initialize: function() {
      this.showMap();
      this.model = new GameModel();
      this.createTable();
      this.createCommands();
      this.listenTo(this.model, 'change', this.gameModelChanged);
    },

    showMap: function() {
      var draw = SVG('drawing');
      draw.svg(map)

      var group = SVG.get('Map');
      group.scale(0.4, 0.4);
      group.each(function() {
          this.fill('#FF0000').stroke({color: '#FFF', width: 2})
      });
    },

    createTable: function() {
      this.tableView = new TableView({
        el: $("#table"),
        model: this.model
      })
    },

    createCommands: function() {
      this.commandView = new CommandView({
        el: $("#commands"),
        model: this.model
      })
    },

    gameModelChanged: function(e) {
      $("#selected_province_name").html(e.get('selected').get('id'));
    }

  })

  return gameView;
});
