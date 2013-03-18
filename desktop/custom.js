$(function () {
    $('.breadcrumb_spacer').html(' // ');
    $('.fbutton').addClass('btn').addClass('btn-primary');
    $('#contentright #room_box .headerbox').after('<img src="path/to/sidebar-room.jpg" alt="Group Study Room" />').html('<h2>Reserve a Room</h2>');
    reSize();
    $(window).resize(function() { reSize(); });
    var adminBar = $('.breadcrumbsr');
    var adminBarVal = adminBar.html();
    if ($.trim(adminBarVal).length <= 6) {
        adminBar.hide();
    }
});

function reSize(){
    if ($(window).width() >=1024){
        $('#marquettehead').width($(window).width());
        $('#marquettehead').css('left', '-' + $('#container').offset().left + 'px');
        $('#bluegrad').width($(window).width());
    }
}