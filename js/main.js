$(document).ready(function(){
	//sideshow
	$(".slide").first().addClass('active'); // add active class to all slideshow.
	$(".slide").hide(); //hide everything
	$(".active").show(); //show only active class
	//client changer
	$("#client-1").addClass('active-btn');
	$(".client-page-2").hide();
	$(".client-page-3").hide();

	//slideshow functions
		$('#next').click(function(){ //click function next
			$('.active').removeClass('active').addClass('prevActive');    //remove active add prev
		        if ( $('.prevActive').is('#last-slide')) { //check if last slide
		    $('.slide').first().addClass('active'); 
		    }
		    else{
		    $('.prevActive').next().addClass('active'); //add active class to the next one
		    }
		$('.prevActive').removeClass('prevActive');
		$('.slide').hide();
		$('.active').fadeIn();
	});

		$('#prev').click(function(){
			$('.active').removeClass('active').addClass('prevActive');    
		       if ( $('.prevActive').is('#first-slide')) { //check if first slide to reset
		    $('.slide').last().addClass('active');
		    }
		       else{
		$('.prevActive').prev().addClass('active');
		       }
		$('.prevActive').removeClass('prevActive');
		$('.slide').hide();
		$('.active').fadeIn();
		});
	//end slideshow
	//client changer -- this is inefficient, should use find(); with rel/id to match?? or use vars to store everything
	$("#client-1").click(function(){
		$(".client-page-1").show();
		$(".client-page-2").hide();
		$(".client-page-3").hide();
		$("#client-2").removeClass('active-btn');
		$("#client-3").removeClass('active-btn');
		$("#client-1").addClass('active-btn');
	});
	$("#client-2").click(function(){
		$(".client-page-2").show();
		$(".client-page-1").hide();
		$(".client-page-3").hide();
		$("#client-1").removeClass('active-btn');
		$("#client-3").removeClass('active-btn');
		$("#client-2").addClass('active-btn');
	});
	$("#client-3").click(function(){
		$(".client-page-3").show();
		$(".client-page-1").hide();
		$(".client-page-2").hide();
		$("#client-1").removeClass('active-btn');
		$("#client-2").removeClass('active-btn');
		$("#client-3").addClass('active-btn');
	});
	//sidenavbar
	var s1 = $('#s1').offset().top; //set position of links
	var s2 = $('#s2').offset().top; 
	var s3 = $('#s3').offset().top;
	var s4 = $('#s4').offset().top;
	var s5 = $('#s5').offset().top; 

$(window).scroll(function(){ // Window on scroll
    var scroll = $(window).scrollTop(); // Get the position of the scroll
    if(scroll >= s1){
    	$(".side-menu").removeClass('highlight');
    	$("#sidemenu-1").addClass('highlight');
    }
    if(scroll >= s2) {
    	$(".side-menu").removeClass('highlight');
    	$("#sidemenu-2").addClass('highlight');
    }
        if(scroll >= s3) {
    	$(".side-menu").removeClass('highlight');
    	$("#sidemenu-3").addClass('highlight');
    }
    	if(scroll >= s4) {
    	$(".side-menu").removeClass('highlight');
    	$("#sidemenu-4").addClass('highlight');
    }
	    if($(window).scrollTop() + $(window).height() == $(document).height()){ //bottom page finder
	    	$(".side-menu").removeClass('highlight');
	    	$("#sidemenu-5").addClass('highlight');
	    }
});
    //smoothscroll from 
    $(function() {
        $('a').smoothScroll();
    });
    //open menu
	$(".hamburger-menu").click(function(){
		$(".hamburger-nav").slideDown();
		$(".hamburger-menu").hide();
	});
	$(".close").click(function(){
		$(".hamburger-nav").slideUp();
		$(".hamburger-menu").show();
	}); 
});
