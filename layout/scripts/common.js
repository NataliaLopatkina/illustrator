console.log('Hello! I\'m Dublin Apps 😊.');

if (document.querySelectorAll(".feature").length > 0) {
    var animation = false;
    var sliderWidth = 960;
    var sliderList = document.querySelector(".features__list");
    var sliderItem = document.querySelectorAll(".feature");
    var slidePrev = document.querySelector(".features__arrow--prev");
    var slideNext = document.querySelector(".features__arrow--next");
    var slideIndex = 0;
    var children = sliderList.children;
    var cloneElementFirst = children[0].cloneNode(true); // Первый дублированный элемент
    var cloneElementLast = children[sliderItem.length - 1].cloneNode(true); // Последний дублированный элемент

    slidePrev.onclick = scrollToPrev;
    slideNext.onclick = scrollToNext;
    sliderList.style.width = sliderItem.length * 100 + "%"; // Ширина контейнера
    sliderList.insertBefore(cloneElementLast, children[0]); // Добавляем дубликат последнего слайда в начало слайдера
    sliderList.appendChild(cloneElementFirst); // Добавляем дубликат первого слайда в конец слайдера
    sliderList.style.width = (sliderItem.length + 2) * 100 + "%"; // Пересчитываем ширину с учетом добавленных дубликтов
    var translatePosition = -(100 / (sliderItem.length + 2)) + "%";
    sliderList.style.transform = "translateX(" + translatePosition + ")";

    function scrollToNext() {
        if (animation) {
            return;
        }

        animation = true;

        slideIndex++;// Увеличиваем позицию слайдера
        sliderList.classList.add("transition"); // Анимация смены слайдера

        if (slideIndex > sliderItem.length - 1) {
            setTimeout(function () {
                sliderList.classList.remove("transition"); // Обнуляем анимацию
                sliderList.style.width = (sliderItem.length + 2) * 100 + "%"; // Восстанавливаем ширину
                slideIndex = 0; // Обнуляем положение слайдера
                sliderList.style.transform = "translateX(" + translatePosition + ")"; // Возвращаемся в начало слайдера
                animation = false;
            }, 700)
        }

        var translateScroll = (-(slideIndex + 1) * (100 / (sliderItem.length + 2))) + "%";
        sliderList.style.transform = "translateX(" + translateScroll + ")"; // Перелистывание слайдов вправо, не доходя до границы
        setTimeout(function () {
            animation = false;
        }, 700)
    }

    function scrollToPrev() {
        if (animation) {
            return;
        }

        animation = true;

        slideIndex--; // Уменьшаем позицию слайдера
        sliderList.classList.add("transition"); // Добавляем анимацию перехода

        if (slideIndex < 0) {
            setTimeout(function () {
                sliderList.classList.remove("transition"); // Обнуляем анимацию
                sliderList.style.width = (sliderItem.length + 2) * 100 + "%"; // Восстанавливаем ширину
                slideIndex = sliderItem.length - 1; // Меняем индекс слайдера
                var translatePositionLast = -sliderItem.length * (100 / (sliderItem.length + 2)) + "%";
                sliderList.style.transform = "translateX(" + translatePositionLast + ")"; // Меняем положение слайдера в конец
                animation = false;
            }, 700)
        }

        var translateScroll = (-(slideIndex + 1) * (100 / (sliderItem.length + 2))) + "%";
        sliderList.style.transform = "translateX(" + translateScroll + ")"; // Перелистывание сладов влево, не доходя до границы
        setTimeout(function () {
            animation = false;
        }, 700)
    }
}

if (document.querySelectorAll(".reviews-list").length >0) {
    var animation = false;
    var sliderListReviews = document.querySelector(".reviews__content");
    var sliderItemReviews = document.querySelectorAll(".reviews__content .reviews-list");
    var slidePrevReview = document.querySelector(".reviews__control--prev");
    var slideNextReview = document.querySelector(".reviews__control--next");
    var slideIndex = 0;
    var children = sliderListReviews.children;
    var cloneElementFirst = children[0].cloneNode(true); // Первый дублированный элемент
    var cloneElementLast = children[1].cloneNode(true); // Последний дублированный элемент

    console.log(sliderItemReviews);

    slidePrevReview.onclick = scrollToPrev;
    slideNextReview.onclick = scrollToNext;
    sliderListReviews.style.width = sliderItemReviews.length * 100 + "%"; // Ширина контейнера
    sliderListReviews.insertBefore(cloneElementLast, children[0]); // Добавляем дубликат последнего слайда в начало слайдера
    sliderListReviews.appendChild(cloneElementFirst); // Добавляем дубликат первого слайда в конец слайдера
    sliderListReviews.style.width = (sliderItemReviews.length + 2) * 100 + "%"; // Пересчитываем ширину с учетом добавленных дубликтов
    var translatePosition = -(100 / (sliderItemReviews.length + 2)) + "%";
    sliderListReviews.style.transform = "translateX(" + translatePosition + ")";

    function scrollToNext() {
        if (animation) {
            return;
        }

        animation = true;

        slideIndex++;// Увеличиваем позицию слайдера
        sliderListReviews.classList.add("transition"); // Анимация смены слайдера

        if (slideIndex > sliderItemReviews.length - 1) {
            setTimeout(function () {
                sliderListReviews.classList.remove("transition"); // Обнуляем анимацию
                sliderListReviews.style.width = (sliderItemReviews.length + 2) * 100 + "%"; // Восстанавливаем ширину
                slideIndex = 0; // Обнуляем положение слайдера
                sliderListReviews.style.transform = "translateX(" + translatePosition + ")"; // Возвращаемся в начало слайдера
                animation = false;
            }, 700)
        }

        var translateScroll = (-(slideIndex + 1) * (100 / (sliderItemReviews.length + 2))) + "%";
        sliderListReviews.style.transform = "translateX(" + translateScroll + ")"; // Перелистывание слайдов вправо, не доходя до границы
        setTimeout(function () {
            animation = false;
        }, 700)
    }

    function scrollToPrev() {
        if (animation) {
            return;
        }

        animation = true;

        slideIndex--; // Уменьшаем позицию слайдера
        sliderListReviews.classList.add("transition"); // Добавляем анимацию перехода

        if (slideIndex < 0) {
            setTimeout(function () {
                sliderListReviews.classList.remove("transition"); // Обнуляем анимацию
                sliderListReviews.style.width = (sliderItemReviews.length + 2) * 100 + "%"; // Восстанавливаем ширину
                slideIndex = sliderItem.length - 1; // Меняем индекс слайдера
                var translatePositionLast = -sliderItemReviews.length * (100 / (sliderItemReviews.length + 2)) + "%";
                sliderListReviews.style.transform = "translateX(" + translatePositionLast + ")"; // Меняем положение слайдера в конец
                animation = false;
            }, 700)
        }

        var translateScroll = (-(slideIndex + 1) * (100 / (sliderItemReviews.length + 2))) + "%";
        sliderListReviews.style.transform = "translateX(" + translateScroll + ")"; // Перелистывание сладов влево, не доходя до границы
        setTimeout(function () {
            animation = false;
        }, 700)
    }
}

// Tabs

var activeTab = ''

function tabs(numberTab) {
    if (activeTab != numberTab) {
        var elements = document.querySelectorAll(".tab-content");

        elements.forEach(function (item) {
            item.classList.remove("active");
        });

        var activeElements = document.querySelectorAll(`[data-content="${numberTab}"]`);

        activeElements.forEach(function (item) {
            item.classList.add("active");
        });

        activeTab = numberTab;
    }
}

var buttons = document.querySelectorAll(".tabs__button");

buttons.forEach(function (el) {
    el.addEventListener('click', function (e) {
        var curretTarget = event.target.dataset.tab;

        buttons.forEach(function (item) {
            item.classList.remove("active");
            event.target.classList.add("active");
        })

        tabs(curretTarget);
    })
});

document.addEventListener("DOMContentLoaded", function () {
    var nav = document.querySelector(".nav");
    var navButton = document.querySelector(".header__button");
    var navList = document.querySelector(".nav__list");

    navButton.addEventListener("click", function () {
        var listHeight = navList.offsetHeight;

        if (nav.classList.contains("nav--closed")) {
            nav.classList.remove("nav--closed");
            nav.classList.add("nav--opened");
            nav.style.height = listHeight + "px";
            navButton.classList.remove("header__button--opened");
            navButton.classList.add("header__button--closed");
        }

        else {
            nav.classList.remove("nav--opened");
            nav.classList.add("nav--closed");
            nav.style.height = "0px";
            navButton.classList.remove("header__button--closed");
            navButton.classList.add("header__button--opened");
        }
    })
})


