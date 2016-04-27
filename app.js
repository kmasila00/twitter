var express = require('express');
var app = express();
var chalk = require('chalk');
var swig = require('swig');
var morgan = require('morgan');
var routes = require('./routes');
var bodyParser = require('body-parser');



app.use(morgan('dev'));



app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

swig.setDefaults({ cache: false });

app.use('/', routes);
app.use(express.static('public'));

// app.use(function(req, res, next){
// 	console.log("Use is called!");
// 	console.log(chalk.blue("THIS IS BLUE!"));
// 	// res.send("Response works!");
// 	next();
// });

// app.use(function(req, res, next){
// 	// console.log(("Use is called!"));
// 	console.log(chalk.blue("THIS IS BLUE!"));
// 	// res.send("This is the news!");
// 	next();
// });




app.listen(3000, function() {
	console.log("Working!");
});