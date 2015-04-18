define(['backbone', './provinceModel'], function(Backbone, ProvinceModel) {

  gameModel = Backbone.Model.extend({

    initialize: function() {
      this.provinces = new Backbone.Collection([], {
        model: ProvinceModel
      });

    }
  });

  return gameModel;
})
