//1. Dena vo meseci
let month = "February";
let days;

switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
        days = 31;
        break;
    case "April":
    case "June":
    case "September":
    case "November":
        days = 30;
        break;
    case "February":
        days = "28 or 29";
        break;
    default:
        days = "Invalid month";
}

console.log(`Number of days in ${month}: ${days}`);

//2.let grade = 75;
let remark;
let grade=60;

switch (true) {
    case grade >= 90:
        remark = 'A';
        break;
    case grade >= 80:
        remark = 'B';
        break;
    case grade >= 70:
        remark = 'C';
        break;
    case grade >= 60:
        remark = 'D';
        break;
    default:
        remark = 'Fail';
}

console.log(`Your grade is ${remark}`);
//3.Kupuvanje kola
let pari = 200;

switch (pari) {
    case 100:
        console.log("Mozes da kupish Ford");
        break;
    case 200:
        console.log("Mozes da kupish Ferrari");
        break;
    case 300:
        console.log("Lamburgini");
        break;
    default:
        console.log("Nemas pari za kola");
}
//4. soglaski i samoglaski
let letter = 'a';

switch (letter.toLowerCase()) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    console.log('Vowel');
    break;
  default:
    console.log('Consonant');
}
//5. Godishni vreminja
let mesec = 6;
let season;

switch (mesec) {
  case 12:
  case 1:
  case 2:
    season = 'Zima';
    break;
  case 3:
  case 4:
  case 5:
    season = 'Prolet';
    break;
  case 6:
  case 7:
  case 8:
    season = 'Leto';
    break;
  case 9:
  case 10:
  case 11:
    season = 'Esen';
    break;
  default:
    season = 'Pogreshen mesec vnesen';
}

console.log(`The season is ${season}`);


//1.Funkcija 1
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log('Reverse of "Hello":', reverseString('Hello')); 
// 2. Funkcija 2
function stringLength(str) {
    return str.length;
  }
  
  console.log('Dolzina na zborot Makedonija e ":', stringLength('Makedonija'));
// 3. Funkcija 3
function plostinaKrug(radius) {
    return Math.PI * radius * radius;
  }
  
  console.log('Plostina na krug so radius 8 e:', plostinaKrug(8)); 
  // 4. Funkcija 4
  function kvadrat(number) {
    return number ** 2;
  }
  
  console.log('5 na kvadrat e:', kvadrat(5)); 

  function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }
  
  console.log('Capitalized: hello world', capitalizeWords('hello world')); 
// 5. Funkcija 5
function isPerfectSquare(num) {
    return Math.sqrt(num) % 1 === 0;
  }
  
  console.log('Is 25 a perfect square?', isPerfectSquare(25)); 

// Farenhait vo Celzius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
  }
  
  console.log('32F vo Celzius e :', fahrenheitToCelsius(32));

  // Celsius vo Farenhait
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  console.log('0C vo Farenhait e :', celsiusToFahrenheit(0)); 

  // Stapki vo metri
  function feetToMeters(feet) {
    const meters = feet * 0.3048;
    return meters;
  }
  
  console.log('15 stapki vo metri e:', feetToMeters(15)); 

// Niza od gradovi
  let  gradovi = ["Berlin", "Skopje", "Moskva", "Varshava", "Belgrad"];

console.log(gradovi); 

//Niza od drzavi
let drzavi =["Makedonija","Srbija","Albanija","Kosovo","Grcija","Bugarija","Slovenia","Hrvatska","Romanija","Rusija"];
console.log(drzavi);



  
  
  
  
  



