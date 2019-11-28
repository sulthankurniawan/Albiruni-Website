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

// display KBTK
app.get('/kbtk', function(req, res){
    res.render('kbtk')
})

// display SD
app.get('/sd', function(req, res){
    res.render('sd')
})

// display SMP
app.get('/smp', function(req, res){
    res.render('smp')
})

// display SMA
app.get('/sma', function(req, res){
    res.render('sma')
})


// listen to port
app.listen(3000)
console.log("listening to port 3000 right")