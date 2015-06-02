var net = require("net");
var sockets = [];

net.createServer(function(socket){
    sockets.push(socket);

    socket.on("data", function(d){
        for(var i=0; i<sockets.length; i++){
            var s = sockets[i];
            if (s != socket)
                s.write(d + "**\n");
        }
    });

    socket.on("end", function(){
        var i = sockets.indexOf(socket);
        sockets.splice(i, 1);
    });

}).listen(9999);
