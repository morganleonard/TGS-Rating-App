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

	//initialize variables to input from submitted form if it exists, 0 otherwise
	var consensusVGrade = req.body.consensusVGrade ? req.body.consensusVGrade : '';
	var heightFeet = req.body.heightFeet ? req.body.heightFeet : '';
	var heightInches = req.body.heightInches ? req.body.heightInches : '';
	var weight = req.body.weight ? req.body.weight : '';
	var apeIndex = req.body.apeIndex ? req.body.apeIndex : '';
	var age = req.body.age ? req.body.age : '';
	var temperature = req.body.temperature ? req.body.temperature : '';
	var humidity = req.body.humidity ? req.body.humidity : '';
	var season = req.body.season ? req.body.season : '';
	var headwind = req.body.headwind ? req.body.headwind : '';
	var sunInEyes = req.body.sunInEyes ? req.body.sunInEyes : '';
	var bloodAlcohol = req.body.bloodAlcohol ? req.body.bloodAlcohol : '';
	var lastMeal = req.body.lastMeal ? req.body.lastMeal : '';
	var cupsOfCoffee = req.body.cupsOfCoffee ? req.body.cupsOfCoffee : '';
	var climbingArea = req.body.climbingArea ? req.body.climbingArea : '';
	var mentalState = req.body.mentalState ? req.body.mentalState : '';
	var hotClimbersWatching = req.body.hotClimbersWatching ? req.body.hotClimbersWatching : '';
	var tgsGrade = 0;

	console.log('calculating points...')

	//calculate height points
	var heightPoints = 0,
		heightTotal;
	if (heightFeet && heightInches !== '') {
		heightTotal = (parseFloat(heightFeet) * 12) + parseFloat(heightInches);
		heightPoints = (68 - heightTotal) / 5;
	}	
	console.log("heightPoints:");
	console.log(heightPoints);

	//calculate weight points
	var weightPoints = 0;
	if (weight !== '') {
		weightPoints = (weight - 160) / 20;
	}
	console.log("weightPoints:");
	console.log(weightPoints);

	//calculate apeIndex points
	var apeIndexPoints = 0;
	if (apeIndex !== '') {
		apeIndexPoints = 0 - apeIndex;
	}
	console.log("apeIndexPoints:");
	console.log(apeIndexPoints);

	//calculate age points
	var agePoints = 0;
	if (age !== '') {
		agePoints = (age - 30) / 10;
	}
	console.log("agePoints:");
	console.log(agePoints);
	
	//calculate temperature points
	var temperaturePoints = 0;
	if (temperature !== '') {
		temperaturePoints = (temperature - 45)/20;
	}
	console.log("temperaturePoints:");
	console.log(temperaturePoints);

	//calculate humidity points
	var humidityPoints = 0;
	if (humidity !== '') {
		var humidityPoints = humidity / 20;
	}
	console.log("humidityPoints:");
	console.log(humidityPoints);

	//calculate season points
	var seasonPoints = 0;
	if (season === "Summer") {
		seasonPoints = 1;
	}
	if (season === "Fall") {
		seasonPoints = -1;
	}
	if (season === "Spring") {
		seasonPoints = 0;
	}
	if (season === "Winter") {
		seasonPoints = -0.5;
	}
	console.log("seasonPoints:");
	console.log(seasonPoints);

	//calculate headwind points
	var headwindPoints = 0;
	if (headwind !== '') {
		headwindPoints = headwind / 30;
	}
	console.log("headwindPoints:");
	console.log(headwindPoints);

	//calculate sunInEyes points
	var sunInEyesPoints = 0;
	if (sunInEyes !== '') {
		sunInEyesPoints = sunInEyes / 30;
	}
	console.log("sunInEyesPoints:");
	console.log(sunInEyesPoints);

	//calculate bloodAlcohol points
	var bloodAlcoholPoints = 0;
	if (bloodAlcohol !== '') {
		bloodAlcoholPoints = (bloodAlcohol - 0.05)*50;
	}
	console.log("bloodAlcoholPoints:");
	console.log(bloodAlcoholPoints);
	
	//calculate lastMeal points
	var lastMealPoints = 0;
	if (lastMeal === "mexican") {
		lastMealPoints = 1;
	}
	if (lastMeal === "italian") {
		lastMealPoints = 0;
	}
	if (lastMeal === "thai") {
		lastMealPoints = -0.5;
	}
	if (lastMeal === "indian") {
		lastMealPoints = -0.5;
	}
	if (lastMeal === "salad") {
		lastMealPoints = -1;
	}
	if (lastMeal === "pizza") {
		lastMealPoints = 0;
	}
	if (lastMeal === "burger") {
		lastMealPoints = 0;
	}
	if (lastMeal === "kale") {
		lastMealPoints = -2;
	}
	if (lastMeal === "beer") {
		lastMealPoints = 0.5;
	}
	if (lastMeal === "whiskey") {
		lastMealPoints = 1;
	}
	if (lastMeal === "cornDog") {
		lastMealPoints = 0.5;
	}
	if (lastMeal === "pepperoni") {
		lastMealPoints = 0;
	}
	if (lastMeal === "cigarette") {
		lastMealPoints = -1;
	}
	console.log("lastMealPoints:");
	console.log(lastMealPoints);

	//calculate cupsOfCoffee points
	var cupsOfCoffeePoints = 0;
	if (cupsOfCoffee !== '') {
		cupsOfCoffeePoints = cupsOfCoffee - 1;	
	}
	console.log("cupsOfCoffeePoints:");
	console.log(cupsOfCoffeePoints);

	//calculate climbingArea points
	var climbingAreaPoints = 0;
	if (climbingArea === "hueco") {
		climbingAreaPoints = 0;
	}
	if (climbingArea === "bishop") {
		climbingAreaPoints = -1;
	}
	if (climbingArea === "joesvalley") {
		climbingAreaPoints = -2;
	}
	if (climbingArea === "leavenworth") {
		climbingAreaPoints = 0.5;
	}
	if (climbingArea === "squamish") {
		climbingAreaPoints = 1;
	}
	if (climbingArea === "carver") {
		climbingAreaPoints = 0;
	}
	if (climbingArea === "littleCottonwood") {
		climbingAreaPoints = 1.5;
	}
	if (climbingArea === "moesValley") {
		climbingAreaPoints = -2;
	}
	if (climbingArea === "fontainebleau") {
		climbingAreaPoints = 1;
	}
	if (climbingArea === "myLocalArea") {
		climbingAreaPoints = -1;
	}
	if (climbingArea === "anywhereInColorado") {
		climbingAreaPoints = -1.5;
	}
	if (climbingArea === "other") {
		climbingAreaPoints = 0;
	}			
	console.log("climbingAreaPoints:");
	console.log(climbingAreaPoints);

	//calculate mentalState points
	var mentalStatePoints = 0;
	if (mentalState === "distracted") {
		mentalStatePoints = 0.5;
	}
	if (mentalState === "focused") {
		mentalStatePoints = -0.5;
	}
	if (mentalState === "spaceCadet") {
		mentalStatePoints = 0;
	}
	if (mentalState === "psyched") {
		mentalStatePoints = -0.5;
	}
	if (mentalState === "hungover") {
		mentalStatePoints = 1;
	}
	console.log("mentalStatePoints:");
	console.log(mentalStatePoints);

	//calculate hotClimbersWatching points
	var hotClimbersWatchingPoints = 0;
	if (hotClimbersWatching !== '') {
		hotClimbersWatchingPoints = hotClimbersWatching / 2;
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

	//send TGS Grade as response
	res.send({tgsGrade:tgsGrade});
	// res.render('index', {title: "TGS Calculator", tgsGrade : tgsGrade});
})

module.exports = router;
