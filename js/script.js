$(function() {

		//Take users to various links
		$("#githubIcon").on("click", function() {
			window.location.replace("https://github.com/Plomboe");
		});
		$("#linkedinIcon").on("click", function() {
			window.location.replace("https://www.linkedin.com/in/tareq-karimi/");
		});
		$("#googleIcon").on("click", function() {
			window.location.replace("https://plus.google.com/110881320959077166810");
		});
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
