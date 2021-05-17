const ul = document.querySelector('.list-item')

// create element

const li = document.createElement('li')

//add class

li.className = 'collection-item'
//add id

li.id = 'new-item'

// add attribute
li.setAttribute('type', 'New item')
//add color
li.style.color = 'green'

// create text node and append
li.appendChild(document.createTextNode('Hello world'))
//li.textContent=  'hello world'

// create new link element
const link = document.createElement('a')
link.className = 'delete-item'

// add icon html
link.innerHTML = '<li class= "fa fa-remove></li>'

//append link in to li
li.appendChild(link)

// append li as child to ul
ul.appendChild(li)
console.log(li)