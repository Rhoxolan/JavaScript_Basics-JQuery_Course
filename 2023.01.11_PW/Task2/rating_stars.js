$(".starDiv").click((e) => {
    var set = $('.starDiv');
    var index = set.index($(e.target)); //Пример определения индекса элемента с помошью метода index() в jQuery
    $(e.target).nextAll().css("background-image", "url(/Task2/Stars/black_star.png)");
});