$(function() {

		//Hide other options when one of them is clicked
    $("#aboutMesvg").on("click", function() {
			$("#education").removeClass("in");
			$("#experience").removeClass("in");
			$("#projects").removeClass("in");
    });

		$("#educationsvg").on("click", function() {
			$("#aboutMe").removeClass("in");
			$("#experience").removeClass("in");
			$("#projects").removeClass("in");
    });

		$("#experiencesvg").on("click", function() {
			$("#aboutMe").removeClass("in");			
			$("#education").removeClass("in");
			$("#projects").removeClass("in");
    });

		$("#projectssvg").on("click", function() {
			$("#aboutMe").removeClass("in");
			$("#education").removeClass("in");
			$("#experience").removeClass("in");		
    });

});