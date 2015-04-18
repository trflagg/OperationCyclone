define(['backbone',
  'underscore',
  './provinceModel'
], function(Backbone,
  _,
  ProvinceModel) {

  gameModel = Backbone.Model.extend({

    defaults: {
      province_ids: [
        'Kandahar',
        'Zabol',
        'Helmand',
        'Nimruz',
        'Farah',
        'Herat',
        'Ghowr',
        'Oruzgan'
      ]
    },

    initialize: function() {
      this.provinces = new Backbone.Collection([], {
        model: ProvinceModel
      });
      _.each(this.get('province_ids'), function(id) {
        var new_province = new ProvinceModel({
          id: id,
          gameModel: this
        })
        this.provinces.add(new_province);
      }, this);
    },

    setSelected: function(province) {
      console.log(province.id);
    }
  });

  return gameModel;
})
