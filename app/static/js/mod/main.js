define([
    'gamejs',
    'mod/constants',
    'mod/screen',
    'mod/world',
],function(gamejs, constants, screen, World) {
    return function() {
        var display = gamejs.display.setMode(constants.app.screenSize);
        var world = new World();

        screen.init();

        /// eval-update-draw

        // event handling
        gamejs.onEvent(function(event) {
        });

        // game loop
        gamejs.onTick(function(msDuration) {
            // update
            //world.update(msDuration);
            screen.update(msDuration, world);

            // draw
            display.clear();
            screen.draw(display, world);
        });
    };
});
