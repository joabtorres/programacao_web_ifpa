var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slide = document.getElementsByClassName("slide");
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slide.length) {
        slideIndex = 1;
    }
    slide[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}

 function showOpcoes(opcao) {
    switch (opcao) {
        case "comum":
            $(".comum").addClass("exibir");
            $(".premium").removeClass("exibir");
            $(".supreme").removeClass("exibir");
            
            $(".comum").removeClass("ocultar");
            $(".premium").addClass("ocultar");            
            $(".supreme").addClass("ocultar");
            break;
        case "premium":
            $(".premium").addClass("exibir");
            $(".comum").removeClass("exibir");
            $(".supreme").removeClass("exibir");
            
            $(".premium").removeClass("ocultar");
            $(".comum").addClass("ocultar");            
            $(".supreme").addClass("ocultar");
            break;
        case "supreme":
            $(".supreme").addClass("exibir");
            $(".premium").removeClass("exibir");
            $(".comum").removeClass("exibir");
            
            $(".supreme").removeClass("ocultar");
            $(".premium").addClass("ocultar");            
            $(".comum").addClass("ocultar");
            break;
    }
}