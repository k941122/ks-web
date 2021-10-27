    $(document).ready(function(){
      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 600) {
          $("header").css("background" , "#193764");
        }
        else{
          $("header").css("background" , "transparent");   
        }
      })
    })