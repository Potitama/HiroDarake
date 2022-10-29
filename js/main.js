$(window).scroll(function() {
    $('.fadein').each(function() {
        var mainHeight = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > mainHeight - windowHeight) {
            $(this).css('opacity', '1');
            $(this).css('transform', 'translateY(0)');
        }
    });
}); 

$(window).scroll(function() {
    $('.faderotate').each(function() {
        var mainHeight = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > mainHeight - windowHeight) {
            $(this).css('opacity', '1');
            $(this).css('transform', 'rotateY(0)');
        }
    });
}); 

jQuery(function ($) {
    $('.js-accordion-title').on('click', function () {
      /*クリックでコンテンツを開閉*/
      $(this).next().slideToggle(200);
      /*矢印の向きを変更*/
      $(this).toggleClass('open', 200);
    });
    
});