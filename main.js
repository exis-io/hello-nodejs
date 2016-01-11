var riffle = require('jsriffle');

riffle.SetFabric(process.env.WS_URL);
riffle.SetLogLevelInfo();

var domain = riffle.Domain(process.env.DOMAIN);

domain.onJoin = function() {
    this.Register("echo", riffle.want(function(msg) {
        console.log("Echo: " + msg);
        return msg;
    }, String));
}

domain.Join()
