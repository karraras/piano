let pianoKeys = document.querySelectorAll(".piano-keys .key");
let pianospan = document.querySelectorAll(".piano-keys span");
let checked = document.querySelector(".keys-checkbox input");
pianoKeys.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    e.target.classList.add("click");
    document.querySelector(`#${e.target.dataset.key}`).play();

    setTimeout(() => {
      e.target.classList.remove("click");
    }, 100);
  });
});
window.onclick = function () {
  if (document.querySelector("input:checked")) {
    pianospan.forEach((ele) => {
      ele.style.opacity = 0;
    });
  } else {
    pianospan.forEach((ele) => {
      ele.style.opacity = 1;
    });
  }
};
