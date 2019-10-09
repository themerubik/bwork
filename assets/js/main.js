(function ($) {
	"use strict";

	   jQuery(document).ready(function($){

        $(".protfolio-list").masonry();


        $(".single-protfolio").hover(function(){
        	$(".single-protfolio .protfolio-hover h2").removeClass("animated fadeInUp");
        	$(this).find(".protfolio-hover h2").addClass("animated fadeInUp");
        });

        $(".menu-trigger").on('click' , function(){
        	$(".offcanvas-menu").addClass('active');
        	$(".offcanvas-menu-overlay").addClass('active');
        });
        $(".menu-close i.fa , .offcanvas-menu-overlay").on('click' , function(){
        	$(".offcanvas-menu").removeClass('active');
        	$(".offcanvas-menu-overlay").removeClass('active');
        });

        $(".header-area").headroom({
            
        });

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	