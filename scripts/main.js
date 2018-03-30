$(function() {
	
	$(document).ready(function(){
	
		// Open overlay
		$(".overlay > .close-overlay").click(function(){
		    $(".overlay").toggleClass("visible");
		});
		
		// Close overlay
		$("#open-overlay").click(function(){
		    $(".overlay").toggleClass("visible");
		});
		
		$("body > header > div > .menu-button").click(function(){
		    $("body > header > div > nav").toggleClass("visible");
		});
		
		
	});

});