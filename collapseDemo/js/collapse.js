$(document).ready(() => {
    let cardNodeList = $('#accordion').contents().filter('.card');

    for (let cardIndex = 0; cardIndex < cardNodeList.length; cardIndex++) {
        let card = cardNodeList[cardIndex];
        /* Credited to https://bit.ly/2KDyofU */
        /* Determine if event is click or touch event */
        let event = ((document.ontouchstart !== null) ? 'click' : 'touchstart');
        /* Credited to https://bit.ly/2IxnXOt */
        $(card).on(event, function(event) {
            /* Code that will execute only if card was not opened
               which is the default case scenario */
            if (!($(card).hasClass('is-active'))) {
                event.stopPropagation();
                event.preventDefault();
                $(this).addClass('is-active');
                /* Code that makes only active card show up and
                   collapse other cards */
                if ($(this).prev().length) {
                    $(this).prev().removeClass('is-active');
                    /* Handle basic edge case where first and third card is open */
                    if ($(this).prev().prev().length) {
                        $(this).prev().prev().removeClass('is-active');
                    }
                }
                if ($(this).next().length) {
                    $(this).next().removeClass('is-active');
                    /* Handle basic edge case where first and third card is open */
                    if ($(this).next().next().length) {
                        $(this).next().next().removeClass('is-active');
                    }
                }
            } else {
                /* Handle edge case when one card was always opened
                   inspite of closing others */
                $(this).removeClass('is-active');
            }
        })
    }

       /* On clicking back link , animate and go to home page */
    $("#backLink").click(function(e) {
        e.preventDefault();
        /* Reference: https://bit.ly/2LwfbOe */
        var destination = this.getAttribute("href");
        /* Add navigating effect */
        $(this).effect('fade', {}, 1600);
        /* Provide action to perform upon timeout */
        setTimeout(function() {
            window.location = destination;
        }, 1500);
    });
});
