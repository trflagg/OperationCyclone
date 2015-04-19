define(['backbone',
  '../views/provinceView'
], function(Backbone,
  ProvinceView) {

  provinceModel = Backbone.Model.extend({

    initialize: function() {
      this.view = new ProvinceView({
        model: this,
        gameModel: this.gameModel
      });
      this.set('influence', Math.random());

      this.establishArmy();
    },

    establishArmy: function() {
      this.set('communist_army_size', _.random(10000, 50000))
      this.set('communist_arms_level', _.random(2, 4))

      this.set('rebel_army_size', _.random(5000, 20000))
      this.set('rebel_arms_level', _.random(1, 3))
    },

    gameLoop: function() {
      var comm_army = this.get('communist_army_size');
      var rebel_army = this.get('rebel_army_size');

      var comm_deaths = _.random(1, 500) * (comm_army / rebel_army);
      this.set('communist_army_size', Math.round(comm_army - comm_deaths));
    }
  });

  return provinceModel;
})
