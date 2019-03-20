var express = require('express')
var path = require("path")
var app = express()

app.set('view engine','pug')
app.set('views',path.join(__dirname))


app.get('/',function(req,res){
   res.render('index')
})

app.listen(2000,function(){
   console.log('Server is running') 
})
