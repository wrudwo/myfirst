var express = require('express')
var path = require('path')
var app = express()

app.set('view engine','pug')
app.set('views', path.join(__dirname,'/view'))

app.get('/', function(req, res){
    res.render('index',{title : 'Hey', message :'Hello there!'})
})

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