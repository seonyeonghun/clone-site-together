let isHit = false;
window.addEventListener("DOMContentLoaded", function () {
  // HTML을 완전히 불러온 뒤 아래 메소드를 호출하는 이벤트
  modal();
  gnb();
  // mainNav();
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

function sub_bg() {
  const header = document.querySelector("header");
  const div = document.createElement("div");
  div.className = "gnb_bg";
  header.appendChild(div);
}

function gnb(hit, gnb_sub) {
  const GNB = document.querySelector("#gnb");
}
function gnbShow() {
  const lnbAll = document.querySelectorAll(".lnb");
  lnbAll.forEach(function (i) {
    lnbAll[i].classList.add = "d-block";
  });
}
