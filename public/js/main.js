require.config({
    paths: {
        "text" : '../bower_components/requirejs-text/text',
        'svg': '../bower_components/svg.js/dist/svg',
        'svg.parser': '../bower_components/svg.parser.js/svg.parser.min',
        'svg.import': '../bower_components/svg.import.js/svg.import.min',
        'jquery': '../bower_components/jquery/dist/jquery',
        'jquery-svg': '../bower_components/jquery-svg/jquery.svg',
        'backbone': '../bower_components/backbone/backbone',
        'underscore': '../bower_components/underscore/underscore'
    }

    , shim: {
        // 'backbone': {
        //     deps: ['underscore']
        // },

        'svg': {
            exports: 'SVG'
        },
        'svg.parser': {
            deps: ['svg']
        },
        'svg.import': {
            deps: ['svg', 'svg.parser']
        },
        'jquery-svg': {
            deps: ['jquery']
        },
        "backbone": {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        }
    }
});

require([
  'svg',
  'svg.import',
  'jquery',
  'underscore',
  'backbone',
  'views/gameView'], function(
  SVG,
  svgImport,
  jquery,
  _,
  Backbone,
  GameView) {
    gameView = new GameView({
    });
});
