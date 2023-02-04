$(".starDiv").click((e) => {
    var set = $('.starDiv');
    var index = set.index($(e.target)); //Пример определения индекса элемента с помошью метода index() в jQuery
    $(e.target).nextAll().css("background-image", "url(/Task2/Stars/black_star.png)"); //Пример нахождения сестринских элементов с помошью методов серии next и prev в jQuery
    $(e.target).css("background-image", "url(/Task2/Stars/gold_star.png)");
    $(e.target).prevUntil("h2").css("background-image", "url(/Task2/Stars/gold_star.png)");
});