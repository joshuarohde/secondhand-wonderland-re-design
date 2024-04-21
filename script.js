
$(document).ready(function(){
    $(".btn").hover(function(){
        $(this).addClass("animate__animated animate__pulse  animate__faster animate__3");
    }, function(){
        $(this).removeClass("animate__animated animate__pulse animate__faster animate__3");
    });

    $("#soldBeforeYes").click(function() {
        if ($(this).is(":checked")) {
            $("#soldBeforeDiv").show();
            $("#notSoldBeforeDiv").hide();
            $("#soldBeforeNo").prop("checked", false);
        } else {
            $("#soldBeforeDiv").hide();
        }
    });

    $("#soldBeforeNo").click(function() {
        if ($(this).is(":checked")) {
            $("#notSoldBeforeDiv").show();
            $("#soldBeforeDiv").hide();
            $("#soldBeforeYes").prop("checked", false);
        } else {
            $("#notSoldBeforeDiv").hide();
        }
    });


});


