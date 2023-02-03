$('.colorDiv').mouseenter((e) => { //Пример выборки всех элементов по классу в jQuery
    if ($(e.target).hasClass("redDiv")) { //Пример определения наличия класса в jQuery
        $('.redDiv').css("box-shadow", "rgba(0, 0, 0, 0.35) 0px 10px 15px");
        return;
    }
    if ($(e.target).hasClass("greenDiv")) {
        $('.greenDiv').css("box-shadow", "rgba(0, 0, 0, 0.35) 0px 10px 15px");
        return;
    }
    if ($(e.target).hasClass("orangeDiv")) {
        $('.orangeDiv').css("box-shadow", "rgba(0, 0, 0, 0.35) 0px 10px 15px");
        return;
    }
    if ($(e.target).hasClass("yellowDiv")) {
        $('.yellowDiv').css("box-shadow", "rgba(0, 0, 0, 0.35) 0px 10px 15px");
    }
});

$('.colorDiv').mouseleave((e) => {
    if ($(e.target).hasClass("redDiv")) {
        $('.redDiv').css("box-shadow", "none");
        return;
    }
    if (e.target.classList.contains("greenDiv")) {
        $('.greenDiv').css("box-shadow", "none");
        return;
    }
    if (e.target.classList.contains("orangeDiv")) {
        $('.orangeDiv').css("box-shadow", "none");
        return;
    }
    if (e.target.classList.contains("yellowDiv")) {
        $('.yellowDiv').css("box-shadow", "none");
    }
});

$('.colorDiv').mousedown((e) => {
    if ($(e.target).hasClass("redDiv")) {
        $('.redDiv').css("box-shadow", "rgba(0, 0, 0, 0.45) 0px 10px 20px");
        return;
    }
    if ($(e.target).hasClass("greenDiv")) {
        $('.greenDiv').css("box-shadow", "rgba(0, 0, 0, 0.45) 0px 10px 20px");
        return;
    }
    if ($(e.target).hasClass("orangeDiv")) {
        $('.orangeDiv').css("box-shadow", "rgba(0, 0, 0, 0.45) 0px 10px 20px");
        return;
    }
    if (e.target.classList.contains("yellowDiv")) {
        $('.yellowDiv').css("box-shadow", "rgba(0, 0, 0, 0.45) 0px 10px 20px");
    }
});

$('.colorDiv').mouseup((e) => {
    if ($(e.target).hasClass("redDiv")) {
        $('.redDiv').css("box-shadow", "rgba(0, 0, 0, 0.35) 0px 10px 15px");
        return;
    }
    if ($(e.target).hasClass("greenDiv")) {
        $('.greenDiv').css("box-shadow", "rgba(0, 0, 0, 0.35) 0px 10px 15px");
        return;
    }
    if ($(e.target).hasClass("orangeDiv")) {
        $('.orangeDiv').css("box-shadow", "rgba(0, 0, 0, 0.35) 0px 10px 15px");
        return;
    }
    if ($(e.target).hasClass("yellowDiv")) {
        $('.yellowDiv').css("box-shadow", "rgba(0, 0, 0, 0.35) 0px 10px 15px");
    }
});