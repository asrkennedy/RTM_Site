var aboveTablet = window.matchMedia("only screen and (min-width: 1024px)");
var page = $("body").attr('id');

function animateScroll(clickedLink){
   var target = "#" + $(clickedLink).data('target');
   makeScroll(target);
}

function makeScroll(target){
  $('body').animate({
        scrollTop: ($(target).offset().top) - $('nav').height()
    }, 1000);
}

function normalMenu(){
    $('#mobile-menu').hide();
    $('nav ul').show();
}

function mobileMenu(){
  $('#mobile-menu').show();
  $('nav ul').hide();
}

function resizeMenus(){
  if (aboveTablet.matches) {
    normalMenu();
    policeLogos();
  } else {
    mobileMenu();
  }
}

function policeLogos(){
   $('.rtm-users').hover(function(){
      $(this).css('width','20%');
    },function(){
      $(this).css('width','10%');
    });
}

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


$(document).ready(function(){

	if ( page === "index") {

    $( '#index nav ul li a' ).on('click', function(event) {
      event.preventDefault();
      $('.active').removeClass();
      $(this).addClass('active');
      animateScroll(this);
    });

    $('.download').on('click', function(){
        animateScroll(this);
    });

    google.maps.event.addDomListener(window, 'load', initialize);

    $('.contact-right').click(function () {
      $('#map_canvas').css("pointer-events", "auto");
    });

  }

  //TRAINING PAGE

  $( 'aside ul li a, .more-training' ).on('click', function(e){
  	e.preventDefault();
  	$('.clicked').removeClass();
  	$(this).addClass('clicked');
  	animateScroll(this);
  });

  //DOCS PAGE

  $('#docs nav a').on('click', function(e){
    e.preventDefault();
    window.location.replace($(this).attr('href'));
  })

  //RESPONSIVE ANIMATIONS
  //Animate police logos above tablet
  resizeMenus();

  $(window).resize(function(){
    resizeMenus();
  })

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

})
