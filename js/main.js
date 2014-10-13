$(document).ready(function(){

	function initialize() {
	  var myLatlng = new google.maps.LatLng(40.740829, -74.173124);
	  var mapOptions = {
	    zoom: 16,
	    center: myLatlng
	  }
	  var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

	  var marker = new google.maps.Marker({
	      position: myLatlng,
	      map: map,
	      title: 'Hello World!'
	  });
	}

	google.maps.event.addDomListener(window, 'load', initialize);

	function animateScroll(clickedLink){
     var target = "#" + $(clickedLink).data('target');
      $('html, body').animate({
          scrollTop: ($(target).offset().top)- 51
      }, 1000);
  }

   $( 'nav ul li a' ).on('click', function(event) {
      event.preventDefault();
      $('.back_to_top').fadeIn();
      $('.active').removeClass();
      $(this).addClass('active');
      animateScroll(this);
  });


})
