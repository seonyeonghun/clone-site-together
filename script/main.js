let isHit = false;
window.addEventListener("DOMContentLoaded", function () {
  // HTML을 완전히 불러온 뒤 아래 메소드를 호출하는 이벤트
  modal();
  mainNav();
  // carousel();
});

function modal() {
  /* opener, closer */
  const OPENER = document.querySelector("#opener");
  const CLOSER = document.querySelector("#closer");
  const MODAL = document.querySelector("#modal");
  OPENER.addEventListener("click", function () {
    MODAL.classList.remove("d-none");
  });
  CLOSER.addEventListener("click", function () {
    MODAL.classList.add("d-none");
  });
}

function mainNav() {
  const headerNav = document.querySelector(".header-nav");
  const headerBg = document.querySelector(".header-bg");
  headerNav.addEventListener("mouseenter", function () {
    const subNav = document.querySelectorAll(".lnb");
    !isHit ? show(headerBg) : null;
    subNav.forEach(function (item) {
      item.classList.remove("d-none");
    });
  });
  headerBg.addEventListener("mouseleave", function () {
    isHit ? hide(headerBg) : null;
  });
}
/**
 * 내비게이션 배경을 동적으로 추가하는 함수
 */
function show(target) {
  target.classList.remove("d-none");
  isHit = true;
}
function hide(target) {
  const subNav = document.querySelectorAll(".lnb");
  target.classList.add("d-none");
  subNav.forEach(function (item) {
    item.classList.add("d-none");
  });
  isHit = false;
}
