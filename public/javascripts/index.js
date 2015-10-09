
$(document).ready( function () {

	console.log("reading public/javascripts.index/js");

	//enable jQuery UI tabs
	$("#tabs").tabs();

	//set results window to be closed on page load
	$("#resultsModal").dialog({ autoOpen: false });

	//submit form and pop up lightbox when form submit button is hit
	$('#submitButton').click(function (event) {

		console.log("In submitButton click handler");

		//prevent default submit on form
		console.log("preventing default on button click")
		event.preventDefault();

		//get data from from
		var formData = $('#simpleForm').serialize();
		console.log(formData);

		//send data via ajax to server
		$.ajax({
			type: "POST",
 			//url: url,
 			data: formData,
  			//success: success,
  			//dataType: dataType
		}).done(function(data){
				console.log('data returned from server');
				console.log(data);
				//open modal
				$("#resultsModal").dialog("open");
			});

	})

})