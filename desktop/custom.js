<!-- 
	Using regular JS with custom functions 
    to get the URL Var and Set cookie 
-->
var kiosk = getUrlVars()['kiosk'];

<!-- 
	If URL Var is true, then set the cookie for 10 Years
	If URL Var is delete, then remove the cookie (set life to 0)
 -->
if (kiosk == 'true'){setCookie('kiosk', true, 3650);}
if (kiosk == 'delete'){setCookie('kiosk', false, 0);}

$(function () {
    var b = $(".breadcrumbsr");
    var a = b.html();
    var c = $("#contentright #room_box").html();

	// Resize and show the Marquette Header bar
    reSize();
    $("#marquettehead").show();
    
    // make the spacer in the breadcrumbs 2 slashes
    $(".breadcrumb_spacer").html(" // ");
    
    // make buttons have a differant class
    $(".fbutton").addClass("btn").addClass("btn-primary").removeClass("fbutton");
    
    // add the image to the front page if the right side container exists
    if (c != null || c != undefined) {
        $("#contentright #room_box .headerbox").after('<img src="http://www.marquette.edu/library/images/libcal/room.jpg" alt="Group Study Room" />').html("<h2>Reserve a Room</h2>")
    }
    
    // Resize the Marquette Bar when the window is resized
    $(window).resize(function () {reSize()});
    
    // hide the admin bar when it is not used
    if ($.trim(a).length <= 6) {b.hide()}
    
    // start virtual tour when the tour button is clicked
    $('.tour_btn').click(function () {startRide($('#form_box').is(":visible")); startRide($('#form_box').is(":visible"));});
    
    // display the popup box when the link is clicked
    $(".fancybox").fancybox();
    
});

<!-- 
	The following should only be called when the calendar portion of the site is called
	However, we are still checking the body id for the word 'page' just to play it safe
-->
$(document).ajaxStop(function(){
     var bodyID = $('body').attr('id');
     var isRoom = bodyID.indexOf("room") !== -1;
     var kiosk_c = getCookie('kiosk');
     var mainContent = $('#group_desc').html();

	// If this is a room page and the kiosk cookie is true
    if (isRoom && kiosk_c){
    
    	// hide the Marquette bar, BreadCrumbs, Tour Button, and Room Description
    	$('.tour_btn, .topnav, #marquettehead, #group_desc').hide();
    	
    	// place the Room Desc in the footer and remove unneeded CSS attributes
        $('#footer').html(mainContent).css({'text-align': 'left', 'border-top': 'none', 'line-height': 'inherit', 'font': 'inherit'});
        
        // put the main container higher on the screen
    	$('#container').css({'min-height': 'auto', 'top' : '45px'});
    	
    }
});
function startRide(a){$("#tour_guide").joyride({tipLocation:"top",preStepCallback:function(b){if(b==3&&a==false){$("#form_box").show()}},postRideCallback:function(){if(a==false){$("#form_box").hide()}}})}

function reSize(){if($(window).width()>=1045){$("#marquettehead").width($(window).width());$("#marquettehead").css("left","-"+$("#container").offset().left+"px");$("#bluegrad").width($(window).width())}}

function getUrlVars(){var d=[],c;var a=window.location.href.slice(window.location.href.indexOf("?")+1).split("&");for(var b=0;b<a.length;b++){c=a[b].split("=");d.push(c[0]);d[c[0]]=c[1]}return d}

function setCookie(a,d,b){var e=new Date();e.setDate(e.getDate()+b);var c=escape(d)+((b==null)?"":"; expires="+e.toUTCString());document.cookie=a+"="+c}

function getCookie(b){var c=document.cookie;var d=c.indexOf(" "+b+"=");if(d==-1){d=c.indexOf(b+"=")}if(d==-1){c=null}else{d=c.indexOf("=",d)+1;var a=c.indexOf(";",d);if(a==-1){a=c.length}c=unescape(c.substring(d,a))}return c};