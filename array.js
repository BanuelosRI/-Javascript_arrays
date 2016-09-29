//Day 3 Javascript - Array Challenge

//Purpose: Create an array with five decimal numbers, and use it for the following:
//Signature: [inter, interger, interger]--> [interger]
// Example: highestNumber([1,4,2]) should return 4
// highestNumber([-1,-2,-4]) should return -1

// Create a function that finds the highest number.

var a = [1.5, 1.0, 2.5, 4.5, 4.0];
var max = 0;

function highestNumber(arr){
  arr.forEach(function(element){
    if (element > max) {
      max = element
    }
  });
    console.log(max);
};

//Create a function that finds the lowest number.
var a = [1.5, 2.5, 4.5, 4.0, 1.01];
var min = 10;
// the var is named "min" because we need a larger
// number to find the lowest in the array. the value of the var will be higher than any in the array. ANything under the value of the var.

function lowestNumber(arr){
  arr.forEach(function(element){
    if (element < min) {
      min = element
    }
  });
    console.log(min);
};


//Create a function that finds the smallest number (the closest to zero).
var a = [1.5, 2.5, 4.5, 4.0, 1.01, 0.001, -1];
var min = 0.5;

function smallestNumber(arr){
  arr.forEach(function(element){
    if (element < min) {
      min = element
    }
  });
    console.log(min);
};

//Create a function that calculate the sum.

// purpose: take all the elements in an array and add them up. If there are no elements, return empty.
// The for loop should take the first index and add it to the next.
var b = [1, 2, 3];

function calculate(x){
  var sum = 0;
  x.forEach(function(element) {
    sum = element + sum;
});
console.log(sum);

};

// calculate the mean value

// add all the elements in the array and divide by the number of elements.
// fist add all the elements, then store the number.
// Then do a .length, then divide .length value by stored element number

var b = [1, 2, 3];
var divide = b.length;

function calculate(x){
  var sum = 0;
  x.forEach(function(element) {
    sum = element + sum;
});
console.log(sum / divide);

};

// Create a function that finds the index of the highest number.
var c = [1, 4, 2];
var max = 0;

function highestNumber(x){
  var i;
  x.forEach(function(element, index){
    if (element > max){
    max = element;
    i = index;
    }
  });
  console.log("The highest number: " + max + " is at index: " + i);
};


//Array of strings
var s = ["Elsita", "Baldy", "Cari", "Didi", "Dan"];
var p = ["Elsa", "Rodolfo", "Larry", "Zeny"];

s.sort();

//Sort your parents names in reverse alphabetical order.

var y = p.sort();
y.reverse();

// Sort all the names in alphabetical order.

var all = s.concat(p);
all.sort();

// Sort all the names in reverse alphabetical order.

var all = s.concat(p);
all.sort();
all.reverse();

// Create a function that determines if a given name is amongst the names.
function doesIt(x){
  var search;
var all = ["Elsita", "Baldy", "Cari", "Didi", "Dan","Elsa", "Rodolfo", "Larry", "Zeny"];
all.forEach(function (element){
    if(all.includes(x)){
      search = true
    }else{
      search = false
    }
  });
  console.log(search);
};
