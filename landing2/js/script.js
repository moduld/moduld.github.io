var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    nextButton: '.to_left',
    prevButton: '.to_right',
    centeredSlides: true,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
})

function mobileMenuHandler()
{
    var input = document.getElementById('toggle');
    input && input.addEventListener('change', function (event)
    {
        document.body.classList.toggle('overflowed')
    })
}
mobileMenuHandler();