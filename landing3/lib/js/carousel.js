(function($) {
    
    $.fn.draw = function(carouselUl) {
        
        
        var $quontity = $(carouselUl).children('.section_one__carousel_item').length;
        var $carousel = carouselUl;
        var widthPicture = $($carousel).parent('.section_one__carousel_wrap').width() + 1;
        var leftPosition = 0;
        var minOffset = 0;
        var currentPosition = -((widthPicture * $quontity) - widthPicture);
        var x = 0;
        $(carouselUl).children('.section_one__carousel_item').css('width', widthPicture + 'px');
        
        $(window).resize(function() {
            widthPicture = $('.section_one__slider').width();
            $(carouselUl).children('.section_one__carousel_item').css('width', widthPicture);
        });

    function leftArrow (carousel) {
        
        if ( minOffset != currentPosition) {
            minOffset -= widthPicture;
            carousel.animate({ left : minOffset + "px"}, 500);
        } else {
                minOffset = 0;
                carousel.animate({ left : minOffset + "px"}, 500);
            };
    };
    
        $('.section_one__slider_left').click(function(){
            var findCarousel = $(this).siblings('.section_one__carousel_wrap').children('.section_one__carousel');
        leftArrow(findCarousel);
             
    });
    
        $('.section_one__slider_right').click(function(){
            var findCarousel = $(this).siblings('.section_one__carousel_wrap').children('.section_one__carousel');
        if ( minOffset != 0 ) {
            minOffset += widthPicture;
            findCarousel.animate({ left : minOffset + "px"}, 500);
        } else {
                minOffset = currentPosition;
                findCarousel.animate({ left : minOffset + "px"}, 500);
            };
    });
    

//    setInterval((function () {leftArrow()})(), 5000);
        
      return this;  
    };
    
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(this).addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });
    
}(jQuery));


    
    
