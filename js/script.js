$(window).scroll(function(){
    if ($(window).scrollTop() >= 68) {
        $('nav').addClass('fixed-nav');
    }
    else {
        $('nav').removeClass('fixed-nav');
    }
});
