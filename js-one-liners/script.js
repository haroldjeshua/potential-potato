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
    "workout for an hour",
    "list.ingredient"
]

const domains = [
    "harv.io",
    "haroldvarde.com",
    "mattersmost.com",
    "sangk.app",
    "list.ingredient"
]

// default
const mergedArrays = [...todos, ...domains]
console.log(mergedArrays)

// to avoid duplicates
const mergedArrays1 = [...new Set([...todos, ...domains])]

// merged output
mergedArrays1.forEach((todo) => {
    const el = document.createElement('li')
    const content = document.createTextNode(todo)
    el.appendChild(content)
    sampleList.appendChild(el)
})


// extract from object
const person = {
    age: 26,
    posts: 128,
    socials:  [
        'facebook.com/person',
        'twitter.com/person',
        'instagram.com/person',
    ]
}

const { age, posts, socials: [harold, jeshua] } = person;
console.log(harold)


// Generate Color
// 0x - write hex in machine code
// 16 - base of hex
const sampleBackground = Math.floor(Math.random() * 0xffffff).toString(16)
console.log(sampleBackground)
document.body.style.backgroundColor = `#${sampleBackground}`

