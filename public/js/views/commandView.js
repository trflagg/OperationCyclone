define(['backbone',

  'text!./commandView.html'
], function(Backbone,

  template
) {

  commandView = Backbone.View.extend({

    template: _.template(template),

    events: {
      "click #play":  "playClicked"
    },
    initialize: function() {
      this.render();

      this.listenTo(this.model, 'change:playing', function() {
        if (this.model.get('playing')) {
          this.$('#play').html('Pause');
        } else {
          this.$('#play').html('Play');
        }
      })
    },

    render: function() {
      this.$el.html(this.template({}));
      return this;
    },

    playClicked: function() {
      this.model.fsm.toggle();
    }
  });

  return commandView;
})

