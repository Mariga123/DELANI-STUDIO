$(".image").click(function () {
    $(this).children(".toggle").slideToggle();
    $(this).children(".show").toggle();
});
$(document).ready(function (event) {
    $("form#formInput").submit(function() {
        let name = $("input#name").val();
        let email = $("input#email").val();
        let subject = $("textarea#subject").val();

        if ($("input#name").val() && $("input#email").val()) {
            alert(name + ", we have received your message. Thank you for reaching out to us.");
        }
        else {
            alert("Please enter your name and email!");
        }

        event.preventDefault();
    })
    });
