function myFunctionA() {
  var x = document.getElementById("personal-reminder");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


$(document).ready(function () {

    $("body").mousemove(function (e) {
        handleMouseMove(e);
    });

    function handleMouseMove(event) {

        var x = event.pageX;
        var y = event.pageY;

        $("#personal-reminder").animate({
            left: x,
            top: y
        }, 1);
    }
});





function myFunctionB() {
  var x = document.getElementById("privacypolicy");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}



$('#privacybutton').click(function(e) { 
    var random_menu_cover = Math.floor(Math.random() * $('.privacyandcookies').length);

    $('.privacyandcookies').hide().eq(random_menu_cover).show().css("display", "none");
});
