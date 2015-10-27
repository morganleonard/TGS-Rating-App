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
	// var parsedRequest = JSON.parse(req.body);
	// console.log("parsedRequest");
	// console.log(parsedRequest);

	var consensusVGrade = req.body.consensusVGrade,
		heightFeet = req.body.heightFeet,
		heightInches = req.body.heightInches,
		weight = req.body.weight,
		apeIndex = req.body.apeIndex,
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
		tgsGrade = 0;

		// var consensusVGrade = parseFloat(req.body.consensusVGrade),
		// heightFeet = parseFloat(req.body.heightFeet),
		// heightInches = parseFloat(req.body.heightInches),
		// weight = parseFloat(req.body.weight),
		// apeIndex = parseFloat(req.body.apeIndex),
		// age = parseFloat(req.body.age),
		// temperature = parseFloat(req.body.temperature),
		// humidity = parseFloat(req.body.humidity),
		// season = req.body.season,
		// headwind = parseFloat(req.body.headwind),
		// sunInEyes = parseFloat(req.body.sunInEyes),
		// bloodAlcohol = parseFloat(req.body.bloodAlcohol),
		// lastMeal = req.body.lastMeal,
		// cupsOfCoffee = parseFloat(req.body.cupsOfCoffee),		
		// climbingArea = req.body.climbingArea,
		// mentalState = req.body.mentalState,
		// hotClimbersWatching = parseFloat(req.body.hotClimbersWatching),		
		// tgsGrade = 0;

	console.log('calculating points')

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

	//calculate apeIndex points
	var apeIndexPoints = apeIndex;
	console.log("apeIndexPoints:");
	console.log(apeIndexPoints);

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
	var cupsOfCoffeePoints = cupsOfCoffee - 1;
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
	var hotClimbersWatchingPoints = hotClimbersWatching / 2;
	console.log("hotClimbersWatchingPoints:");
	console.log(hotClimbersWatchingPoints);

	//calculate TGS Grade
	tgsGrade = consensusVGrade + heightPoints + weightPoints 
				+ apeIndexPoints + agePoints + temperaturePoints 
				+ humidityPoints + seasonPoints + headwindPoints
				+ sunInEyesPoints + bloodAlcoholPoints + lastMealPoints 
				+ cupsOfCoffeePoints + climbingAreaPoints + mentalStatePoints;


	//send TGS Grade as response
	res.send({tgsGrade:tgsGrade});
	// res.render('index', {title: "TGS Calculator", tgsGrade : tgsGrade});
})

module.exports = router;
