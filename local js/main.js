/*
  BOM [Browser Object Model]
  Local Storage Practice
*/

let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (window.sessionStorage.getItem("color")) {
  // If There Is Color In Local Storage
  // [1] Add Color To Div
  exp.style.backgroundColor = window.sessionStorage.getItem("color");
  // [2] Remove Active Class From All Lis
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // [3] Add Active Class To Current Color
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color);
    // Remove Active Class From all Lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // Add Active Class To Current Element
    e.currentTarget.classList.add("active");
    // Add Current Color To Local Storage
    window.sessionStorage.setItem("color", e.currentTarget.dataset.color);
    // Change Div Background Color
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});