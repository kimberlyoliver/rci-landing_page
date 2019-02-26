$(document).ready(function(){

function slide1(){
    document.getElementById('i1').src="imagens/ceu_rosa.png";
    setTimeout("slide2()", 1000)
}
  
function slide2(){
    document.getElementById('i2').src="imagens/igreja_céu_rosa2.png";
    setTimeout("slide3()", 1000)
}
  
function slide3(){
    document.getElementById('i3').src="imagens/noturno.png";
    setTimeout("slide1()", 1000)
}

//Importante
$('.importante').click(function(){
    $('.aviso').show();
    // $('.login').hide();

});

$('.closei').click(function(){
    event.preventDefault();
    $('.aviso').hide();
    // $('.login').show();    
});

$('.container').click(function(){
    event.preventDefault();
    $('.aviso').hide();
    // $('.login').show();    
});

//------------------------------------

//Destinos
$('.left1').click(function(){
    $('.open1').show();
});

$('.close1').click(function(){
    event.preventDefault();
    $('.open1').hide();
});

$('.container').click(function(){
    event.preventDefault();
    $('.open1').hide();
});

//------------------------------------

//Sobre
$('.left2').click(function(){
    $('.open').show();
});

$('.close').click(function(){
    event.preventDefault();
    $('.open').hide();
});

$('.container').click(function(){
    event.preventDefault();
    $('.open').hide();
});

//------------------------------------

//Ajuda
$('.right1').click(function(){
    $('.open3').show();
});

$('.close3').click(function(){
    event.preventDefault();
    $('.open3').hide();
});

$('.container').click(function(){
    event.preventDefault();
    $('.open3').hide();
});

//------------------------------------

//Minha Conta
$('.right2').click(function(){
    $('.open4').show();
});

$('.close4').click(function(){
    event.preventDefault();
    $('.open4').hide();
});

$('.container').click(function(){
    event.preventDefault();
    $('.open4').hide();
});

//------------------------------------

//Login
$('.closef').click(function(){
    $('.forms').hide();

});

$('.container').click(function(){
    event.preventDefault();
    $('.forms').hide();
});

$('.botao').click(function(){
    event.preventDefault();
    $('.forms').show();
});

//------------------------------------


//Scroll

$(function () {
  $(window).scroll(function () {
    if (jQuery(this).scrollTop() > 200) {
        $('.nav-diferente').show();
        $(".navegador-superior").addClass("nav-diferente");
        } else {
        $(".navegador-superior").removeClass("nav-diferente");
        $('.nav-diferente').hide();

    }
  });
});

//-------------------------------------

})

$('.carrossel').click(function(){
    event.preventDefault();
    $('.open').hide();
    // $('.login').show();    
});

//------------------------------------

//Login
$('.closef').click(function(){
    $('.forms').hide();
    // $('.login').hide();

});

$('.carrossel').click(function(){
    event.preventDefault();
    $('.forms').hide();
    // $('.login').show();    
});

$('.botao').click(function(){
    event.preventDefault();
    $('.forms').show();
    // $('.login').show();    
});

//------------------------------------

//Scroll

$(function () {
  $(window).scroll(function () {
    if (jQuery(this).scrollTop() > 40) {
        $('.nav-diferente').show();
        $(".navegador-superior").addClass("nav-diferente");
        } else {
        $(".navegador-superior").removeClass("nav-diferente");
        $('.nav-diferente').hide();

    }
  });
});

$('#img1').hover(function(){
    $('.legenda1').show();
});

$('#img1').mouseout(function(){
    $('.legenda1').hide();
});

//---------------------------------

$('#img2').hover(function(){
    $('.legenda2').show();
});

$('#img2').mouseout(function(){
    $('.legenda2').hide();
});

//---------------------------------

$('#img3').hover(function(){
    $('.legenda3').show();
});

$('#img3').mouseout(function(){
    $('.legenda3').hide();
});

//---------------------------------

$('#img4').hover(function(){
    $('.legenda4').show();
});

$('#img4').mouseout(function(){
    $('.legenda4').hide();
});

//---------------------------------


// $('#img2').hover(function(){
//     $('.legenda2').toggle();
// });

// $('#img3').hover(function(){
//     $('.legenda3').toggle();
// });

// $('#img4').hover(function(){
//     $('.legenda4').toggle();
// });