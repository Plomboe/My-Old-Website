$(function() {

		//Nav bar
		$("#aboutNav").on("click", function() {
			//This one's tricky since I have this open to begin with, so it closes it. 
			var x = 0;
			$("html, body").animate({scrollTop: $("#bg-2").offset().top});
			x = 1;
			if (x == 1){
				$("#aboutMe").addClass("in");
				$("#education").removeClass("in");
				$("#experience").removeClass("in");
				$("#projects").removeClass("in");
			}		
		});
		$("#educationNav").on("click", function() {
			$("html, body").animate({scrollTop: $("#bg-2").offset().top});
			$("#aboutMe").removeClass("in");
			$("#experience").removeClass("in");
			$("#projects").removeClass("in");
		});
		$("#experienceNav").on("click", function() {
			$("html, body").animate({scrollTop: $("#bg-2").offset().top});
			$("#aboutMe").removeClass("in");
			$("#education").removeClass("in");
			$("#projects").removeClass("in");
		});
		$("#projectsNav").on("click", function() {
			$("html, body").animate({scrollTop: $("#bg-2").offset().top});
			$("#aboutMe").removeClass("in");
			$("#education").removeClass("in");
			$("#experience").removeClass("in");
		});



		//Take users to various links
		$("#githubIcon").on("click", function() {
			window.location.assign("https://github.com/Plomboe");
		});
		$("#linkedinIcon").on("click", function() {
			window.location.assign("https://www.linkedin.com/in/tareq-karimi/");
		});
		$("#googleIcon").on("click", function() {
			window.location.assign("https://plus.google.com/110881320959077166810");
		});
		$("#myPicture").on("click", function() {
			window.location.assign("https://www.linkedin.com/in/tareq-karimi/");
			console.log("click");
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
