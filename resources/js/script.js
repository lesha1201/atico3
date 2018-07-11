//$(".section-features").waypoint(function(direction) {
//    $(".features-list li").each(function(){
//        $(this).queue(setTimeout(function() {
//            $(this).addClass("animated fadeInDown");
//        }, 2000);
//    })
//});


    
$(document).ready(function() {
    
    var mq = window.matchMedia( "(min-width: 768px)" );
    var os;
    if (mq.matches) {
        os80 = '80%';
        os40 = '40%';
        os50 = '50%';
    } else {
        os80 = '60%';
        os40 = '50%';
        os50 = '60%';
    }
    
    
    $('.section-features').waypoint(function(direction) {
        $('.section-features').addClass('fadeIn');
    }, {
        offset: os80
    });
    
    $('.-js-wp-1').waypoint(function(direction) {
        $('.-js-wp-1').addClass('fadeInDown');
    }, {
        offset: os40
    });
    $('.-js-wp-2').waypoint(function(direction) {
        $('.-js-wp-2').addClass('fadeInDown');
    }, {
        offset: os50
    });
    $('.-js-wp-3').waypoint(function(direction) {
        $('.-js-wp-3').addClass('fadeInDown');
    }, {
        offset: os50
    });
    $('.-js-wp-4').waypoint(function(direction) {
        $('.-js-wp-4').addClass('fadeInDown');
    }, {
        offset: os50
    });
    $('.-js-wp-5').waypoint(function(direction) {
        $('.-js-wp-5').addClass('fadeInDown');
    }, {
        offset: os50
    });
    $('.-js-wp-6').waypoint(function(direction) {
        $('.-js-wp-6').addClass('fadeInDown');
    }, {
        offset: os50
    });
    $('.-js-wp-7').waypoint(function(direction) {
        $('.-js-wp-7').addClass('fadeInDown');
    }, {
        offset: os50
    });
    
})