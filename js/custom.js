(function($) {
    "use strict";

    /* ..............................................
	Loader 
    ................................................. */

    $(window).on('load', function() {
        $('.preloader').fadeOut();
        $('#preloader').delay(550).fadeOut('slow');
        $('body').delay(450).css({ 'overflow': 'visible' });
    });



    /* ..............................................
    Fixed Menu
    ................................................. */

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.top-header').addClass('fixed-menu');
        } else {
            $('.top-header').removeClass('fixed-menu');
        }
    });

    /* ..............................................
    Properties Filter
    ................................................. */
    var Container = $('.container');
    Container.imagesLoaded(function() {
        var portfolio = $('.properties-menu');
        portfolio.on('click', 'button', function() {
            $(this).addClass('active').siblings().removeClass('active');
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        var $grid = $('.properties-list').isotope({
            itemSelector: '.properties-grid'
        });

    });

    /* ..............................................
    Gallery
    ................................................. */

    $(document).ready(function() {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
            }
        });
    });

    /* ..............................................
    Scroll To Top
    ................................................. */

    $(document).ready(function() {

        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#scroll-to-top').fadeIn();
            } else {
                $('#scroll-to-top').fadeOut();
            }
        });

        $('#scroll-to-top').click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });

    });




}(jQuery));

// Screen Play Hero
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
        playerVars: { 'rel': 0, 'autoplay': 1, 'controls': 0, 'autohide': 1, 'showinfo': 0, 'wmode': 'opaque' },
        videoId: 'tZX3uNQbBEs',
        //suggestedQuality: 'hd720',
        events: {
            'onReady': onPlayerReady
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.mute();
    event.target.setPlaybackQuality('hd720');
    //$(".video").fitVids();

    $('.video i').on('click', function() {
        if ($('.video').hasClass('on')) {
            event.target.mute();
            $('.video').removeClass('on');
        } else {
            event.target.unMute();
            $('.video').addClass('on');
        }
    });

}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.BUFFERING) {
        event.target.setPlaybackQuality('hd720');
    }
}