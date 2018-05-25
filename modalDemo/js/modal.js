$("document").ready(() => {
    /* On clicking button, fire up modal */
    $("#btnModal").click(() => {
        $(".modal").css("display", "flex");
        $("i").css("color", "black");
        $("#exampleModal").show();
        $(".modal-card").effect("slide", "slow");
    });

    /* On clicking below buttons, close modal */
    $("#btnCancel, #closeIcon").click(() => {
        $("i").css("color","#dc3545");
        $("#exampleModal").effect("puff", {}, "slow");
    });

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

    /* Reference: https://bit.ly/2s4dlLB */
    /* If modal is visible only then trigger close behavior on esc key press event */
    $(document).keydown(function(event) {
        if (event.keyCode == 27 && $("#exampleModal").is(":visible")) {
            $("i").css("color","#dc3545");
            $("#exampleModal").effect('puff', {}, 'slow');
        }
    });
});