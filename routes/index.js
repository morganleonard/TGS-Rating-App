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

	// //initialize variables to input from submitted form if it exists, empty string otherwise
	// var consensusVGrade = req.body.consensusVGrade ? req.body.consensusVGrade : '';
	// var heightFeet = req.body.heightFeet ? req.body.heightFeet : '';
	// var heightInches = req.body.heightInches ? req.body.heightInches : '';
	// var weight = req.body.weight ? req.body.weight : '';
	// var apeIndex = req.body.apeIndex ? req.body.apeIndex : '';
	// var age = req.body.age ? req.body.age : '';
	// var temperature = req.body.temperature ? req.body.temperature : '';
	// var humidity = req.body.humidity ? req.body.humidity : '';
	// var season = req.body.season ? req.body.season : '';
	// var headwind = req.body.headwind ? req.body.headwind : '';
	// var sunInEyes = req.body.sunInEyes ? req.body.sunInEyes : '';
	// var bloodAlcohol = req.body.bloodAlcohol ? req.body.bloodAlcohol : '';
	// var lastMeal = req.body.lastMeal ? req.body.lastMeal : '';
	// var cupsOfCoffee = req.body.cupsOfCoffee ? req.body.cupsOfCoffee : '';
	// var climbingArea = req.body.climbingArea ? req.body.climbingArea : '';
	// var mentalState = req.body.mentalState ? req.body.mentalState : '';
	// var hotClimbersWatching = req.body.hotClimbersWatching ? req.body.hotClimbersWatching : '';
	// var tgsGrade = 0;

	// initialize input data object members to input from submitted form if it exists, empty string otherwise
	var	tgsGrade = 0;

	var inputData = {
		consensusVGrade : (req.body.consensusVGrade ? req.body.consensusVGrade : ''),
		heightFeet : (req.body.heightFeet ? req.body.heightFeet : ''),
		heightInches : (req.body.heightInches ? req.body.heightInches : ''),
		weight : (req.body.weight ? req.body.weight : ''),
		apeIndex : (req.body.apeIndex ? req.body.apeIndex : ''),
		age : (req.body.age ? req.body.age : ''),
		temperature : (req.body.temperature ? req.body.temperature : ''),
		humidity : (req.body.humidity ? req.body.humidity : ''),
		season : (req.body.season ? req.body.season : ''),
		headwind : (req.body.headwind ? req.body.headwind : ''),
		sunInEyes : (req.body.sunInEyes ? req.body.sunInEyes : ''),
		bloodAlcohol : (req.body.bloodAlcohol ? req.body.bloodAlcohol : ''),
		lastMeal : (req.body.lastMeal ? req.body.lastMeal : ''),
		cupsOfCoffee : (req.body.cupsOfCoffee ? req.body.cupsOfCoffee : ''),
		climbingArea : (req.body.climbingArea ? req.body.climbingArea : ''),
		mentalState : (req.body.mentalState ? req.body.mentalState : ''),
		hotClimbersWatching : (req.body.hotClimbersWatching ? req.body.hotClimbersWatching : ''),
	};


	console.log('calculating points...')

	//calculate height points
	var heightPoints = 0,
		heightTotal;
	if (inputData.heightFeet && inputData.heightInches !== '') {
		heightTotal = (parseFloat(inputData.heightFeet) * 12) + parseFloat(inputData.heightInches);
		heightPoints = (68 - heightTotal) / 5;
	}	
	console.log("heightPoints:");
	console.log(heightPoints);

	//calculate weight points
	var weightPoints = 0;
	if (inputData.weight !== '') {
		weightPoints = (inputData.weight - 160) / 20;
	}
	console.log("weightPoints:");
	console.log(weightPoints);

	//calculate apeIndex points
	var apeIndexPoints = 0;
	if (inputData.apeIndex !== '') {
		apeIndexPoints = 0 - inputData.apeIndex;
	}
	console.log("apeIndexPoints:");
	console.log(apeIndexPoints);

	//calculate age points
	var agePoints = 0;
	if (inputData.age !== '') {
		agePoints = (inputData.age - 30) / 10;
	}
	console.log("agePoints:");
	console.log(agePoints);
	
	//calculate temperature points
	var temperaturePoints = 0;
	if (inputData.temperature !== '') {
		temperaturePoints = (inputData.temperature - 45)/20;
	}
	console.log("temperaturePoints:");
	console.log(temperaturePoints);

	//calculate humidity points
	var humidityPoints = 0;
	if (inputData.humidity !== '') {
		var humidityPoints = inputData.humidity / 20;
	}
	console.log("humidityPoints:");
	console.log(humidityPoints);

	//calculate season points
	var seasonPoints = 0;
	if (inputData.season === "Summer") {
		seasonPoints = 1;
	}
	if (inputData.season === "Fall") {
		seasonPoints = -1;
	}
	if (inputData.season === "Spring") {
		seasonPoints = 0;
	}
	if (inputData.season === "Winter") {
		seasonPoints = -0.5;
	}
	console.log("seasonPoints:");
	console.log(seasonPoints);

	//calculate headwind points
	var headwindPoints = 0;
	if (inputData.headwind !== '') {
		headwindPoints = inputData.headwind / 30;
	}
	console.log("headwindPoints:");
	console.log(headwindPoints);

	//calculate sunInEyes points
	var sunInEyesPoints = 0;
	if (inputData.sunInEyes !== '') {
		sunInEyesPoints = inputData.sunInEyes / 30;
	}
	console.log("sunInEyesPoints:");
	console.log(sunInEyesPoints);

	//calculate bloodAlcohol points
	var bloodAlcoholPoints = 0;
	if (inputData.bloodAlcohol !== '') {
		bloodAlcoholPoints = (inputData.bloodAlcohol - 0.05)*50;
	}
	console.log("bloodAlcoholPoints:");
	console.log(bloodAlcoholPoints);
	
	//calculate lastMeal points
	var lastMealPoints = 0;
	if (inputData.lastMeal === "mexican") {
		lastMealPoints = 1;
	}
	if (inputData.lastMeal === "italian") {
		lastMealPoints = 0;
	}
	if (inputData.lastMeal === "thai") {
		lastMealPoints = -0.5;
	}
	if (inputData.lastMeal === "indian") {
		lastMealPoints = -0.5;
	}
	if (inputData.lastMeal === "salad") {
		lastMealPoints = -1;
	}
	if (inputData.lastMeal === "pizza") {
		lastMealPoints = 0;
	}
	if (inputData.lastMeal === "burger") {
		lastMealPoints = 0;
	}
	if (inputData.lastMeal === "kale") {
		lastMealPoints = -2;
	}
	if (inputData.lastMeal === "beer") {
		lastMealPoints = 0.5;
	}
	if (inputData.lastMeal === "whiskey") {
		lastMealPoints = 1;
	}
	if (inputData.lastMeal === "cornDog") {
		lastMealPoints = 0.5;
	}
	if (inputData.lastMeal === "pepperoni") {
		lastMealPoints = 0;
	}
	if (inputData.lastMeal === "cigarette") {
		lastMealPoints = -1;
	}
	console.log("lastMealPoints:");
	console.log(lastMealPoints);

	//calculate cupsOfCoffee points
	var cupsOfCoffeePoints = 0;
	if (inputData.cupsOfCoffee !== '') {
		cupsOfCoffeePoints = inputData.cupsOfCoffee - 1;	
	}
	console.log("cupsOfCoffeePoints:");
	console.log(cupsOfCoffeePoints);

	//calculate climbingArea points
	var climbingAreaPoints = 0;
	if (inputData.climbingArea === "hueco") {
		climbingAreaPoints = 0;
	}
	if (inputData.climbingArea === "bishop") {
		climbingAreaPoints = -1;
	}
	if (inputData.climbingArea === "joesvalley") {
		climbingAreaPoints = -2;
	}
	if (inputData.climbingArea === "leavenworth") {
		climbingAreaPoints = 0.5;
	}
	if (inputData.climbingArea === "squamish") {
		climbingAreaPoints = 1;
	}
	if (inputData.climbingArea === "carver") {
		climbingAreaPoints = 0;
	}
	if (inputData.climbingArea === "littleCottonwood") {
		climbingAreaPoints = 1.5;
	}
	if (inputData.climbingArea === "moesValley") {
		climbingAreaPoints = -2;
	}
	if (inputData.climbingArea === "fontainebleau") {
		climbingAreaPoints = 1;
	}
	if (inputData.climbingArea === "myLocalArea") {
		climbingAreaPoints = -1;
	}
	if (inputData.climbingArea === "anywhereInColorado") {
		climbingAreaPoints = -1.5;
	}
	if (inputData.climbingArea === "other") {
		climbingAreaPoints = 0;
	}			
	console.log("climbingAreaPoints:");
	console.log(climbingAreaPoints);

	//calculate mentalState points
	var mentalStatePoints = 0;
	if (inputData.mentalState === "distracted") {
		mentalStatePoints = 0.5;
	}
	if (inputData.mentalState === "focused") {
		mentalStatePoints = -0.5;
	}
	if (inputData.mentalState === "spaceCadet") {
		mentalStatePoints = 0;
	}
	if (inputData.mentalState === "psyched") {
		mentalStatePoints = -0.5;
	}
	if (inputData.mentalState === "hungover") {
		mentalStatePoints = 1;
	}
	console.log("mentalStatePoints:");
	console.log(mentalStatePoints);

	//calculate hotClimbersWatching points
	var hotClimbersWatchingPoints = 0;
	if (inputData.hotClimbersWatching !== '') {
		hotClimbersWatchingPoints = inputData.hotClimbersWatching / 2;
	}
	console.log("hotClimbersWatchingPoints:");
	console.log(hotClimbersWatchingPoints);

	//calculate TGS Grade
	tgsGrade = parseFloat(consensusVGrade) + parseFloat(heightPoints) + parseFloat(weightPoints) 
				+ parseFloat(apeIndexPoints) + parseFloat(agePoints) + parseFloat(temperaturePoints) 
				+ parseFloat(humidityPoints) + parseFloat(seasonPoints) + parseFloat(headwindPoints)
				+ parseFloat(sunInEyesPoints) + parseFloat(bloodAlcoholPoints) + parseFloat(lastMealPoints) 
				+ parseFloat(cupsOfCoffeePoints) + parseFloat(climbingAreaPoints) + parseFloat(mentalStatePoints);

	tgsGrade = tgsGrade.toFixed(2);

	console.log("tgsGrade");
	console.log(tgsGrade);

	//send TGS Grade as response
	res.send({tgsGrade:tgsGrade});
	// res.render('index', {title: "TGS Calculator", tgsGrade : tgsGrade});
})

module.exports = router;
