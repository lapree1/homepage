
$("button#b1").on("click", function() {
  $("img.c1").hide();
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
});

$(document).ready(function(){
  $("shrink").click(function(){
    var div = $("div");
    runAnimation();
    function runAnimation(){
      div.animate({height:300},"slow");
      div.animate({width:300},"slow");
      div.css("background-color","black");
      div.animate({height:100},"slow");
      div.animate({width:100},"slow",callBackAnimation);
    }
function callBackAnimation(){
      console.log("Animation completed");

    }
  });
});

$("img.show").dblclick(function(){
  $("c1").hide();
});

$("img.show").click(function(){
  $(".c1").show();
});

$("img.c1").on({"mouseover" : function() {
    this.src = 'pic01-woody.jpg';
  },
  "mouseout" : function() {
    this.src="http://placekitten.com/480/480"
  }
});

$("img.c2").on({"mouseover" : function() {
    this.src = 'pic01-woody.jpg';
  },
  "mouseout" : function() {
    this.src= 'batman.jpg';
  }
});

$("img.c3").on({"mouseover" : function() {
    this.src = 'pic01-woody.jpg';
  },
  "mouseout" : function() {
    this.src="http://placekitten.com/480/480"
  }
});
