$(document).ready(function() {
	$('.dropdown').click(function(e){
        e.preventDefault();
         //add or remove class
        $(this).toggleClass("active");
         //remove siblings active class
        $(this).parent().siblings().find('a').removeClass("active");
         //find dropdown-open and slidedown or up 
        $(this).parent().find('.dropdown-open').slideToggle();
         //other dropdown-open slideup
        $(this).parent().siblings().find('.dropdown-open').slideUp();
    });

    /* swiper */
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 900,
        effect: 'slide',
        autoplay: {
         delay: 2200,
       },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      });

    /* lightbox */
      lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'albumLabel': "Image %1 of %2",
        'positionFromTop': 100,
        'imageFadeDuration':600,
    });

    /* go top */
      $('.gotop a').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('html,body').animate({
			scrollTop:0
		},700);
	});
});

