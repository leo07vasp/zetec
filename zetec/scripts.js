$(function(){
	
	/* Exibir o mapa
	---------------------------------------------*/
	
	$('#mapa').fancyZoom({directory: './js/images'});
	
	
	/* Menu principal
	---------------------------------------------*/
	 
	//$('#nav').localScroll(800);
	
	RepositionNav();
	
//	$(window).resize(function(){
//		RepositionNav();
//	});	
	
	//.parallax(xPosition, adjuster, inertia, outerHeight) options:
	//xPosition - Horizontal position of the element
	//adjuster - y position to start from
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport

	//$('.ilustracao').parallax("69%", 2500, 0.2, true);
	$('.ilustracao2').parallax("69%", 2250, 0.3, true);

	$('#intro').parallax("50%", 1200, 0.1, true);	
	$('#second').parallax("50%", 0, 0.1, true);
	$('#third').parallax("50%", 2400, 0.1, true);	
	$('#fourth').parallax("50%", 3400, 0.1, true);
	
	var deck = new $.scrolldeck({
		slides: '.slide',
		buttons: '#nav li a',
		easing: 'easeInOutExpo'
	});	

}); // End of scripts