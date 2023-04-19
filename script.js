$(window).on("scroll", function() {
    var scrollTop = $(this).scrollTop();
    $(".parallax-background").css("top", -scrollTop / 2);
  });
  