$(document).ready(function() {
    var goToByScroll;
    goToByScroll = function(id) {
        console.log(id);
        $('html,body').animate({
            scrollTop: $(id).offset().top - 1
        }, 'slow');
    };
    $('.scroll').on('click', function(e) {
        e.preventDefault();
        goToByScroll(this.id);
    });
});
