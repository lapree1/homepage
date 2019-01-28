
$("button#b1").on("click", function() {
  $("img").hide();
});

$('nav li ul').hide().removeClass('fallback');
$('nav li').hover(
  function () {
    $('ul', this).stop().slideDown(100);
  },
  function () {
    $('ul', this).stop().slideUp(100);
  }
);

$("button#make_visible").on("click", function() {
  $("img#dramatic").slideDown();
});

$("button#goAway").on("click", function() {
  $("img#dramatic").slideUp();
});

$("img#dramatic").slideDown(1500);
