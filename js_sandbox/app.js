// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// // Conver HTML Collection into array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

// document.querySelectorAll
const items = document.querySelectorAll("ul.collection li.collection-item");

items.forEach(function (item, index) {
  item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach(function (li, index) {
  li.style.background = "#ccc";
});

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "#f4f4f4";
}

console.log(items);

// Create element
const li = document.createElement("li");

// Add class
li.className = "collection-item";

// Add id
li.id = "new-item";

// Add attribute
li.setAttribute("title", "New Item");

// Create text node and append
li.appendChild(document.createTextNode("Hello World"));

// Create new link element
const link = document.createElement("a");
// Add classes
link.className = "delete-item secondary-content";
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector("ul.collection").appendChild(li);

console.log(li);

// replace elemnets

// craete element

const newHeading = document.createElement("h2");
newHeading.id = "task-title";

// add new text node
newHeading.appendChild(document.createTextNode("Task List"));
//newHeading.textContent = 'Task List'

// get the old heading
const oldHeading = document.getElementById("task-title");

//parent
const cardAction = document.querySelector(".card-action");

//replace

cardAction.replaceChild(newHeading, oldHeading);

// Remove element
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

lis[0].remove();

// or remove by child
list.removeChild(lis[3]);

// classes and attributes
// const firstLi = document.querySelector("li:first-child");
// const linked = firstLi.children[0];

// let val;
// val = linked.className;
// val = linked.classList;
// val = linked.classList[0];
// linked.classList.add("test");
// linked.classList.remove("test");
// val = linked;

// //attritibutes

// val = linked.getAttribute("href");
// val = linked.setAttribute("href", "http://google.com");
// linked.setAttribute("title", "Google");
// //check if there is anattribute
// val = linked.hasAttribute("href");

// //remove attribute
// linked.removeAttribute("title");

// console.log(val);

// add events

document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
  //console.log("clicked");
  let val
  val = e.target
  val = e.target.id
  val = e.target.className
  val = e.target.classList

  //event type
  val = e.type

  //timestamp
  val = e.timeStamp

  // coords event rleative to the window
  val = e.clientY
  val = e.clientX


  // coords event rleative to the element
  val = e.offsetY
  val = e.offsetX



  console.log(val)
}

const clearBtn = document.querySelector('.clear-tasks')
const card = document.querySelector('.card')
const heading = document.querySelector('h5')

// click
//clearBtn.addEventListener('click', runEvent)

//double click
//clearBtn.addEventListener('dblclick', runEvent)

//mouse down
//clearBtn.addEventListener('mousedown', runEvent)

//mouse down
//clearBtn.addEventListener('mouseup', runEvent)

//mouseenter
card.addEventListener('mouseenter', runEvent)


// Event Handler

function runEvent(e) {
  console.log(`Event TYPE : ${e.type}`)
}



