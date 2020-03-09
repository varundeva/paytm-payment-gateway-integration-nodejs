//Initialise Express
var express = require('express')
var app = express()
var bodyParser  = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// set the view engine to ejs
app.set('view engine', 'ejs');
//initialise DOTENV
require('dotenv').config()

//Include Route File
const routes = require('./routes')(app)
//Listen For Port 4000
app.listen(4000,()=>{
    console.log("Listening on 4000")
})