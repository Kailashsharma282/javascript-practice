"use strict"; // treat all JS code as modern version

// alert(3+3); // we are using nodejs not browser, so alert will not work

// Window.alert(3+3); // this will also not work in nodejs environment

let Name = "Kailash Sharma"; // string data type
let age = 22; // number data type
let isLoggedIn = false; // boolean data type
let state; // undefined data type
let nullValue = null; // null data type

/*
NUMBER => 2 to power 53;
bigint 
string => ""
boolean => true/false
undefined => variable declared but not assigned a value
null => explicitly assigned no value
symbol => unique identifier
*/

console.log(typeof Name) // string
console.log(typeof null) // object
console.log(typeof undefined) // undefined