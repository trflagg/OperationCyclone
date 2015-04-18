define(['backbone',
  '../views/provinceView'
], function(Backbone,
  ProvinceView) {

  provinceModel = Backbone.Model.extend({

    initialize: function() {
      this.view = new ProvinceView({
        model: this
      });
      this.set('influence', Math.random());

    }
  });

  return provinceModel;
})
