$(document).ready(function(){
    $('#header li a').click(function() {
        $('html body').animate({
            scrollTop: $(this.hash).offset().top
        }, 800);
    });

});

