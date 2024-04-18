const menuBtn = document.querySelector(".container_ul_to_nav i");
const navList = document.querySelector(".container_ul_to_nav ul");
const navItems = document.querySelectorAll(".container_li_to_ul_nav li");

menuBtn.addEventListener("click", function () {
  navList.classList.toggle("show");
});

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Aquí puedes agregar la lógica que desees al hacer clic en un elemento <li>
    // Por ejemplo, podrías redirigir a una página o realizar alguna otra acción
    console.log("Elemento clicado:", item.textContent);
  });
});
