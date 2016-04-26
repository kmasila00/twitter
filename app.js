var express = require('express');
var app = express();
var chalk = require('chalk');

app.use(function(req, res, next){
	console.log("Use is called!");
	console.log(chalk.blue("THIS IS BLUE!"));
	// res.send("Response works!");
	next();
});

app.use('/news', function(req, res, next){
	// console.log(("Use is called!"));
	console.log(chalk.blue("THIS IS BLUE!"));
	res.send("This is the news!");
});





app.listen(3000, function() {
	console.log("Working!");
});