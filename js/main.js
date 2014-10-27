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

   $( '#index nav ul li a' ).on('click', function(event) {
      event.preventDefault();
      $('.active').removeClass();
      $(this).addClass('active');
      animateScroll(this);
  });

   $( 'aside ul li a, .more-training' ).on('click', function(e){
   	e.preventDefault();
   	$('.clicked').removeClass();
   	$(this).addClass('clicked');
   	animateScroll(this);
   })

   $('.download').on('click', function(){
   		animateScroll(this);
   })
   		
   $('.rtm-users').hover(function(){
   		$(this).css('width','20%');
   },function(){
   		$(this).css('width','10%');
   })

   $('.contact-right').click(function () {
    $('#map_canvas').css("pointer-events", "auto");
});


})
