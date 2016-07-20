$(document).ready(function(){
// Sticky Nav
	//Even when the window is resized, run this code.
  	$(window).resize(function(){
    
    var windowHeight = $(window).height();
    
    var fiftypercent = .5 * windowHeight;

    $(document).scroll(function(){
      
      //Store the document scroll function in a variable
      var y = $(this).scrollTop();
      
      //If the document is scrolled 90%
      if( y > fiftypercent) {
        
        //Add the "sticky" class
        $('.nd-header').addClass('sticky-header');
        $('.nd-logo').addClass('sticky-logo');
        $('.nd-menu-properties').addClass('sticky-menu-properties');
        $('.home-link').addClass('home-link_sticky');
      } else {
        //Else remove it.
        $('.nd-header').removeClass('sticky-header');
        $('.nd-logo').removeClass('sticky-logo');
        $('.nd-menu-properties').removeClass('sticky-menu-properties');
        $('.home-link').removeClass('home-link_sticky');
      }
    });

  //Call it on resize.
  }).resize();


});