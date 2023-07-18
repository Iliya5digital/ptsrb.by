jQuery(document).ready(function($) {

	$('#header .container').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');
	
	$("#menu-icon").on("click", function(){
    $("nav").slideToggle();
    $(this).toggleClass("active");
	});

	// $(window).scroll(function() {
	// 	var top = $(document).scrollTop();
	// 	if (top < 300) $("#header").css({top: '0', position: 'relative'});
	// 	else $("#header").css({top: '0px', position: 'fixed'});
	// });


	$('.home_slider').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:true,
		autoplay:false,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		smartSpeed: 400,
		navText : ["",""],
		dotsContainer: '#nav_dots',
		navContainer: '#nav_slider',
		animateOut: 'fadeOut',
    	autoHeight:true,
		responsive:{
				0:{
						items:1,
						nav:true
				},
				600:{
						items:1,
						nav:false
				},
				1000:{
						items:1,
						nav:true
				}
		}
	})

	$('.banner_home_one').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:false,
		autoplay:false,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		smartSpeed: 400,
		navText : ["",""],
		navContainer: '.nav_arrow_one',
    	autoHeight:true,
		responsive:{
				0:{
						items:1,
						nav:true
				},
				600:{
						items:1,
						nav:false
				},
				1000:{
						items:1,
						nav:true
				}
		}
	})

	$('.banner_home_two').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:false,
		autoplay:false,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		smartSpeed: 400,
		navText : ["",""],
		navContainer: '.nav_arrow_two',
    	autoHeight:true,
		responsive:{
				0:{
						items:1,
						nav:true
				},
				600:{
						items:1,
						nav:false
				},
				1000:{
						items:1,
						nav:true
				}
		}
	})

	$('.banner_home_three').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:false,
		autoplay:false,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		smartSpeed: 400,
		navText : ["",""],
		navContainer: '.nav_arrow_three',
    	autoHeight:true,
		responsive:{
				0:{
						items:1,
						nav:true
				},
				600:{
						items:1,
						nav:false
				},
				1000:{
						items:1,
						nav:true
				}
		}
	})

	$('.banner_home_four').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:false,
		autoplay:false,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		smartSpeed: 400,
		navText : ["",""],
		navContainer: '.nav_arrow_four',
    	autoHeight:true,
		responsive:{
				0:{
						items:1,
						nav:true
				},
				600:{
						items:1,
						nav:false
				},
				1000:{
						items:1,
						nav:true
				}
		}
	})

	$('.banner_home_five').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:false,
		autoplay:false,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		smartSpeed: 400,
		navText : ["",""],
		navContainer: '.nav_arrow_five',
    	autoHeight:true,
		responsive:{
				0:{
						items:1,
						nav:true
				},
				600:{
						items:1,
						nav:false
				},
				1000:{
						items:1,
						nav:true
				}
		}
	})

	$('.banner_home_six').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:false,
		autoplay:false,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		smartSpeed: 400,
		navText : ["",""],
		navContainer: '.nav_arrow_six',
    	autoHeight:true,
		responsive:{
				0:{
						items:1,
						nav:true
				},
				600:{
						items:1,
						nav:false
				},
				1000:{
						items:1,
						nav:true
				}
		}
	})


	$("#single_1").fancybox({
		helpers: {
				title : {
						type : 'float'
				}
		}
	});






  $('.input_file input[type=file]').change(function() {
		var t = $(this).val();
		if (t.indexOf('C:\\fakepath\\') + 1) t = t.substr(12);
		var e = $(this).next().find('.fake_file_input');
		e.val(t);
	});

	$('input[type="file"]').change(function(){
		var value = $("input[type='file']").val();
		$('.js-value').text(value);
	});







	$('.checkbox-other input').on('change', function(){ 
		var btn = $(".btn-form");
		var a = $(this).prop('checked');
		if(a) {
		btn.prop("disabled", false);
		btn.removeClass('btn_disable')
		$(".btn-form").css('cursor', 'pointer');
		} else {
		btn.prop("disabled", true);
		btn.addClass('btn_disable')
		$(".btn-form").css('cursor', 'not-allowed');
		}
		})


		



	

		$(".sub-menu li a").on("click", function () {
			$("#menu-icon").click();
		});

		$(".sub-menu li a").on("click", function () {
			
			$(".post, .page").toggleClass('scroll_page');
		});

		$("#menu-icon").on("click", function () {
			$(".post, .page").toggleClass('scroll_page');
		});

		$("#mobile-menu a").on("click", function () {
			$("#menu-icon").click();
			$("nav").hide();
			$(".post, .page").removeClass('scroll_page');


		});
	
		$(".accordion__item").on("click", function () {
			if ($(this).hasClass("active")) {
				$(this).removeClass("active");
				$(this).siblings(".accordion__content").slideUp(200);
			} else {
				$(".accordion__item").removeClass("active");
				$(this).addClass("active");
				$(".content").slideUp(200);
				$(this).siblings(".accordion__content").slideDown(200);
			}
		});


		$('a[href*=#]').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
					&& location.hostname == this.hostname) {
							var $target = $(this.hash);
							$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
							if ($target.length) {
									var targetOffset = $target.offset().top - ($("#header").outerHeight(true)+ 80);
									$('html,body').animate({scrollTop: targetOffset}, 1000);
									return false;
							}
					}
			});


		var header = $('#header'),
		scrollPrev = 0;

		$(window).scroll(function() {
			var scrolled = $(window).scrollTop();
		
			if ( scrolled > 100 && scrolled > scrollPrev ) {
				header.addClass('out');
			} else {
				header.removeClass('out');
			}
			scrollPrev = scrolled;
		});



		document.addEventListener( 'wpcf7mailsent', function( event ) {
			$('#pum-68').popmake('open');
		}, false );
});


