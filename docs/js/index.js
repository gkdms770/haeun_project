// 사이즈 980 이상인 경우 모바일 사이드 바 active 제거 함수
function resonsiveWidth() {
  let win_w = $(this).width();
  let timer = null;
  let sec = 10;

  $(window).on("resize", function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      if (win_w > 980) {
        $("#header .gnb_wrap").removeClass("active");
      }
    }, sec);
  });
}

// 모바일 버튼 클릭 시 모바일 사이드 나옴
function ToggleMenu_init() {
  $("#header .toggle").click(function () {
    let menuSlideBar = $("#header .gnb_wrap");

    if (menuSlideBar.hasClass("active")) {
      menuSlideBar.removeClass("active");
    } else {
      menuSlideBar.addClass("active");
    }
  });
}

// 스와이퍼 적용
// visual swiper 적용
var swiper_1 = new Swiper('#visual .swiper', {
  loop: true,
  speed : 500,
  pagination: {
    el: '#visual .swiper-pagination',
  },
  navigation: {
    nextEl: '#visual .swiper-button-next',
    prevEl: '#visual .swiper-button-prev',
  },
});

// best item swiper 적용
function BestItemSwiper__init() {
  let swiper = new Swiper("#best_item .swiper", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 5,
    speed: 1000,
    navigation: {
      nextEl: "#best_item .swiper-button__btn-right",
      prevEl: "#best_item .swiper-button__btn-left",
    },
    breakpoints : {

          300 : {
                slidesPerView: 2,
            },

          480 : {
                slidesPerView: 2,
            },

            640 : {
                slidesPerView: 2,
            },
            768:{
                slidesPerView: 3,
            },
            980:{
                slidesPerView: 4,
            },

        },

  });
}

BestItemSwiper__init();

resonsiveWidth();
ToggleMenu_init();
