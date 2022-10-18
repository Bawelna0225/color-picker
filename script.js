const cardsContainer = document.querySelector('.container')
const snackbar = document.querySelector('.snackbar')
const navbar = document.querySelector('.navbar')
const generateColors = document.querySelector('.generate-colors')

const createCards = (amount) => {
	for (let i = 0; i < amount; i++) {
		newDiv = document.createElement('div')
		newDiv.classList.add('card')
		cardsContainer.appendChild(newDiv)
	}
}
createCards(30)

const setCardBackground = () => {
	const cards = document.querySelectorAll('.card')
	cards.forEach((card) => {
		randomColor = Math.floor(Math.random() * 0xffffff).toString(16)
		card.style.backgroundColor = `#${randomColor}`
		card.innerHTML = `<span data-color='${randomColor}'>#${randomColor}</span>`

		card.addEventListener('click', (e) => {
			let currentColor = e.target.querySelector('span').getAttribute('data-color')
			navigator.clipboard.writeText(`#${currentColor}`)
			snackbar.classList.add('active')
			setTimeout(() => {
				snackbar.classList.remove('active')
			}, 1500)
		})
	})
}
setCardBackground()

document.addEventListener('scroll', () => {
	if (scrollY > 100) {
		navbar.classList.add('active')
	} else {
		navbar.classList.remove('active')
	}
})

generateColors.addEventListener('click', () => {
	setCardBackground()
})
