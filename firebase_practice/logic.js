// Link to Firebase (YOUR OWN APP)
	var clickData = new Firebase("https://fiery-heat-5726.firebaseio.com/");

// Use the below Initial Value 
var initialValue = 100;

// Use the below variable clickCounter to keep track of the clicks.
var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data. (I.E FIREBASE HERE)
// HINT: Use firebaseLink.on("value", function(snapshot)) {}
	clickData.on("value", function(snapshot) {
		console.log(snapshot.val());

		$("#clickValue").html(snapshot.val().clickCount);

		clickCounter = snapshot.val().clickCount;


		$("#clickValue").html(clickCounter);
	});

// Inside your .on function...
	
	// Console.log the initial "snapshot" value (the object itself)


	// Change the initial value to reflect the initial value in Firebase
	// HINT: snapshot.val().__________


	// Change the value of your clickCounter to match the value in the database
	// ___________ = snapshot.val().______________________


	// Change the HTML using jquery to reflect the updated clickCounter value
	

// Then include Firebase error logging
// HINT: }, function(errorObject) 

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#clickButton").on("click", function() {

	// Reduce the clickCounter by 1
	clickCounter--;

	// Alert User and reset the counter
	if (clickCounter == 0 ) {
		alert("Phew! You made it! That sure was a lot of clicking.");
		clickCounter = initialValue;
	}

	// Save new value to Firebase
	clickData.set({
		clickCount: clickCounter
	})


	// Log the value of clickCounter
	console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restartButton").on("click", function() {

	// Set the clickCounter back to initialValue
	clickCounter = initialValue;
	
	// Save new value to Firebase




	// Log the value of clickCounter
	console.log(clickCounter);

	// Change the HTML Values
	$('#clickValue').html(clickCounter);


});