$(function(){

  //  Sticky Header  
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 200){
        $('.navbar').addClass('bg');
    }
    else {
         $('.navbar').removeClass('bg');
    }
    });  

  //banner slider
    $('.bannerslide').slick({
      infinite:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        
      });

//venobox
$(document).ready(function(){
  $('.venobox').venobox(); 
});



//venobox
    
// $('.sale_slider').slick({
//   infinite:true,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: true,
//     prevArrow:'<i class="fa fa-chevron-circle-left saleprev"></i>',
//     nextArrow:'<i class="fa fa-chevron-circle-right salenext"></i>',
  
    
//   });
  $('.sale_slider').slick({
        
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed:500,
    arrows: true,
    prevArrow:'<i class="fa fa-arrow-circle-left saleprev"></i>',
    nextArrow:'<i class="fa fa-arrow-circle-right salenext"></i>',
    responsive: [
      

        {  
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    
    ]
  });


  //hand bag slider
  $('.bag_bannerslide').slick({
    infinite:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:false,
  
    });

    //counter up
    $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
    //counter up

    //center slide
    $('.table_center').slick({
      centerMode: true,
      centerPadding: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed:500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow:'<i class="fa fa-chevron-circle-left saleprev"></i>',
      nextArrow:'<i class="fa fa-chevron-circle-right salenext"></i>',
      responsive: [
      
        {  
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    
    ]
    });
    //center slide

});


