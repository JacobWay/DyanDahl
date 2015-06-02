var http = require("http");

http.createServer(function(req, res){
    res.writeHead(200, {
        "content-type": "text/plain"
    });
    setTimeout(function(){
        res.end(" and Jacob");
    }, 2000);
    res.write("hello, world");
}).listen(55555);
