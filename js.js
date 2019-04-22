var mapOpen = document.querySelector(".button-map");
var map = document.querySelector(".modal-map");
var mapClose = document.querySelector(".map-close");

mapOpen.addEventListener("click", function (evt) {
	evt.preventDefault();
	map.classList.add("modal-show");
})

mapClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	map.classList.remove("modal-show");
})

window.addEventListener ("keydown", function(evt) {
	evt.preventDefault();
	if (evt.keyCode === 27) {
		if (map.classList.contains("modal-show")) {
			map.classList.remove("modal-show")
		}
	}
})

// var slides = document.querySelectorAll('.slide');
// var currentSlide = 0;
// var slideInterval = setInterval(nextSlide,5000);

// function nextSlide(){
// 	slides[currentSlide].className = 'slide';
// 	currentSlide = (currentSlide+1)%slides.length;
// 	slides[currentSlide].className = 'slide showing';
// }

$('.main-hex').slick({
	dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
  });