// 1. Zadaca pozitiven ili negativen broj
var num=10
if (num > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is non-positive.");
}
// 1.Zadaca najgolem broj od 3
var num1=10
var num2=20
var num3=30
if (num1 >= num2 && num1 >= num3) {
    console.log("The largest number is " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("The largest number is " + num2);
} else {
    console.log("The largest number is " + num3);
}
// 3. Zadaca leap year
let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}
//4. Zadaca vowel or constant
let character = 'e';

if (
    character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u'
) {
    console.log("The character is a vowel");
} else {
    console.log("The character is a consonant");
}
//5. Zadaca prazen strgin poln string
let text = '';

if (text === '') {
    console.log("The string is empty");
} else {
    console.log("The string is not empty");
}
// 6. Zadaca popust
let age = 65;
let discount = '';

if (age < 6 || age >= 65) {
    discount = 'eligible';
} else {
    discount = 'not eligible';
}

console.log("You are " + discount + " for discounted tickets");
// 7. Zadaca dali leap year ima 366 dena
let year1 = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year");
    console.log(year + " has 366 days");
} else {
    console.log(year + " is not a leap year");
    console.log(year + " has 365 days");
}
// 8. Zadaca odredi vozilo
let wheels = 2;
let vehicleType = '';

if (wheels === 4) {
    vehicleType = 'car';
} else if (wheels === 2) {
    vehicleType = 'bike';
} else if (wheels === 18) {
    vehicleType = 'truck';
} else {
    vehicleType = 'unknown';
}

console.log("This vehicle is a " + vehicleType)
// 9. Zadaca dali mozes da kupish

let money = 500;
let ford = 300;
let ferrari = 1000;

if(money >= ford)
{
    console.log("You can buy Ford")
}
else{
    console.log("You cant buy ford")
}
if (money>= ferrari){
    console.log("You can buy ferrari")
}
else{
console.log("You cant buy ferrari")
}
// 10. Zadaca range na broj
let number = 37;
let lowerLimit = 20;
let upperLimit = 50;

if (number >= lowerLimit && number <= upperLimit) {
    console.log(number + " is within the range of " + lowerLimit + " and " + upperLimit)
} else {
    console.log(number + " is outside the specified range")
}

a=1;
b=2;
c=3;
d=4;
e=5;
f=6;
g=7;
console.log(g-f-e-a-b-c-d)
console.log(a+b+c+d+e+f+g)
console.log((f-a)*(b+e)*(c+d)*e)
console.log(f-d/a+b/g*e*c)
console.log((b\a)*d/c-f*g+e)
