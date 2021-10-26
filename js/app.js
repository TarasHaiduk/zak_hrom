document.addEventListener("DOMContentLoaded", function () {

  const header = document.getElementsByTagName("header")[0];
  const menu = header.getElementsByClassName("menu")[0];
  function showOverlay() {
    header.classList.toggle("overlay");
    menu.classList.toggle("open");
  }

  menu.addEventListener("click", function () {
    showOverlay();
  });

  document.querySelector('.nav').addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() === 'a') {
      showOverlay();
    }
  });
});



// Тип Image - галерея картинок
