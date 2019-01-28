
$("button#b1").on("click", function() {
  $("c1").hide();
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

$('.btn').on('click', function(){
  $('body').css('background-image', 'url(https://www.pickthebrain.com/blog/wp-content/uploads/2015/12/8-things-successful-people-perform-differently-from-others.jpg)')
})

$("h2.important").css({
  "font-family": "'Times New Roman', Times, serif",
  "font-size": "1.3em",
  "color": "red"
});

$('.btn').on('dblclick', function(){
  $('body').css('background-image', 'url(bg5-hatman.jpg)')
})
