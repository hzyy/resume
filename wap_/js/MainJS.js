$('document').ready(function(){  
    $('.flexslider-bgslider').flexslider({
        animation: "fade", // Set "fade" or "slide" for your desire effect
        directionNav: false,
        animationLoop: false,
        controlNav: false, 
        slideshow: true,
        animationDuration: 600
    });
    if($('div#MainNav').css("margin-top", "-85px")) // Default hide navigation
        var mytoggle = true;
    
    $('li#RBNShowMenu').click(function(){
        if(mytoggle){
            $('div#MainNav').animate({"margin-top": "0"}, 500);
            mytoggle = false;
        }
        else{
            $('div#MainNav').animate({"margin-top": "-85px"}, 500);
            mytoggle = true;
        }
    });
});