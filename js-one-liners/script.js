// design mode
document.designMode = 'on'


// rng
const text = document.querySelector('.sample-text')

text.textContent = Math.random() >= 0.5


// merging array, modern
const sampleList = document.querySelector('.sample-list')

const todos = [
    "buy groceries",
    "go to the beach",
    "workout for an hour"
]

const domains = [
    "harv.io",
    "haroldvarde.com",
    "mattersmost.com",
    "sangk.app"
]

const mergedArrays = [...todos, ...domains]
console.log(mergedArrays)

todos.forEach((todo) => {
    const el = document.createElement('li')
    const content = document.createTextNode(todo)
    el.appendChild(content)
    sampleList.appendChild(el)
})