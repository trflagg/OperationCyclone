require.config({
    paths: {
        "text" : '../bower_components/requirejs-text/text',
        'svg': '../bower_components/svg.js/dist/svg',
        'svg.parser': '../bower_components/svg.parser.js/svg.parser.min',
        'svg.import': '../bower_components/svg.import.js/svg.import.min'
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
        }
    }
});

require(['svg', 'svg.import', 'text!../svg/Map.svg']
, function(SVG,
    svgImport,
    map) {

    var draw = SVG('drawing')
    draw.svg(map)

    var element = SVG.get('Helmand')
    element.fill('#FF0000').stroke({color: '#000', width: 5})
    var group = SVG.get('Group');
    group.each(function() {
        this.mouseover(function() {
            this.fill('#0000FF');
        });
        this.mouseout(function() {
            this.fill("#FFF");
        });
    })
});
