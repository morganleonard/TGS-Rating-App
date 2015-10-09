
$(document).ready( function () {

	console.log("reading public/javascripts.index/js");

	//enable jQuery UI tabs
	$("#tabs").tabs();

	//set results window to be closed on page load
	$("#resultsModal").dialog({ autoOpen: false });

	//submit form and pop up lightbox when form submit button is hit
	$('#submitButton').click(function () {

		console.log("In submitButton click handler");

		//open modal with results section
		$("#resultsModal").dialog("open");

	})

})