
// scroll effect 
window.addEventListener('scroll', () => {
	let scrollY = window.scrollY;
	let scroll_down = document.getElementById("scroll-container");
	// var profile = document.getElementById("profile-1");
	// var header = document.getElementById("header");
	// var p_header = document.getElementById("p-header");
	let nav = document.getElementById("nav-bar");

	if (scrollY > 0) {
		scroll_down.style = "display: none;";
		nav.style = "background: #FFFFFF;";
	} else {
		scroll_down.style = "display: block;";
		nav.style = "background: transparent;";
	}
})
