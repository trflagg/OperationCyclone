require.config({
    paths: {
        "text" : '../bower_components/requirejs-text/text',
        'svg': './my.svg',
        'svg.parser': '../bower_components/svg.parser.js/svg.parser.min',
        'svg.import': '../bower_components/svg.import.js/svg.import.min',
        'jquery': '../bower_components/jquery/dist/jquery',
        'jquery-svg': '../bower_components/jquery-svg/jquery.svg',
        'backbone': '../bower_components/backbone/backbone',
        'underscore': '../bower_components/underscore/underscore'
    }

    , shim: {

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
        },
        "underscore": {
            deps: ["jquery"]
        }
    }
});

require([
  'views/gameView'], function(
  GameView
  ) {
    gameView = new GameView({
    });
});
