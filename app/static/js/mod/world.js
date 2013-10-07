define([
    'gamejs',
    'mod/constants',
],function(gamejs, constants) {
    /*
     * What the world needs to control:
     * 1. updating levels
     * 2. controlling enemies generation in those levels
     * 3. ...
     */

    var World = function() {
        //this.player = new $p.Player();

        this.paused   = false;
        this.gameOver = false;

        // scoring
        // levels

    };

    World.prototype.draw = function(display) {
        //this.player.draw(display);
        //this.enemies.draw(display);

    };

    World.prototype.handle = function(event) {
        //this.player.handle(event);

        // pause / unpause world
        if (event.type === gamejs.event.KEY_DOWN && event.key === gamejs.event.K_ESC)
            this.paused = !this.paused;
    };

    World.prototype.update = function(msDuration) {
    };

    return World;
});
