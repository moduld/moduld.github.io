jQuery(function($) {
    var inputRes = '';
    function random (maxNum){
        return Math.round(Math.random()*maxNum||10)
    };
    send(random(10));
    function send (page) {
        $.ajax({
                type: "GET",
                url: "https://pixabay.com/api/?key=2774524-28138270db7f1f7fd3c758439&q=" + inputRes + "&image_type=photo&page=" + page + "&callback=?",
                dataType: "jsonp",
                success: function(images){
                    $('.section_three__picture').each(function (i) {
                        var bg = [];
                        bg[i] = "url(" + images.hits[i].webformatURL + ")";
                        $(this).css({'background': bg[i], 'background-size': 'cover', 'background-position': 'center'});
                        $(this).find('.section_three__name').text(images.hits[i].tags);
                    })
                    $('.section_three__masonry_grid').masonry({
                        itemSelector: '.section_three__picture',
                        percentPosition: true
                    });

                }
            });
    }
    addSliderPics ();
    function addSliderPics () {
        var temes = ['notebook work', 'road travel', 'ocean'];
        $('.section_one__carousel').each(function(i) {
            var ulItem = this;

            $.ajax({
                type: "GET",
                url: "https://pixabay.com/api/?key=2774524-28138270db7f1f7fd3c758439&q=" + temes[i] + "&image_type=photo&page=&callback=?",
                dataType: "jsonp",
                success: function(images){
                    var carouselHtml = $('#carousel_html').html();
                    
                    var carTemp = tmpl(carouselHtml, {sourses: images.hits});
                    
                    $(ulItem).append(carTemp);
                    var wrapWidth = $(ulItem).parent('.section_one__carousel_wrap').width();
                    
                    $(ulItem).children('.section_one__carousel_item').each(function(j) {
                       var temp = "url(" + images.hits[j].webformatURL + ")";
                       $(this).css({'background': temp, 'background-size': 'cover', 'background-position': 'center'})
                    })
        $(this).draw(ulItem);
 
                }
            });
        })
       
    }
    
    $('.section_three__picture').on('click', function() {
        inputRes = $(this).find('.section_three__name').text().replace(/\,.*/, '');
        send();
    })
    
    $('.section_three__button').on('click', function () {
        inputRes = $(this).siblings('.section_three__input').val();
        send();
    })
    
    function findPeople () {
        $.ajax({
            type: "GET",
            url: "http://api.randomuser.me/?page=&results=4&callback=?",
            dataType: "jsonp",
            success: function(results){ 
                $('.section_two__people').each( function(i) {
                    $(this).find('.section_two__image_item').attr('src', results.results[i].picture.large);
                    $(this).find('.section_two__name').text(results.results[i].name.first + " " + results.results[i].name.last);
                    $(this).find('.section_two__about').html("I live in " +  results.results[i].location.city + "<br>" + "My phone number is: " + results.results[i].cell + "<br>" + "Email: " + results.results[i].email)
                })
            }
        })
    }
    findPeople();
    $('.section_two__button').on('click', findPeople);
    
    $(".header__red_link").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href');
        var top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    
    $('.checker').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100
    });
    

})


