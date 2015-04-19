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
        'Oruzgan',
        'Badghis',
        'Faryab',
        'Sar-e-Pol',
        'Balkh',
        'Bamian',
        'Wardak',
        'Lowgar',
        'Kabul',
        'Nangrahar',
        'Paktika',
        'Baghlan',
        'Badakhshan'
      ],

      selected: null
    },

    initialize: function() {
      this.set('provinces', new Backbone.Collection([], {
        model: ProvinceModel
      }));
      _.each(this.get('province_ids'), function(id) {
        var new_province = new ProvinceModel({
          id: id,
          gameModel: this
        })
        this.get('provinces').add(new_province);
      }, this);
    },

    setSelected: function(province) {
      this.set('selected', province);
      selected = this.get('provinces').find(function(search_province) {
        return search_province.get('selected');
      })
      if (selected) {selected.set('selected', false)};
      province.set('selected', true);
    }
  });

  return gameModel;
})
