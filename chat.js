var net = require("net");
var sockets = [];

net.createServer(function(socket){
    sockets.push(socket);

    for(var i=0; i<sockets.length; i++){
        var s = sockets[i];
        s.on("data", function(d){
            s.write(d + "??");

        });
    }
}).listen(9999);
