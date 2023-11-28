// Sortiranje na gradovite
var gradovi = [
{name:"Berlin",popupaltion:50300400},
{name:"Bejing",popupaltion:120030000},
{name:"Belgrade",popupaltion:33024500},
{name:"Athena",popupaltion:23045000},
{name:"Rio",popupaltion:55000000},
{name:"Mexico city",popupaltion:45030000},
{name:"Alexandria",popupaltion:22900000},
];
gradovi.sort((a,b)=>b.popupaltion - a.popupaltion)
console.log(gradovi);
// Trite najgolemi gradovi
let triNajgolemiGradovi = gradovi.slice(0, 3);
console.log(triNajgolemiGradovi);
// Site gradovi sto pocnuvaat na A i sto imaat nad 1M ziteli
let gradA = gradovi.find(gradovi => gradovi.name.startsWith('A') && gradovi.popupaltion > 1000000);
console.log(gradA);
// Sredna populacija
let celaPopulacija = gradovi.reduce((sum, gradovi) => sum + gradovi.popupaltion, 0);

let srednaPopulacija = celaPopulacija / gradovi.length;

console.log("sredna populacija e:", srednaPopulacija);
