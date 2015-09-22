var express = require('express');
var router = express.Router();

//=================== GET home page ====================//
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TGS Calculator', tgsGrade : '#' });
});


//=================== POST Form =====================//
router.post('/', function(req, res) {

	console.log("processing POST from '/'");
	console.log('req.body:');
	console.log(req.body);
	
	//get input values from form and capture in variables
	var heightFeet = req.body.heightFeet,
		heightInches = req.body.heightInches,
		weight = req.body.weight,
		apeIndex = req.body.apeIndex,
		bloodAlcohol = req.body.bloodAlcohol,
		age = req.body.age,
		temperature = req.body.temperature,
		humidity = req.body.humidity,
		tgsGrade = 0;

	//calculate TGS Grade


	//send TGS Grade as response
	res.render('index', {title: "TGS Calculator", tgsGrade : tgsGrade});
})

module.exports = router;
