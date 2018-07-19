var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
function staticRoot(staticPath,req,res){
    var pathObj = url.parse(req.url,true);
    var filePath = path.join(staticPath,pathObj.pathname);
    fs.readFile(filePath,'binary',function(err,fileContent){
        if(err){
            console.log('404');
            res.writeHead(404,"not found");
            res.end('<h1>404 not found </h1>');
        }else{
            res.write(fileContent,'binary');
            res.end();
        }
    });
}
var server = http.createServer(function(req,res){
    staticRoot(path.join(__dirname,'sample'),req,res);
});
server.listen(9090);