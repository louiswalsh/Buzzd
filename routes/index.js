var express = require('express');
var router = express.Router();

/* GET users listing. */

// req = request; res = response; next = chain of events
router.get('/', function(req, res, next) {
	res.render('index',
		{title: "BUZZ'D"});
});

router.get('/sweetspot', function(req, res, next) {
	res.render('sweetspot',
	 	{title: "The Sweet Spot"});
});

router.get('/bac', function(req, res, next) {
	res.render('bac',
		{title: "Blood Alcohol Calculator"});
});

router.get('/cups', function(req, res, next) {
	res.render('cups',
	 	{title: "CUPS"});
});

router.get('/events', function(req, res, next) {
	res.render('events',
	 	{title: "Upcoming Events"});
});

router.get('/resources', function(req, res, next) {
	res.render('resources',
	 	{title: "Resources"});
});

router.get('/contact', function(req, res, next) {
	res.render('contact',
	 	{title: "Contact Us"});
});

module.exports = router;
