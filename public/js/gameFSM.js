define(['javascript-state-machine']
, function(StateMachine) {

    var gameFSM = function(model) {
        this.model = model;
    };

    gameFSM.prototype.onpaused = function(event, from, to) {
    };

    gameFSM.prototype.onrunning = function(event, from, to) {
    };

    // attach FSM
    StateMachine.create({
        target: gameFSM.prototype

        , events: [
            { name: 'startup',      from: 'none',           to: 'paused'}
          , { name: 'go',           from: 'paused',         to: 'running'}
          , { name: 'pause',      from: 'running',         to: 'paused'}
        ]
    });

    return gameFSM;
});
