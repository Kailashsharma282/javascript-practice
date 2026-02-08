let score = 33;

console.log(typeof score); // number
console.log(typeof(score)); // another way to check type, still number

score = String(score); // converting number to string

console.log(typeof score); // string

let valInNumber = Number(score); // converting string back to number

console.log(typeof valInNumber); // number

score = "33abc";
let valInNumber2 = Number(score); // converting string to number, but since it's not a pure number, it will return NaN (Not a Number)
console.log(typeof valInNumber2); // number, because NaN is of type number
console.log(valInNumber2);

score = null;
let valInNumber3 = Number(score); // converting null to number will return 0
console.log(typeof valInNumber3); // number
console.log(valInNumber3);

score = undefined;
let valInNumber4 = Number(score); // converting undefined to number will return NaN
console.log(typeof valInNumber4); // number, because NaN is of type number
console.log(valInNumber4);

let isLoggedIn = 1;
let valInNumber5 = Boolean(isLoggedIn); // converting boolean to number, true will be 1 and false will be 0
console.log(typeof valInNumber5); // number, because 1 is of type number
console.log(valInNumber5);
