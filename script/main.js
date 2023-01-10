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
  const headerNAV = document.querySelector(".header-nav");
  headerNAV.addEventListener("mouseenter", function(){
    addNavBg();
  });
  // headerNAV.addEventListener("mouseleave", function(){
  //   removeNavBg();
  // });
}
/**
 * 내비게이션 배경을 동적으로 추가하는 함수
 */
function addNavBg() {
  const HEADER = document.querySelector("header");
  const UL = document.querySelectorAll(".lnb");
  const div = document.createElement("div");
  div.className = "header_bg";
  HEADER.appendChild(div);
  UL.forEach(function(item) {
    // item.classList.add = "d-block";
    console.log(item);
  })
}
