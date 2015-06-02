setInterval(function(){
    console.log("Jacob\n");
}, 5000);

console.log("Hello, ");

var http = require("http");

setInterval(function(){
    http.get({host: "google.com"}, function(res){
        console.log("fetching google header");
        console.log(res.headers);
    });
}, 2000);
