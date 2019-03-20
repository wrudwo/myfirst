var express = require('express')
var fs = require('fs')
var path = require("path")

var app = express()

app.set('view engine','pug')
app.set('views',path.join(__dirname,'/views'))

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
   res.render('index')
})

app.listen(2000,function(){
   console.log('Server is running') 
})
