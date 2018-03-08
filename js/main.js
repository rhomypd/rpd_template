 //slider depan
 $(document).ready(function () {
   $('.headline-slider').slick({
     dots: true
   });

   //slider foto
   $('.iphoto-slider-main').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: true,
     fade: true,
     asNavFor: '.iphoto-slider-nav'
   });
   $('.iphoto-slider-nav').slick({
     slidesToShow: 4,
     slidesToScroll: 1,
     asNavFor: '.iphoto-slider-main',
     centerMode: true,
     focusOnSelect: true,
      responsive: [
      {
        breakpoint: 361,
        settings: {
        slidesToShow: 2,
     
        }
      },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 3,
       
      }
    }
        
        
      ]
     
   });






 });

 //backtop

 $(document).ready(function () {
   $(window).scroll(function () {
     if ($(this).scrollTop() > 50) {
       $('#back-to-top').fadeIn();
     } else {
       $('#back-to-top').fadeOut();
     }
   });
   // scroll body to 0px on click
   $('#back-to-top').click(function () {
     $('#back-to-top').tooltip('hide');
     $('body,html').animate({
       scrollTop: 0
     }, 800);
     return false;
   });
   $('#back-to-top').tooltip('show');


   //navbar
   $(".inav-burger").click(function () {
     $(".inav-bottom").slideToggle();
     $(".inav-arrow").toggleClass("idrop");
     $(".inav-burger").toggleClass("cross");


   });


 });


 //datepicekr
 $(document).ready(function () {
   $('#datePicker').datepicker({
     format: 'dd-mm-yyyy'
   }).on('changeDate', function (e) {
     // Revalidate the date field
     $('#eventForm').formValidation('revalidateField', 'date');
   });
 });
