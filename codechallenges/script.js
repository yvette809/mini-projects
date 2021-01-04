// 1. function tht reverse a number

const reverseNumber = (n) => {
  // convert the number to string first
  n = n.toString();
  return n.split("").reverse().join("");
};
console.log(reverseNumber(267));

// 2. function that checks if string is a palindrom
function palindrome(str) {
  // first of all remove all alpha numeric characters
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, "");
  //turn the string in to an array by using the split("") method and use join() to joing the array back to string
  var reverseStr = lowRegStr.split("").reverse().join("");
  return reverseStr === lowRegStr;
}
console.log(palindrome("A man, a plan, a canal. Panama"));

//3 function that generates alll combinations of a string
var today = new Date();
var day = today.getDay();
console.log("DAY", day);
var daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("Today is : " + daylist[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = hour >= 12 ? " PM " : " AM ";
hour = hour >= 12 ? hour - 12 : hour;
if (hour === 0 && prepand === " PM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = " Noon";
  } else {
    hour = 12;
    prepand = " PM";
  }
}
if (hour === 0 && prepand === " AM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = " Midnight";
  } else {
    hour = 12;
    prepand = " AM";
  }
}
console.log(
  "Current Time : " + hour + prepand + " : " + minute + " : " + second
);

//4. Write a JavaScript program to get the current date.  Go to the editor
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
let today1 = new Date();
const dd = today1.getDate();
console.log("t", dd);
const mm = today.getMonth() + 1;
console.log("MONTH", mm);
const yyyy = today.getFullYear();
console.log("YEAR", yyyy);
dd < 10 ? "0" + dd : dd;
mm < 10 ? "0" + mm : mm;

today1 = mm + "-" + dd + "-" + yyyy;
console.log("today1", today1);
today1 = mm + "/" + dd + "/" + yyyy;
console.log("today1", today1);
today1 = dd + "-" + mm + "-" + yyyy;
console.log("today1", today1);
today1 = mm + "+" + dd + "+" + yyyy;
console.log("today1", today1);

//Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front
function animate_string(id) {
  var element = document.getElementById(id);
  var textNode = element.childNodes[0]; // assuming no other children
  var text = textNode.data;

  setInterval(function () {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;
  }, 100);
}

// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050
for (var year = 2014; year <= 2050; year++) {
  var d = new Date(year, 0, 1);
  if (d.getDay() === 0) console.log("1st January is being a Sunday  " + year);
}

// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched

const num = Math.ceil(Math.random() * 10);
console.log(num);
const gnum = prompt("Guess the number between 1 and 10 inclusive");
if (gnum == num) console.log("Matched");
else console.log("Not matched, the number was " + gnum);

// write  javascript program to calculate days left until next christmas
today = new Date();
var cmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() > 25) {
  cmas.setFullYear(cmas.getFullYear() + 1);
}
var one_day = 1000 * 60 * 60 * 24;
console.log(
  Math.ceil((cmas.getTime() - today.getTime()) / one_day) +
    " days left until Christmas!"
);

// write a javascript program to get the extension of a filename
let filename = "system.php";
console.log(filename.split(".").pop());
filename = "abc.js";
console.log("FILENAME", filename.split(".").pop());

// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference
const absDiff = (num) => {
  let diff = num - 13;
  if (num > 13) {
    return Math.abs(diff) * 2;
  } else {
    return num - 14;
  }
};

console.log("ABS", absDiff(32));

//method 2 using tenary
function difference(n) {
  return n > 13 ? (n - 13) * 2 : 13 - n;
}
console.log(difference(7));
console.log(difference(32));

// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum

const sumOfNumbers = (int1, int2) => {
  if (int1 === int2) {
    const sum = int1 + int2;
    return 3 * sum;
  } else {
    return sum;
  }
};

console.log(sumOfNumbers(4, 4));

//  Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50

function checkNums(x, y) {
  if (x == 50 || y == 50 || x + y == 50) {
    return true;
  }
  return false;
}

console.log(checkNums(50, 4));
console.log(checkNums(10, 4));

// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400
function twenty(x) {
  if (Math.abs(100 - x) <= 20 || Math.abs(400 - x) <= 20) {
    return true;
  } else {
    return false;
  }
}
console.log(twenty(10));
console.log(twenty(90));

// Write a JavaScript program to check from two given integers, whether one is positive and another one is negative
const checkInt = (int1, int2) => {
  if (int1 < 0 && int2 > 0) {
    console.log(int2 + " " + "is positive");
  } else if (int1 > 0 && int2 < 0) {
    console.log(int1 + "is positive");
  } else if (int1 > 0 && int2 > 0) {
    console.log("both numbers are positive");
  } else {
    console.log("non of the numbers are positive");
  }
};
console.log(checkInt(-1, -6));

// solution 2
function positive_negative(x, y) {
  if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(positive_negative(2, 2));
console.log(positive_negative(-2, 2));
console.log(positive_negative(2, -2));
console.log(positive_negative(-2, -2));

//  Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string

function checkPy(str) {
  if (str.substring(0, 2) === "py") {
    return str;
  } else {
    return `py${str}`;
  }
}
console.log(checkPy("python"));
console.log(checkPy("roam"));
//2

function checkPy(str) {
  return str.substring(0, 2) === "py" ? str : `py${str}`;
}
checkPy("thing");

// Write a JavaScript program to remove a character at the specified position of a given string and return the new string
function remove_character(str, char_pos) {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return part1 + part2;
}

console.log(remove_character("Python", 0));
console.log(remove_character("Python", 3));
console.log(remove_character("Python", 5));

//  Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1

function first_last(str1) {
  if (str1.length <= 1) {
    return str1;
  }
  let first = str1.charAt(0),
    last = str1.charAt(str1.length - 1);
  middle = str1.substring(1, str1.length - 1);
  return last + middle + first;
  // mid_char = str1.substring(1, str1.length - 1);
  // return str1.charAt(str1.length - 1) + mid_char + str1.charAt(0);
}
console.log(first_last("a"));
console.log(first_last("ab"));
console.log(first_last("abc"));

// Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back

function newStr(str) {
  const firstChar = str.charAt(0);
  const expectedStr = firstChar + str + firstChar;
  return expectedStr;
}
console.log(newStr("Nice"));
console.log(newStr("Eliora"));

//sol2
function front_back(str) {
  first = str.substring(0, 1);
  return first + str + first;
}
console.log(front_back("abc"));

// Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7
function test37(x) {
  if (x % 3 == 0 || x % 7 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(test37(12));
console.log(test37(14));
console.log(test37(10));
console.log(test37(11));

// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more

function threeStr(str) {
  if (str.length >= 3) {
    var str2 = str.substring(str.length - 3);
    return (str = `${str2}${str}${str2}`);
  } else {
    return str;
  }
}

console.log(threeStr("goat"));
console.log(threeStr("got"));
console.log(threeStr("go"));

// Write a JavaScript program to check whether a string starts with 'Java' and false otherwise

function java(str) {
  if (str.slice(0, 4) == "java") {
    return true;
  } else {
    return false;
  }
}

console.log(java("javascript"));
console.log(java("python"));

// log all pairs of arrays

const numb = [1, 2, 3, 4, 5, 6];

const arrayPairs = () => {
  for (let i = 0; i < numb.length; i++) {
    for (let j = 0; j < numb.length; j++) {
      console.log(numb[i], numb[j]);
    }
  }
};
arrayPairs();

//given 2 arrayPairs, create a functiom that let a user know(true/false) whether these two arrays contain any common items
//sol1
const array1 = ["a", "b", "c", "d", "x"];
const array2 = ["z", "y", "i", "d", "x"];

const containsCommonItem = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
};

console.log(containsCommonItem(array1, array2));

//sol2
function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array

  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[array1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  // loop through second array and check if item in second array exists on created object
  for (let j = 0; j < arr2.length; j++) {
    if (map[array2[j]]) {
      return true;
    }
  }
  return false;
}
console.log(containsCommonItem2(array1, array2));

// sol3
function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}
console.log(containsCommonItem3(array1, array2));
