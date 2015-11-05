
$(document).ready( function () {

	console.log("reading public/javascripts.index/js");

	//enable jQuery UI tabs
	$("#tabs").tabs();

	//set results window to be closed on page load
	$("#resultsModal").dialog({ 
			autoOpen: false,
			show: { effect: "blind", duration: 800 },
			title: "Your TGS Points",
			width: 500
		});

	//submit form and pop up lightbox when simple form submit button is hit
	$('#simpleSubmitButton').click(function (event) {

		console.log("In simpleSubmitButton click handler");

		//prevent default submit on form
		console.log("preventing default on button click")
		event.preventDefault();

		//get data from from
		var formData = $('#simpleForm').serialize();
		console.log(formData);

		//send data via ajax to server
		$.ajax({
			type: "POST",
 			data: formData,
		}).done(function(data){
				console.log('data returned from server');
				console.log(data);

				//update value of tgsGrade in DOM
				$("#tgsGrade").html(data.tgsGrade);
				
				//open modal
				$("#resultsModal").dialog("open");
			});

	})

	//submit form and pop up lightbox when standard form submit button is hit
	$('#standardSubmitButton').click(function (event) {

		console.log("In standardSubmitButton click handler");

		//prevent default submit on form
		console.log("preventing default on button click")
		event.preventDefault();

		//get data from from
		var formData = $('#standardForm').serialize();
		console.log(formData);

		//send data via ajax to server
		$.ajax({
			type: "POST",
 			data: formData,
		}).done(function(data){
				console.log('data returned from server');
				console.log(data);

				//update value of tgsGrade in DOM
				$("#tgsGrade").html(data.tgsGrade);
				
				//open modal
				$("#resultsModal").dialog("open");
			});

	})

	//submit form and pop up lightbox when super form submit button is hit
	$('#superSubmitButton').click(function (event) {

		console.log("In superSubmitButton click handler");

		//prevent default submit on form
		console.log("preventing default on button click")
		event.preventDefault();

		//get data from from
		var formData = $('#superForm').serialize();
		console.log(formData);

		//send data via ajax to server
		$.ajax({
			type: "POST",
 			data: formData,
		}).done(function(data){
				console.log('data returned from server');
				console.log(data);

				//update value of tgsGrade in DOM
				$("#tgsGrade").html(data.tgsGrade);
				
				//open modal
				$("#resultsModal").dialog("open");
			});

	})




	// //prevent defualt follow of link to tab, hide and show sections as needed instead
	// $('#simpleSprayLink').click(function (event) {
	// 	event.preventDefault();
	// 	//hide and show form sections as needed
	// 	$("#personalDataSection").show();
	// 	$("#environmentalDataSection").hide();
	// 	$("#metaphysicalDataSection").hide();
	// })

	// //prevent defualt follow of link to tab, hide and show sections as needed instead
	// $('#standardSprayLink').click(function (event) {
	// 	event.preventDefault();
	// 	//hide and show form sections as needed
	// 	$("#personalDataSection").show();
	// 	$("#environmentalDataSection").show();
	// 	$("#metaphysicalDataSection").hide();
	// })

	// //prevent defualt follow of link to tab, hide and show sections as needed instead
	// $('#superSprayLink').click(function (event) {
	// 	event.preventDefault();
	// 	//hide and show form sections as needed
	// 	$("#personalDataSection").show();
	// 	$("#environmentalDataSection").show();
	// 	$("#metaphysicalDataSection").show();
	// })

})