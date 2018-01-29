$(document).ready(function(){
	$('article > section').hide();

	$('figure.hover-effect').click(function(){
		$(this).next().slideToggle();
		$('#annotations').hide();

	});
	$('.hide').click(function(){
		$('#posts').slideUp();

	});

	$('.button').click(function(){
		$(this).next('#annotations').slideToggle();
	});

});
