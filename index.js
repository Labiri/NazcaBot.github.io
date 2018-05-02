const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const pug = require('pug')

const app = express()

/* Templates */
const home = pug.compileFile(__dirname + '/src/templates/home.pug')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(__dirname + '/static'))


/* Routes */
app.get('/', function(req, res, next) {
  res.send( home({ title: 'Home' }) )
})


// app.get('/terms', function(req, res, next) {
//   res.send( terms({ title: 'Terms&Conditions' }) )
// })
// app.get('/privacy-policy', function(req, res, next) {
//   res.send( privacyPolicy({ title: 'PrivacyPolicy' }) )
// })


app.listen(3030, function () {
  console.log('Listening on http://localhost:3030')
})
