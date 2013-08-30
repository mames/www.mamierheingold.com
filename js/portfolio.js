$(document).ready(function() {
	// ABOUT PAGE
	// Animation for scrolling through the story
	$('#family').waypoint(function() {
		$('#illustrations img').removeClass('opaque');
		$('#illustrations img').eq(0).addClass('opaque');
	});

	$('#annie').waypoint(function() {
		$('#illustrations img').removeClass('opaque');
		$('#illustrations img').eq(1).addClass('opaque');
	});

	$('#brain').waypoint(function() {
		$('#illustrations img').removeClass('opaque');
		$('#illustrations img').eq(2).addClass('opaque');
	});

	$('#intel').waypoint(function() {
		$('#illustrations img').removeClass('opaque');
		$('#illustrations img').eq(3).addClass('opaque');
	});
// "url('../images/about/Annie.jpg')"

// PROJECTS PAGE
	// SHOWING PROJECT NAME WHEN USER HOVERS OVER ICON
	$("#garage-icon").mouseover(function(){
		$("#garage-text").removeClass("invisible");
	});

	$("#garage-icon").mouseout(function(){
		$("#garage-text").addClass("invisible");
	});

	$("#twentyp-icon").mouseover(function(){
		$("#twenty-text").removeClass("invisible");
	});

	$("#twentyp-icon").mouseout(function(){
		$("#twenty-text").addClass("invisible");
	});

	$("#csh29-icon").mouseover(function(){
		$("#salon-text").removeClass("invisible");
	});

	$("#csh29-icon").mouseout(function(){
		$("#salon-text").addClass("invisible");
	});

	$("#hackathons-icon").mouseover(function(){
		$("#hackathon-text").removeClass("invisible");
	});

	$("#hackathons-icon").mouseout(function(){
		$("#hackathon-text").addClass("invisible");
	});

	$("#design-icon").mouseover(function(){
		$("#design-text").removeClass("invisible");
	});

	$("#design-icon").mouseout(function(){
		$("#design-text").addClass("invisible");
	});
	// SHOWING PROJECT WHEN USER CLICKS ON ICON
	//
	// making project wrapper div visible
	// fading in content
	//GARAGE
	$("#garage-icon"). click(function(){
		$("#project-wrapper").removeClass("invisible");
		$("#garage").removeClass("invisible");
		$("#garage").animate({ opacity: 1 }, 600);
	});

	// closing project when user clicks "click to close"
	$(".project_close"). click(function(){
		$("#project-wrapper").addClass("invisible");
		$("#garage").css("opacity", "0");
		$("#garage").addClass("invisible");
	});

	//20P
	$("#twentyp-icon"). click(function(){
		$("#project-wrapper").removeClass("invisible");
		$("#twenty").removeClass("invisible");
		$("#twenty").animate({ opacity: 1 }, 600);
	});

	// closing project when user clicks "click to close"
	$(".project_close"). click(function(){
		$("#project-wrapper").addClass("invisible");
		$("#twenty").css("opacity", "0");
		$("#twenty").addClass("invisible");
	});

	//LINKING TO THE GARAGE FROM 20P
	$("#twenty #garage_link"). click(function(){
		$("#twenty").addClass("invisible");
		$("#twenty").css("opacity", "0");
		$("#garage").removeClass("invisible");
		$("#garage").animate({ opacity: 1 }, 600);
	});

	//DESIGN
	$("#design-icon"). click(function(){
		$("#project-wrapper").removeClass("invisible");
		$("#design").removeClass("invisible");
		$("#design").animate({ opacity: 1 }, 600);
	});

	// closing project when user clicks "click to close"
	$(".project_close"). click(function(){
		$("#project-wrapper").addClass("invisible");
		$("#design").css("opacity", "0");
		$("#design").addClass("invisible");
	});

	//SALON
	$("#csh29-icon"). click(function(){
		$("#project-wrapper").removeClass("invisible");
		$("#salon").removeClass("invisible");
		$("#salon").animate({ opacity: 1 }, 600);
	});

	// closing project when user clicks "click to close"
	$(".project_close"). click(function(){
		$("#project-wrapper").addClass("invisible");
		$("#salon").css("opacity", "0");
		$("#salon").addClass("invisible");
	});

	//HACKATHON
	$("#hackathons-icon"). click(function(){
		$("#project-wrapper").removeClass("invisible");
		$("#hackathon").removeClass("invisible");
		$("#hackathon").animate({ opacity: 1 }, 600);
	});

	// closing project when user clicks "click to close"
	$(".project_close"). click(function(){
		$("#project-wrapper").addClass("invisible");
		$("#hackathon").css("opacity", "0");
		$("#hackathon").addClass("invisible");
	});


	// IMAGE POP-UP
	//
	// making background fixed when user clicks on image
	$(".pop_out").click(function() {
		$("#projects-page").addClass("fixed");
	});

	// removing the fixed class when user clicks on "Close" 
	$(".img_close").click(function() {
		$("#projects-page").removeClass("fixed");
	});

	// SLIDESHOWS
	//
	// GARAGE

	$("#garage-slides .slideshow").css("overflow", "hidden");
	$("#garage-slides .slideshow-nav").css("visibility", "visible");
	$("#garage-slides .slideshow-nav a[href=#garage-1]").addClass("active");

	$("#garage-slides .slideshow-nav").localScroll({
		target: '#garage-slides .slideshow', axis: 'x'
	});

	$("#garage-slides .slideshow-nav a").click(function(){
		$("#garage-slides .slideshow-nav a").removeClass("active");
		$(this).addClass("active");
		$("#garage-slides .slideshow-nav a").css("background-color", "#FFF");
		$(this).css("background-color", "#FF3838")
	});

	// DESIGN THINKING

	$("#design-slides .slideshow").css("overflow", "hidden");
	$("#design-slides .slideshow-nav").css("visibility", "visible");
	$("#design-slides .slideshow-nav a[href=#design-1]").addClass("active");

	$("#design-slides .slideshow-nav").localScroll({
		target: '#design-slides .slideshow', axis: 'x'
	});

	$("#design-slides .slideshow-nav a"). click(function(){
		$("#design-slides .slideshow-nav a").removeClass("active");
		$(this).addClass("active");
		$("#design-slides .slideshow-nav a").css("background-color", "#FFF");
		$(this).css("background-color", "#FF3838")
	});
});