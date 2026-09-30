/* =========================================================
   SECTION 1
   MAIN VISUAL
========================================================= */

const mainVisualSwiper = new Swiper(".main_visual_swiper", {

    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },

    pagination: {
        el: ".main_visual .swiper-pagination",
        clickable: true
    },

    loop: true

});


/* =========================================================
   SECTION 2
   PROMOTION
========================================================= */

const promotionSwiper = new Swiper(".promotion_swiper", {

    slidesPerView: 1.2,
    spaceBetween: 16,
    centeredSlides: true,

    breakpoints: {

        768: {
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: false
        },

        1510: {
            slidesPerView: 4,
            spaceBetween: 22,
            centeredSlides: false
        }

    }

});


/* =========================================================
   SECTION 2
   PROMOTION PAGINATION
========================================================= */

const promotionPagination = document.querySelector(".promotion_pagination");

function setPromotionPagination() {

    const width = window.innerWidth;
    const count = width >= 1510 ? 0 : width >= 768 ? 3 : 5;

    promotionPagination.innerHTML = "";

    for (let i = 0; i < count; i++) {

        const dot = document.createElement("button");

        dot.className = "promotion_dot";
        dot.type = "button";

        dot.addEventListener("click", () => {
            promotionSwiper.slideTo(i);
        });

        promotionPagination.appendChild(dot);

    }

    updatePromotionPagination();

}

function updatePromotionPagination() {

    const dots = document.querySelectorAll(".promotion_dot");

    dots.forEach((dot, i) => {
        dot.classList.toggle(
            "active",
            i === promotionSwiper.activeIndex
        );
    });

}

promotionSwiper.on("slideChange", updatePromotionPagination);

setPromotionPagination();

window.addEventListener("resize", () => {

    promotionSwiper.update();
    setPromotionPagination();

});


/* =========================================================
   SECTION 3
   MENU
========================================================= */

const menuSwiper = new Swiper(".menu_swiper", {
    slidesPerView: "auto",
    slidesPerGroup: 1,
    spaceBetween: 16,
    centeredSlides: true,
    allowTouchMove: true,

    breakpoints: {
        768: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 16,
            centeredSlides: false,
            allowTouchMove: true,
        },

        1510: {
            slidesPerView: 6,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,
            allowTouchMove: false,
        }
    }
});


/* =========================================================
   SECTION 3
   MENU PAGINATION
========================================================= */

const menuPagination = document.querySelector(".menu_pagination");

function setMenuPagination() {

    const width = window.innerWidth;

    let count = 0;

    if (width < 768) {
        count = 6;
    } else if (width < 1510) {
        count = 3;
    }

    menuPagination.innerHTML = "";

    for (let i = 0; i < count; i++) {

        const dot = document.createElement("button");

        dot.type = "button";
        dot.className = "menu_dot";

        dot.addEventListener("click", function () {
            menuSwiper.slideTo(i);
        });

        menuPagination.appendChild(dot);
    }

    updateMenuPagination();
}


function updateMenuPagination() {

    const dots = document.querySelectorAll(".menu_dot");

    dots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === menuSwiper.activeIndex
        );

    });
}


menuSwiper.on("slideChange", updateMenuPagination);

setMenuPagination();


window.addEventListener("resize", function () {

    menuSwiper.update();
    setMenuPagination();

});


/* =========================================================
   SECTION 4
   STORE
========================================================= */

const storeSwiper = new Swiper(".store_wrap", {

    slidesPerView: 1.2,
    spaceBetween: 16,
    speed: 600,
    loop: false,
    allowTouchMove: false,

    pagination: {
        el: ".store_pagination",
        clickable: true,
    },

    breakpoints: {

        0: {
            slidesPerView: 1.2,
            spaceBetween: 16,
            centeredSlides: true,
            allowTouchMove: true,
        },

        768: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 22,
            centeredSlides: false,
            allowTouchMove: false,
        }

    }

});