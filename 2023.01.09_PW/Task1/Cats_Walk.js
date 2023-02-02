$('body').mousemove(function(e) {
    console.log(e.pageX);
    $("#catDiv").css('top', `${e.pageY - 150}px`); //Пример выборки элемента по селектору id в jQuery; Пример установки стиля css элементу с помощью jQuery 
    $("#catDiv").css('left', `${e.pageX - 150}px`);
});