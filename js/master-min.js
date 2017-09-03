$(document).ready(function() {
    $("#return").hide();
    $(".contentContainer").hide();
    $(".mainLink").click(function() {
        $("#theNav").fadeOut();
        $("#return").delay(600).fadeIn();
        if (this.id === "web") {
            $("#mediaContainer1").delay(600).fadeIn();
            $("#fullDoc").css("background-image", "url(inc/greyBg.png)");
        } else if (this.id === "vid") {
            $("#mediaContainer2").delay(600).fadeIn();
            $("#fullDoc").css("background-image", "url(inc/squares.png)");
        } else if (this.id === "misc") {
            $("#mediaContainer3").delay(600).fadeIn();
            $("#fullDoc").css("background-image", "url(inc/colorBg.png)");
        } else {
            $("#fullDoc").css("background-image", "url(inc/paperBg.png)");
        }
    });
    $("#return").click(function() {
        $("#return").fadeOut();
        $(".contentContainer").fadeOut();
        $("#theNav").delay(600).fadeIn();
        $("#fullDoc").css("background-image", "url(inc/paperBg.png)");
    });
});