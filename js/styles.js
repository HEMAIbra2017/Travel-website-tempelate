
$(function () {

	//counterup

	 $(".counti").counterUp({delay:10,time:1000});
//navlink

$('.navbar li a').click(function(){

$('..navbar  a').removeClass('active');

$(this).addClass('active');


});





// datepicker
$(" #dateinputin").datepicker({

	numOfMonth:1,
	changeYear:true,
	changeMonth:true,
});

$("#dateinputout").datepicker({

	numOfMonth:1,
	changeYear:true,
	changeMonth:true,
});
});




// scroll  

$(window).scroll(function(){ 


// scroll btn show 
var scrollToTop=$('.scroll-to-top');

if ($(window).scrollTop()>=1000) {

	if (scrollToTop.is(':hidden')) { 
           scrollToTop.fadeIn(400);
	}}
	else
	{ scrollToTop.fadeOut(400);}

	});

$('.scroll-to-top').click(function(event){
	event.preventDefault();
	$('html , body').animate({
		scrollTop:0
	},1000);


});






