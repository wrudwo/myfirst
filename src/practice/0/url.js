var url = require('url')
var fs = require('fs')

function renderHTML(path,res){
    fs.readFile(path, function(error, data){
        if(error){
            res.writeHead(404)
            res.write('file not found')
        } else{
            res.write(data)
        }
        res.end()
    })
}

module.exports = {
    handleRequest : function(req,res){
        res.writeHead(200,{'Content-Type' : 'text/html'})
        var path = url.parse(req.url).pathname
        console.log(path)
        switch(path){
            case '/':
                renderHTML('templates/index.html',res)
                break;
            case '/a/':
                renderHTML('templates/a.html',res)
                break;
            case '/b/':
                renderHTML('templates/b.html',res)
                break;
            default : 
                res.writeHead(404)
                res.write('404 not found')
                res.end()                
       }
    }
}