
function startAnim() {
    removeBanner();
    var cr = document.getElementById('curtain-left');
    cr.style.width = "0";
    cr.style.backgroundSize = "1px";
    cr.style.transition = "all 4.5s ease-in-out";
    cr.style.transform = "rotate(15deg)";
    cr.style.animationFillMode = "forwards";

    var cr = document.getElementById('curtain-right');
    cr.style.width = "0";
    cr.style.backgroundSize = "1px";
    cr.style.transition = "all 4.5s ease-in-out";
    cr.style.transform = "rotate(-15deg)";
    cr.style.animationFillMode = "forwards";

    var logo_bg = document.getElementById("suas-logo");
    logo_bg.classList.add("after-ribbon-cut");
    
    var img = $('#main-img');
    img.css('animation', 'appear 4000ms forwards');
    startCountDown();
    clearInterval(bubble_timer);
}

function startCountDown() {
    var cdt = $('#countdown');
    var init = 30;
    count=setInterval(function () {
        init--;
        if (init == 0) {
            //redirect
            playMusic();
            window.location.href = "live_stream.html";
            clearInterval(count);
        }
        cdt.html("00:" + init);
    }, 1000);
}
$(document).ready(function () {
    setTimeout(function () {
        $('.ribbon').addClass('active');
    }, 100);
    $("#btn-unveil").mousedown(function () {
        $(this).css("cursor", "url('img/scissors-closed.png'),auto");
    });
    $("#btn-unveil").mouseup(function () {
        $(this).css("cursor", "url('img/scissors-3.png'),auto");
    });
    $(".unveil-ribbon").mousedown(function () {
        $(this).css("cursor", "url('img/scissors-closed.png'),auto");
    });
    $(".unveil-ribbon").mouseup(function () {
        $(this).css("cursor", "url('img/scissors-3.png'),auto");
    });
});


function removeBanner() {
    var unveil = $('.unveil');
    unveil.css({
        'transform': 'translateY(40%)'
    });
    var banner = $('.unveil-ribbon');
    banner.css('transform', 'scale(0.5)');
    var ribbon = $('#btn-unveil');
    ribbon.css('height', '07%');
}
function change_text_to() {
    $('#change-text').html('Click to cut ribbon!');
}
function change_text_from() {
    $('#change-text').html('Symbiosis E-Cell');
}

var muted=false;
function playMusic(){
    if(muted){
        $('#audio').animate({volume:1},1000);
        muted=false;
    }else{
        muted=true;
        $('#audio').animate({volume:0},1000);        
    }
}

