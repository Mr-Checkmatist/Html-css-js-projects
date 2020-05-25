/* FIXED HEADER */
$(document).ready(function () {

    let header = $("#navbarTop"),
        banner = $("#banner").innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= banner ) {
            header.addClass("fixed-top");
        } else {
            header.removeClass("fixed-top");
        }
    }

  /* SMOOTH SCROLL */
     $("[data-scroll]").on("click", function(event) {
         event.preventDefault();

         let $this = $(this),
             blockId = $this.data('scroll'),
             blockOffset = $(blockId).offset().top;


         $("html, body").animate({
             scrollTop:  blockOffset
         }, 0);
     })



   /*ADD/REMOVE CLASS ON WIDTH*/

if($(window).width() <= 425)  $('.review_text').removeClass('col-8').addClass('col-12');
$(window).resize(function () {
let width = $('body').innerWidth()
if (width < 425) {
    $('.review_text').removeClass('col-8').addClass('col-12');

} });
    });
