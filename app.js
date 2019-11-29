var express = require('express')
var path = require('path')
var errorhandler = require('errorhandler')

var app = express()


// set up template engine
app.set('view engine', 'ejs')
app.use('/assets', express.static('views'))

// static files
app.use(express.static('assets'))
// app.use(express.static(path.join(__dirname + '/assets')));

// fire controller


// display home
app.get('/index', function(req, res){
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

// display SMP SMA
app.get('/smp-sma', function(req, res){
    res.render('smp-sma')
})



// listen to port
app.listen(3000)
console.log("listening to port 3000 right")