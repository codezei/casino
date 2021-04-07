// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	function start () {
		let ratingValues = document.querySelectorAll('.rating__stars')

		ratingValues.forEach(function(rating) {
			let value = +rating.dataset.rating
			let countStar = (value*5) / 10
			let remainStar = countStar - Math.floor(countStar)
			let offsetStar = remainStar * 100 + '%'
			console.log(offsetStar)
			console.log(remainStar)
			let stars = rating.querySelectorAll('.rating__star')
			stars.forEach(function(star, indexStar) {
				if (indexStar + 1 <= countStar) {
					star.classList.add('full')
				} else {
					
					star.style.backgroundImage = `linear-gradient(90deg, rgb(255, 220, 100) ${offsetStar}, rgb(228, 225, 237) ${offsetStar})`

				}
			})
		})
	}
	start ()
})
