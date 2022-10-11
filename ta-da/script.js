const listContainer = document.querySelector('[data-lists]')

let lists = ['name', 'todo']

function render() {
    <li class="list-name">Work</li>
    clearElement(listContainer)
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.classList.add('list-name')
        listElement.innerText = list
    });
}

function clearElement(element) {

}