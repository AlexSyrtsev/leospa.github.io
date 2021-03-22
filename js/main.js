// $('.container-aboutus').slick({
//     dots: false,
//     infinite: true,
//     autoplay: true,
//     speed: 1000,
//     slidesToShow: 4,
//     slidesToScroll: 2,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: false
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//       You can unslick at a given breakpoint now by adding:
//       settings: "unslick"
//       instead of a settings object
//     ]
// });

// $('.container-testimonial').slick({
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 1000,
//     dots: true,
    
//     prevArrow: $('.prev'),
//     nextArrow: $('.next'),
// });

// $('.container-aboutus').slick-prev({
//     left: 100px;
//     background: red; /*to notice it, is white*/
// });
// $('.container-aboutus').slick-next({
//     right: 100px;
//     background: red; /*to notice it, is white*/
// });


if ($('#menu__box').is(':visible')) {
  $('body').addClass("fixed-position");
} else {
  $('body').removeClass("fixed-position");
}


$(document).ready(function(){
  $('.slider').slick({
    	arrows:false,
		dots:false,
		slidesToShow:4,
		slidesToScroll:1,
		autoplay:false,
		speed:1000,
		// autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:3,
          slidesToScroll:1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1,
          slidesToScroll:1
				}
			}
		]
	});
});

$(document).ready(function(){
  $('.container-testimonial').slick({
    arrows:false,
		dots:true,
		slidesToShow:1,
    	slidesToScroll:1,
		autoplay:false,
		speed:1000,
		// autoplaySpeed:800,
	});
});