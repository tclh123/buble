require.config({
    paths: {
        'gamejs': 'lib/gamejs/gamejs'
    },

    //shim: {
    //    'gamejs': {
    //        exports: 'gamejs'
    //    }
    //},

});

require(['gamejs', 'mod/main'], function(gamejs, main) {
    gamejs.preload([]);
    gamejs.ready(main);
});
