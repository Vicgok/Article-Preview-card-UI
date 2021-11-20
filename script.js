"use strict";

const shareBtn = document.querySelector(".profile-block .btn-share");
const shareOverlay = document.querySelector(".slide-up-section");

shareBtn.addEventListener("click", () => {
  shareOverlay.classList.toggle("active");

  shareBtn.classList.toggle("active");
});
