$('document').ready(() => {
    $('a').click(function(e) {
        e.preventDefault();
        /* Reference: https://bit.ly/2LwfbOe */
        var destination = this.getAttribute("href");
        /* Add navigating effect */
        $(this).effect('fade', {}, 2600);
        /* Provide action to perform upon timeout */
        setTimeout(function() {
            window.location = destination;
        }, 2500);
    });
});