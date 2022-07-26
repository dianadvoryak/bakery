// Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')
require('~/node_modules/slick-carousel/slick/slick.min.js')
require('~/app/libs/fancybox-master/dist/jquery.fancybox.min.js')

document.addEventListener('DOMContentLoaded', () => {

$('.uniq__slider').slick({
  infinite: true,
  slidesToShow: 1,
  arrows: true,
  prevArrow: '<div class="button slick-prev" name="button"><img src="images/back.svg" alt="button"></div>',
  nextArrow: '<div class="button slick-next" name="button"><img src="images/next.svg" alt="button"></div>',
  autoplay: true,
  // responsive: [
  //   {
  //     breakpoint: 576,
  //     settings: {
  //       arrows: false,
  //     }
  //    },
  //  ]
});

$('.samrt__slider').slick({
  infinite: true,
  slidesToShow: 1,
  prevArrow: '<div class="button slick-prev" name="button"><img src="images/back.svg" alt="button"></div>',
  nextArrow: '<div class="button slick-next" name="button"><img src="images/next.svg" alt="button"></div>',
  autoplay: true,
  // responsive: [
  //   {
  //     breakpoint: 576,
  //     settings: {
  //       arrows: false,
  //     }
  //    },
  //  ]
});

//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


})
