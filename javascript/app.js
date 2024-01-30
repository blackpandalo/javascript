console.log("hello world");

// variables
// variables are name used to store data in js
// variables declarators var, let, const.
// creating variables 
// declarators name = value
// variable name must not start with number and  any other character except alp A-Z $ and _
// in js  we use camelCase method of naming convention  
var day = "monday";
console.log(day);
const age = 16;
console.log(age);
let isMarried = false
const _date = "29/01/2024";
let $atmPin = 4223;
// let ==badGuy = true; wrong way of creating variable

console.log(isMarried, _date, $atmPin);

// differences between var, let and const
// var can be redecleared and reassigned
var bmi = 23.8;
console.log(bmi);
var bmi = 22.5;
console.log(bmi);

// let  decleartor does not allow redecleartion buhh allows reassiged
let middleName = "panda";
console.log(middleName);

// redeclaring 
// let middleName

// reassigning
 middleName = "col"
 console.log(middleName);


//  const
// const does not allow for re-declartion or re-assignment
const firstName = "tobi"
const surName = "sas"
console.log(firstName, surName);



// data types in js
// - String
// - Number
// - Boolean
// - null/ undefined
// - Arrays
// - Object
// - BigInt
// - Symbol

// string
// are text/data that are stored inside quotation ''/ ""

const cord = 'fgfgfgf'
const sasName = "ggggg"
console.log(cord, sasName);

// Number
const gravity = 9.8
const x = "55"
console.log(gravity, typeof gravity);

console.log(bmi + gravity);
console.log(gravity + x)

console.log(x / gravity);

// boolean true/false 

console.log(isMarried);
const isLoggedIn = true;
if (isLoggedIn) {
    console.log("welcome to my world");
}

// null / undefined 
let food
console.log(food);
 food = null;
 console.log(food);

// array
// array is a collection of items enclosed in a square bracket 
const arr = ["keyboard", 10, false , null, [1,2,3,4]]
console.log(arr);

const fruit = ["mango","pinapple","apple","banana","water-melon"]
console.log(fruit);

// object
// object is a data structure that stores data in key-value pairs e.g key1-vaule1 
{}

const myObj = {
    carbohydrate: "garri",
    protein : "beef",
    fatAndOil : "butter",
    vitamin : "orange",
    water: "water-melon",
    minerals: "sea-food"
}
console.log(myObj);

const panda = {
    firstName: "john",
    lastName: "Doe",
    gender : "male",
    Age: 10000,
    gender : "male",
    // isMarried : javascript,
    skills : null,
    occupation : "fullstack-developer",
    address : {
        city : " ikorodu",
        state : ""
    }
}
console.log(panda);

// Assignment
// from the object above, print to the console the following
// fullname = "jonh doe"
// topSkill = "javascript"
// cityOfResidence = "ikorodu"


const col = {
    fullname : "Jonh Doe",
    topSkill : "javascript",
    cityOfResidence : "ikorodu"
}
console.log(col.fullname);
console.log(col.topSkill);
console.log(col.cityOfResidence);


// correction

const fName = panda.firstName
const lName = panda.lastName
const topSkill = panda.skills
const fullName = fName + " " + lName
console.log("full name:", fullName);
console.log("my top skill is", topSkill);



// string properties and methods
// properties - lenght, index
// string methods-toUpperCase, toLowerCase, concat,split,slice,trim, replace, substring


const sch = "techstudio academy"
const str3 = "my name is "
const fullstatement ="";

// lenght
const strLen = sch.length
console.log(strLen);

// index
console.log("d in 'techstudio' has index of", sch.indexOf("d"));

console.log("character at index 7 is", sch[7]);

//  toUpperCase/toLowerCase

sch.toUpperCase()
console.log(sch.toUpperCase());
console.log(sch.toLowerCase());

// concat
// combination of strings together 
// concatenation of strings
const concatStrings1 =  str3.concat(fullName)
console.log(concatStrings1);

const concatStrings2 = str3 + fullName
console.log(concatStrings2);

// trmplate literial
// use of ``
const tem = `hi there, ${str3} ${fullName}, i am ${age} years old`
console.log(tem);

// split 

console.log(sch.split(""));
console.log(tem.split(","));


// slice(start, end) 0,1,2 etc.
// console.log(tem.slice(0, 30),"....");
const sliceWord = `${tem.slice(0, 30)}....`
console.log(sliceWord);

// substring

const substring1 = tem.substring(0,30)
console.log(substring1);

//operators
// - Arithmetic operator
// -Assignment  operator
// -Comparison  operator
// -Logical    operator

// Arithmetic Operators +, -, *, /, %, ++, --

let y = 20;
let z = -10;
console.log(x, typeof x);
let agg = Number(x) + y - z;

console.log(agg);

// 10 % 6 == 4
// 25 % 4 == 1

console.log(20 % 3);

// -Assignment  operator =, +=, -=, *=, /=
//  are basically use to assign values to variables


let n = 8
console.log(n);
 n += 10
console.log(n);
//  n = -20
 n -= 20
console.log(n);
 n /= 2
console.log(n);
 n *= 2
console.log(n);

const mySiblings = ["fola", "edu", "musa"]
   

console.log(mySiblings);

// logical operator &&, ||, !
const T = true
const F = false
const isAdult = true
// &&
console.log(T && T); //true
console.log(T && F); //false
console.log(F && F); //false
// ||
console.log(T || T); //true
console.log(T || F); //true
console.log(F || F); //false

console.log(age);
console.log(age >= 18);

if (age >= 18 || isAdult && !isMarried) {
    console.log("you can take alcohol");
}

let pwd = "mypassword123#"
if (pwd.length >11 && pwd.includes('#')) {
    console.log("strong passwsord")
} else {
    console.log("your password is not strong enough");
}

// comparism operator ==, ===, !=, !==, <, >, <=, >=
// loose comparison: compares the value of the variables and not data types.
console.log(x); //55
let newNum = 55

console.log(x == newNum);

// strict comparison: compares the value of the variables and their data types
console.log(x === newNum);

// math method: floor, ceil, random, min, max

// math.floor
let num1 = 9.64577
Math.floor(num1)
console.log(Math.floor(num1));


// math.ceil() round up to the nearest number regardless of the decimal parts

console.log(Math.ceil(num1));

// random

Math.random()
console.log(Math.random()*1000000);

const ranNum = Math.random() * 1000000
const OTP = Math.floor(ranNum)

console.log(`enter your secret code" ${OTP} to contine `);

const dice = Math.random() * 6
const d = Math.ceil(dice)

console.log(d);









