var aboveTablet = window.matchMedia("only screen and (min-width: 1024px)");

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

function animateScroll(clickedLink){
   var target = "#" + $(clickedLink).data('target');
    $('html, body').animate({
        scrollTop: ($(target).offset().top)- 51
    }, 1000);
}

$(document).ready(function(){

	google.maps.event.addDomListener(window, 'load', initialize);

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
  });

  $('.download').on('click', function(){
  		animateScroll(this);
  });

  //Animate police logos above tablet
  if (aboveTablet.matches) {
    $('.rtm-users').hover(function(){
    		$(this).css('width','20%');
    },function(){
    		$(this).css('width','10%');
    });
    $('#mobile-menu').hide();
    // $('nav ul li').width('13%');
    $('nav').removeClass('row');
  } else {
    //show mobile menu
    $('nav').addClass('row');
    $('#mobile-menu').show();
    $('nav ul').hide();
  }

  $('#mobile-menu').on('click', function(){
    $('nav ul').toggle(function(){
      $('this').slideDown();
    },function(){
      $('this').slideUp()
    });
  });

  if ($('#mobile-menu').is(":visible")) {
    $('#mobile-menu').siblings().on('click', function(){
      $('nav ul').slideUp();
    })
  }
  


  $('.contact-right').click(function () {
    $('#map_canvas').css("pointer-events", "auto");

  });




})
