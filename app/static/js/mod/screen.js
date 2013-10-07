define([
    'gamejs',
    'mod/constants',
],function(gamejs, constants) {
    var surfaces = {};

    var init = function() {
    };

    var update = function(msDuration, world) {
    };

    /*
     * Draws every little detail in the screen.
     */
    var draw = function(display, world) {
        display.blit(
            (new gamejs.font.Font('30px Sans-serif')).render('Hello World')
        );
    };

    /*
     * Pauses the game and draw the pause screen
     */
    var pause = function(display) {
    };

    /*
     * Unpauses and destroys the pause screen
     */
    var unpause = function(display) {
    };

    return {
        init: init,
        update: update,
        draw: draw,
        pause: pause,
        unpause: unpause,
    };
});
