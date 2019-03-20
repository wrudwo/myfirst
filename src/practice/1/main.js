var express = require('express')
var path = require('path')
var app = express()

app.get('/dd',function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(3000,function(){
    console.log('Example app listening on port 3000!')
})

/*
app.get('/2', function(req,res){
    res.send('gsads')
})
app.get('/3', function(req,res){
    res.send('sdjklajflka')
})
app.get('/4', function(req,res){
    res.sendFile (path.join(__dirname + '/index.html'))
})
*/