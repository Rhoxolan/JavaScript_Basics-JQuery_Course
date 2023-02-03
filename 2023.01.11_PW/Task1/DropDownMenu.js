$(".menuDiv").mouseenter(() => {
    $(".menuDiv").animate({ //Пример создания анимации с помошью метода animate() в jQuery
        width: 175
    }, 100);
    $(".itemTextDiv").animate({
        width: 170
    }, 100);
});

$(".menuDiv").mouseleave(() => {
    $(".menuDiv").animate({
        width: 55
    }, 100);
    $(".itemTextDiv").animate({
        width: 0
    }, 450);
});