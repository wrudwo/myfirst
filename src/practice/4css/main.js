var express = require('express')
var path = require('path')
var fs = require('fs')

var app = express()

app.set('view engine','pug')
app.set('views',path.join(__dirname,'/views'))

app.use(express.static(path.join(__dirname,'public')))

app.get('/', function(req,res){
    res.render('index')
})
app.get('/Box-sizing',function(req,res){
    res.render('name/Box-sizing')
})

app.listen(2020,function(){
    console.log('SELAB')
})