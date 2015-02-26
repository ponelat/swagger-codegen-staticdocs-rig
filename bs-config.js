
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
    "files": "*.html,\
              data.json,\
              *.js,\
              js/*.js,\
              mustache/*.mustache,\
              build/*.*",
    "server": true,
    "proxy": false,
    "port": 3000,
    "ghostMode": false,
    "logLevel": "info",
    "logPrefix": "BS",
    "logConnections": false,
    "logFileChanges": true,
    "logSnippet": true,
    "open": "local",
    "browser": "default",
    "xip": false,
    "hostnameSuffix": false,
    "notify": true,
    "scrollProportionally": true,
    "scrollThrottle": 0,
    "reloadDelay": 0,
    "injectChanges": true,
    "startPath": "index.html",
    "minify": false,
    "host": null,
    "codeSync": true,
    "timestamps": true,
    "socket": {
        "path": "/browser-sync/socket.io",
        "clientPath": "/browser-sync",
        "namespace": "/browser-sync"
    },
    "debugInfo": true
};
