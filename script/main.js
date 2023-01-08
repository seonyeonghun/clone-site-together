window.addEventListener("DOMContentLoaded", function () {
  // HTML을 완전히 불러온 뒤 아래 메소드를 호출하는 이벤트
  modal();
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
