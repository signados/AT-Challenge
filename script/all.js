


const burger = () => {
    if($("#burger").hasClass("burguer-hovered")) {
        $('nav').fadeOut();
        $('#burger').toggleClass('burguer-hovered');
    } else {
        $('nav').fadeIn();
        $('#burger').toggleClass('burguer-hovered');
    }
}

$(document).ready(() =>{



    $('#burger').click(() => burger())

    $('body').click((e) => {
        if (!$(e.target).closest('header').length) {
            burger();
        }
    })
    
    $('#lang').click(()=> alert('cambiar idioma'))

    
    $('article img').hover((x) => {
        $(x.target).parent().find('.title').addClass('title-hovered');
    });



});


