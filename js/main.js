$(document).ready(function () {
	$('.works-carousel').slick({
	  infinite:false,
	  variableWidth: true,
	  dots: false,
	  arrows: true,
	  prevArrow: "<button type='button' class='slick-prev pull-left'> <img src='img/left.svg'> </button>",
	  nextArrow: "<button type='button' class='slick-next pull-right'><img src='img/right.svg'></button>",
	  responsive: [{
		breakpoint: 768,
		settings: {
		  arrows: true,
		}
	  }]
	});
  })

  $(document).ready(function () {
	$('.contributor-carousel').slick({
	  dots: false,
	  arrows: true,
	  prevArrow: "<button type='button' class='slick-prev pull-left'> <img src='img/left.svg'> </button>",
	  nextArrow: "<button type='button' class='slick-next pull-right'><img src='img/right.svg'></button>",
	  responsive: [{
		breakpoint: 768,
		settings: {
		  arrows: true,
		}
	  }]
	});
  })


	$('ul.tabs__caption').on('click', 'li:not(.active)', function(e) {
		e.preventDefault();
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('section.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

