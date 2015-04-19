define(['javascript-state-machine']
, function(StateMachine) {

    var gameFSM = function(model) {
        this.model = model;
    };

    gameFSM.prototype.onenterpaused = function(event, from, to) {
        this.model.pause();
    };

    gameFSM.prototype.onenterrunning = function(event, from, to) {
        this.model.play();
    };

    // attach FSM
    StateMachine.create({
        target: gameFSM.prototype

        , events: [
            { name: 'startup',      from: 'none',           to: 'paused'}
          , { name: 'toggle',       from: 'paused',         to: 'running'}
          , { name: 'toggle',      from: 'running',         to: 'paused'}
        ]
    });

    return gameFSM;
});
