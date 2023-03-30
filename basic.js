"use strict";

const container = document.querySelector(".grid-container");
const leftCont = document.querySelector(".col1");
const rightCont = document.querySelector(".col2");

leftCont.addEventListener("mouseover", function () {
  leftCont.classList.add("flexGrow");
  rightCont.classList.remove("flexGrow");
});

leftCont.addEventListener("mouseout", function () {
  leftCont.classList.remove("flexGrow");
  rightCont.classList.add("flexGrow");
});
// container.addEventListener("mouseover", function (e) {
//   if (e.target.classList.contains("grid-items")) {
//     e.target.classList.add("flexGrow");
//   }
// });

// container.addEventListener("mouseout", function (e) {
//   if (e.target.classList.contains("grid-items")) {
//     e.target.classList.remove("flexGrow");
//   }
// });
