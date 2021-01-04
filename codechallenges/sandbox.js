const { array } = require("prop-types");

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

// create a function that reverses a string
function reverse(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  } else {
    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; (i = 0); i--) {
      backwards.push(str[i]);
    }
    return backwards.join("");
  }
}
console.log(reverse("Hi my name is Yvette"));

//sol2
function reverse2(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  } else {
    return str.split("").reverse().join("");
  }
}
console.log(reverse2("i am bold"));

//merge sorted arrays([0,3,4,31], [4,6,30])
//[0,3,4,4,6,30,31]

function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  // check input
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }
  while (array1item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1item = array1[i];
      i++;
    } else {
      mergedArray.push(array2item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

// given an integer, return an integer that is the reverse ordering of numbers

function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");

  return parseInt(reversed * Math.sign(n));
}
console.log(reverseInt(245));

// given a string, return the character that is most commonly used in a string e.g max Char("abccccdc")=== 'c

function maxChar(str) {
    //convet the string to an object 
  const charMap = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
      //if we have the entry, we increment it by 1
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar
}

console.log(maxChar("helloworld"));
