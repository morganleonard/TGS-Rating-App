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
	var consensusVGrade = resq.body.consensusVGrade,
		heightFeet = req.body.heightFeet,
		heightInches = req.body.heightInches,
		weight = req.body.weight,
		age = req.body.age,
		temperature = req.body.temperature,
		humidity = req.body.humidity,
		season = req.body.season,
		headwind = req.body.headwind,
		sunInEyes = req.body.sunInEyes,
		bloodAlcohol = req.body.bloodAlcohol,
		lastMeal = req.body.lastMeal,
		cupsOfCoffee = req.body.cupsOfCoffee,		
		climbingArea = req.body.climbingArea,
		mentalState = req.body.mentalState,
		hotClimbersWatching = req.body.hotClimbersWatching,		
		tgsGrade = consensusVGrade;
		tgsPoints = 0;

	//calculate TGS Grade

	//calculate height points
	var heightPoints,
		heightTotal;
	heightTotal = (heightFeet * 12) + heightInches;
	heightPoints = 68 - heightTotal;
	console.log("heightPoints:");
	console.log(heightPoints);

	//calculate weight points
	var weightPoints = weight - 160;
	console.log("weightPoints:");
	console.log(weightPoints);

	//calculate age points
	var agePoints = age -30;
	console.log("agePoints:");
	console.log(agePoints);
	
	//calculate temperature points
	var temperaturePoints = ((temperature - 45)/20);
	console.log("temperaturePoints:");
	console.log(temperaturePoints);

	//calculate humidity points
	var humidityPoints = humidity / 20;
	console.log("humidityPoints:");
	console.log(humidityPoints);

	//calculate season points
	var seasonPoints = 0;
	if season === "Summer" {
		seasonPoints = 1;
	}
	if season === "Fall" {
		seasonPoints = -1;
	}
	if season === "Spring" {
		seasonPoints = 0;
	}
	if season === "Winter" {
		seasonPoints = -0.5;
	}
	console.log("seasonPoints:");
	console.log(seasonPoints);

	//calculate headwind points
	var headwindPoints = headwind / 30;
	console.log("headwindPoints:");
	console.log(headwindPoints);

	//calculate sunInEyes points
	var sunInEyesPoints = sunInEyes / 30;
	console.log("sunInEyesPoints:");
	console.log(sunInEyesPoints);

	//calculate bloodAlcohol points
	var bloodAlcoholPoints = (bloodAlcohol - 0.05)*50;
	console.log("bloodAlcoholPoints:");
	console.log(bloodAlcoholPoints);

	//calculate cupsOfCoffee points
	var cupsOfCoffeePoints = cupsOfCoffee - 1;
	console.log("cupsOfCoffeePoints:");
	console.log(cupsOfCoffeePoints);

	//calculate climbingArea points
	var climbingAreaPoints = 0;
	if climbingArea === "hueco" {
		climbingAreaPoints = 0;
	}
	if climbingArea === "bishop" {
		climbingAreaPoints = -1;
	}
	if climbingArea === "joesvalley" {
		climbingAreaPoints = -2;
	}
	if climbingArea === "leavenworth" {
		climbingAreaPoints = 0.5;
	}
	if climbingArea === "squamish" {
		climbingAreaPoints = 1;
	}
	if climbingArea === "carver" {
		climbingAreaPoints = 0;
	}
	if climbingArea === "littleCottonwood" {
		climbingAreaPoints = 1.5;
	}
	if climbingArea === "moesValley" {
		climbingAreaPoints = -2;
	}
	if climbingArea === "fontainebleau" {
		climbingAreaPoints = 1;
	}
	if climbingArea === "myLocalArea" {
		climbingAreaPoints = -1;
	}
	if climbingArea === "anywhereInColorado" {
		climbingAreaPoints = -1.5;
	}
	if climbingArea === "other" {
		climbingAreaPoints = 0;
	}			
	console.log("climbingAreaPoints:");
	console.log(climbingAreaPoints);

	//calculate mentalState points
	var mentalStatePoints

	console.log("mentalStatePoints:");
	console.log(mentalStatePoints);

	//calculate hotClimbersWatching points
	var hotClimbersWatchingPoints

	console.log("hotClimbersWatchingPoints:");
	console.log(hotClimbersWatchingPoints);




	//send TGS Grade as response
	res.send({tgsGrade:tgsGrade});
	// res.render('index', {title: "TGS Calculator", tgsGrade : tgsGrade});
})

module.exports = router;
