const strings = ["a", "b", "c", "d", "e"];

//push
strings.push("e"); //add items at the end of the array

// pop  remove items at the end of the array
strings.pop();

// unshift   add items at the begining of the array
strings.unshift("x");

//splice add items
strings.splice(2, 0, "alien");
console.log(strings);

// build an array
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("Hi");
newArray.push("you");
newArray.push("!");
newArray.pop();
console.log(newArray);
