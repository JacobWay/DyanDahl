var net = require("net");

net.createServer(function(socket){
    setTimeout(function(){
        socket.write("Jacob\n");
    }, 1000);

    socket.write("hello \n");

    socket.on("data", function(data){
        socket.write(data + "???\n");
    });
}).listen(9999);
