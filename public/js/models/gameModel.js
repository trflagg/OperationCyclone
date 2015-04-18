define(['backbone',
  'underscore',
  './provinceModel'
], function(Backbone,
  _,
  ProvinceModel) {

  gameModel = Backbone.Model.extend({

    initialize: function() {
      this.provinces = new Backbone.Collection([], {
        model: ProvinceModel
      });

      var province_ids = [
        'Kandahar',
        'Zabol',
        'Helmand',
        'Nimruz',
        'Farah',
        'Herat',
        'Ghowr',
        'Oruzgan'
      ]
      _.each(province_ids, function(id) {
        var new_province = new ProvinceModel({
          id: id
        })
        this.provinces.add(new_province);
      }, this);

    }
  });

  return gameModel;
})
