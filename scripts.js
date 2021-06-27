alert(
  " please to view for more responsiveness desktop view site in setting or auto rotate "
);

$(document).ready(function () {
  $("#profile").mouseenter(function () {
    $(this).hide();
  });

  $("#profile").mouseleave(function () {
    $(this).show();
  });

  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });
  $(".hero-items").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    navText: [
      '<i class="ti-angle-left"></i>',
      '<i class="ti-angle-right"></i>',
    ],
    smartSpeed: 1600,
    autoHeight: false,
    autoplay: true,
  });

  // For demo preview
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  if (mm == 12) {
    mm = "01";
    yyyy = yyyy + 1;
  } else {
    mm = parseInt(mm) + 1;
    mm = String(mm).padStart(2, "0");
  }
  var timerdate = mm + "/" + dd + "/" + yyyy;
  // For demo preview end

  $("#countdown").countdown(d.toUTCString(), function (event) {
    var $this = $(this).html(
      event.strftime(
        +"<div class='cd-item'><span>%D</span> <p>Days</p> </div>" +
          "<div class='cd-item'><span>%H</span> <p>Hrs</p> </div>" +
          "<div class='cd-item'><span>%M</span> <p>Mins</p> </div>" +
          "<div class='cd-item'><span>%S</span> <p>Secs</p> </div>"
      )
    );
  });
});
