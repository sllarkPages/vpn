$(document).ready(function() {
    'use strict'

    // show sub li sidemenu
    $(".topleft-menu > li > a").click(function() {
        $(".topleft-submenu").hide();
        var id = $(this).attr("href");
        $(id).toggle();
    });



    //Fixed Navbar
    function windowResize() {
        $('body').css('paddingTop', $('.esticky').outerHeight())
    }
    windowResize();
    $(window).resize(function() {
        windowResize();
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $(".sticky-scroll").addClass("scrolled");
        } else {
            $(".sticky-scroll").removeClass("scrolled");
        }
    });

    //
    // Action Dropdown
    //
    $('.action-trigger').click(function(e) {
        e.preventDefault()
        e.stopPropagation()
        $(this)
            .children('.action-content')
            .toggle()
        $(this)
            .children('.action-content')
            .click(function(e) {
                e.stopPropagation()
            })
    })

    // scroll
    $(document).on('click', 'a[href^="#"]:not(".nav-tabs a")', function(e) {
        var id = $(this).attr('href');
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }
        e.preventDefault();
        var pos = $id.offset().top - 72;
        $('body, html').animate({ scrollTop: pos }, 1000);
    });

    //Side nav menu hide & show
    $(".sidenav-toggle-icon").click(function() {
        document.getElementById("SidenavMenu").style.left = "0";
    });
    $(".closebtn").click(function() {
        document.getElementById("SidenavMenu").style.left = "-0px";
    });

    $('.mobile-btn-bar').click(function() {
        $('.header-top-right').slideToggle()
    });

    // scroll 
    $(document).on('click', 'a[href^="#"]:not(".nav-tabs a")', function(e) {
        var id = $(this).attr('href');
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }
        e.preventDefault();
        $(".navbar-nav li").removeClass("active");
        $(this).parent().addClass("active");
        var dwidth = $(window).width();
        if (dwidth < 768) {
            $('#toggle-menu-btn').click();
        }
        var pos = $id.offset().top - 72;
        $('body, html').animate({ scrollTop: pos }, 1000);
    });

    // footer link accordian
    $(".footer-mobile-list.collapse.show").each(function() {
        $(this).prev(".footer-mobile-header").find(".f-plus").addClass("d-none").removeClass("d-block");
        $(this).prev(".footer-mobile-header").find(".f-minus").addClass("d-block").removeClass("d-none");
    });
    // Toggle plus minus icon on show hide of collapse element
    $(".footer-mobile-list.collapse").on('show.bs.collapse', function() {
        $(this).prev(".footer-mobile-header").find(".f-plus").addClass("d-none").removeClass("d-block");
        $(this).prev(".footer-mobile-header").find(".f-minus").addClass("d-block").removeClass("d-none");
    }).on('hide.bs.collapse', function() {
        $(this).prev(".footer-mobile-header").find(".f-minus").addClass("d-none").removeClass("d-block");
        $(this).prev(".footer-mobile-header").find(".f-plus").addClass("d-block").removeClass("d-none");
    });
});