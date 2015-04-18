define(['backbone'], function(Backbone) {

  provinceModel = Backbone.Model.extend({

    initialize: function() {
      this.set('influence', Math.random());
    }
  });

  return provinceModel;
})
