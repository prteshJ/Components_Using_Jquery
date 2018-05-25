 $("document").ready(() => {
     /* Handle click event */
     $('#hamburger').on('click', function() {
         let target = '#' + $(this).data('target');
         /* Only do below actions if hamburger menu is visible */
         if ($(this).length) {
             /* Toggle hamburger menu for mobile devices */
             $(this).toggleClass('is-active');
             $(target).toggleClass('is-active');
             if ($(this).hasClass('is-active')) {
                 /* Blur background when hamburger menu is active */
                 $('#blurMe').foggy();
                 $('#blurMe.content').css({ 'pointer-events': 'none', 'cursor': 'not-allowed' });
             } else {
                 /* Unblur background for larger devices */
                 $('#blurMe').foggy(false);
                 $('#blurMe.content').css({ 'pointer-events': '', 'cursor': '' });

             }
         }
     });
 });