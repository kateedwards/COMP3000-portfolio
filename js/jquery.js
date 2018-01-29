$(document).ready(function(){
	$('article > section').hide();

	$('figure.hover-effect').click(function(){
		$(this).next().slideToggle();
		$('#annotations').hide();

	});


	$('.button').click(function(){
		$(this).next('#annotations').slideToggle();
	});

});
