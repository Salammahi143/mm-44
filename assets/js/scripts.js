jQuery(function ($) {
    'use strict';
    $('.slider-item').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        nav:true,
        navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
        //autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
    $('.logo-slider').owlCarousel({
        loop:true,
        margin:5,
        nav:false,
        dots:false,
        autoplay: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
  
    });
    
    $('.customer-text').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
 });

 //Get the button
var mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
 $(document).ready(function(){
     $('.switcher-btn').click(function(){
      $('.sel-text').fadeToggle();
  });
  $('.switcher-bt').click(function(){
    $('.sel-tex').fadeToggle();
});
$('.switcher-b').click(function(){
    $('.sel-te').fadeToggle();
});
$('.switcher-bn').click(function(){
    $('.sel-t').fadeToggle();
});
  });