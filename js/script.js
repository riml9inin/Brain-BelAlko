$(document).ready(function() {

    //работа меню
    $( "#showMenu" ).click(function() {
        $(this).toggleClass("in").next().slideToggle();
        $( ".open_menu" ).toggle( "blind", 600 );
      });
      
    //переключатель языка
    $(".lang").on("click", ".tab", function( ){
        $(".lang .tab").removeClass("active");
        $(this).addClass("active");
    });

    //слайд на продукт 1 блок
    $('.firstCarusel').slick({
        speed: 1000,
        autoplay: true,
        prevArrow: '<button type="button" class="firstPrevArrow"></button>',
        nextArrow: '<button type="button" class="firstNextArrow"></button>',
        autoplaySpeed: 4000
    });

    //слайд на меню 1 блок
    $('.firstMainCarusel').slick({
        centerMode: true,
        //infinite:false,
        arrows: false,
        centerPadding: '150px',
        slidesToShow: 1
    });
	
    //слайд для 2 блока
    $('.secondCarusel').slick({
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000
    });

    /*/*таб для 3 блока
    $( function() {
        $( "#tabs" ).tabs();
    } );*/
    // слайд и таб 3 блок
    $('.thirdTab').slick({
		slidesToShow: 1,
		infinite: false,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		adaptiveHeight: true,
		asNavFor: '.thirdCarusel'
	});
	
	$('.thirdCarusel').slick({
		slidesToShow: 3	,
		infinite: false,
		arrows: false,
		slidesToScroll: 1,
		asNavFor: '.thirdTab',
		centerMode: true,
		
		focusOnSelect: true
	});

    //слайд для 4 блока
    $('.fourCarusel').slick({
        infinite: true,    
        speed: 800,
        slidesToShow: 2,
        adaptiveHeight: true
    });
});