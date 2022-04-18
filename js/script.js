
jQuery(document).ready(function() {

    // ...

    // toggle "navbar-no-bg" class
    $('.top-content .text').waypoint(function() {
        $('nav').toggleClass('navbar-no-bg');
    });

    // ...

});
