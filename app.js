var express = require('express')
var path = require('path')



var app = express()


// set up template engine
app.set('view engine', 'ejs')

// static files
app.use(express.static(___dirname + '/assets'))

// fire controller


// display home
app.get('/', function(req, res){
    res.render('index')
})




// listen to port
app.listen(3000)
console.log("listening to port 3000 right")