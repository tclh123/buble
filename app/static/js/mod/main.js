define([
    'gamejs',
    'mod/constants',
],function(gamejs, constants) {
    return function() {
        var display = gamejs.display.setMode(constants.app.screenSize);
        display.blit(
            (new gamejs.font.Font('30px Sans-serif')).render('Hello World')
        );
        gamejs.onEvent(function(event) {
            // event handling
        });
        gamejs.onTick(function(msDuration) {
            // game loop
        });
    };
});
