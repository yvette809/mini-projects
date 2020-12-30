// 1. function tht reverse a number

const reverseNumber = (n)=>{
    // convert the number to string first
    n = n.toString()
    return n.split("").reverse().join("")

}
console.log(reverseNumber(267))

// 2. function that checks if string is a palindrom
function palindrome(str) {
    // first of all remove all alpha numeric characters
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    //turn the string in to an array by using the split("") method and use join() to joing the array back to string
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  console.log(palindrome("A man, a plan, a canal. Panama"));


  //3 function that generates alll combinations of a string
  var today = new Date();
  var day = today.getDay();
  console.log("DAY", day)
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);

