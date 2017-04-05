$(document).ready(function(){
	$('#hamburger').click(function(){
		$(this).toggleClass('open');
    $('nav ul').toggleClass("showing");
	});
});

$(document).ready(function() {

  var windowHeight = $(window).height();
  var winScrPosTop = $(window).scrollTop();
  var winScrPosBot = windowHeight + winScrPosTop;

    $.fn.revealOnScroll = function (direction, speed) {

      return this.each(function(){

        var objectOffset = $(this).offset();
        var objectOffsetTop = objectOffset.top;

        if (!$(this).hasClass("hidden")) {
            if (direction == "right") {
                $(this).css({
                  "opacity" : 0,
                "left" : "700px"
                });
            } else if (direction == "middle") {
                $(this).css({
                  "opacity" : 0,
                  "left" : "0px"
                });
            }
            else {
               $(this).css({
                 "opacity" : 0,
                 "left" : "-700px"
               });
           }
            $(this).addClass("hidden");
        }
        if (!$(this).hasClass("animation-complete")){

          if (winScrPosBot > objectOffsetTop ) {
            $(this).animate({"opacity" : 1, "left" : 0,}, speed).addClass("animation-complete");
          }
        }
      });
    }


    $(window).scroll(function() {
       windowHeight = $(window).height();
       winScrPosTop = $(window).scrollTop();
       winScrPosBot = windowHeight + winScrPosTop;

       $(".heading").revealOnScroll("middle", 1000);
       $(".content:nth-child(2)").revealOnScroll("left", 2000);
       $(".column:nth-child(1)").revealOnScroll("left", 2000);
       $(".column:nth-child(2)").revealOnScroll("right", 2000);
       $(".content:nth-child(3)").revealOnScroll("right", 2000);
       $("#subscribe").revealOnScroll("middle", 2000);

  });
});
