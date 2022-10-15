const prevButton = document.querySelector('[data-prev]')
const nextButton = document.querySelector('[data-next]')
const items = document.querySelector('[data-items]')

const itemWidth = 150
const padding = 10

prevButton.addEventListener('click', () => {
	items.scrollLeft -= itemWidth + padding
})

nextButton.addEventListener('click', () => {
	items.scrollLeft += itemWidth + padding
})