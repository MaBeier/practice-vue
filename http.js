var express = require('express')
var config = require('./config/index')

var port = process.env.PORT || config.dev.port

var app = express()

app.use(express.static('./dist'))

module.exports = app.listen(port,function(err){
	if(err){
		console.log(err)
		return
	}
	else{console.log('hahaha'+port)}
})