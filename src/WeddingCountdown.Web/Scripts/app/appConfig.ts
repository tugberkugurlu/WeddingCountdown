/// <reference path="app.ts" />
/// <reference path="../typings/requirejs/require.d.ts" />

require.config({ });

require(['app'], (main) => {

    var app = new main.App();
    app.run();
});