const list = document.querySelector('ul')
const cardCount = 64

const createCard = () => {
    const listItem = document.createElement('li')
    const card = document.createElement('div')
    card.className = 'card'
    listItem.appendChild(card)
    list.appendChild(listItem)
}

Array(cardCount).fill().forEach(() => createCard())
const cards = document.querySelectorAll('li')

const handleIntersection = entries => {
    for (const entry of entries) {
        entry.target.style.setProperty('--shown', entry.isIntersecting ? 1 : 0)
    }
}

const observer = new IntersectionObserver(handleIntersection)
cards.forEach(card => observer.observe(card))