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
