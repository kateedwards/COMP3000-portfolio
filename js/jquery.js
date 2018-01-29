$(document).ready(function(){
	$('article > section').hide();
	$('section > #annotations').hide();


	$('figure.hover-effect').click(function(){
		$(this).next().slideToggle();

	});


	$('.button').click(function(){
		$(this).next('#annotations').slideToggle();
	});

});
