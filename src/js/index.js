const BtnToggle = document.querySelector(".toggle-menu");
const toggleMenu = document.querySelector(".nav-menu");
BtnToggle.addEventListener("click", (e) => {
	BtnToggle.classList.toggle("active-toggle");
	toggleMenu.classList.toggle("active-menu");
});
// toggleMenu.addEventListener("clikc", () => {
// 	toggleMenu.classList.toggle("active-menu");
// });
