var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var bodyParser = require('body-parser');



router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  console.log(tweets);
  res.render( 'index', { title: 'Twitter. this is the title', tweets: tweets, showForm: true  } );
});

router.get( '/users/:name', function (req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  //console.log(name,list)
  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: list, showForm: true} );
});

router.get('/tweet/:id', function(req, res){
	var id = Number(req.params.id);
	console.log(id);
	var tweetID = tweetBank.find( {id: id} )
	console.log(tweetID);
	res.render('index', {title: 'Twitter.js - Single Tweet', tweets: tweetID} );
})

router.post('/tweets', bodyParser.json());
router.post('/tweets', bodyParser.urlencoded());

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;