let places = ['Mecca', 'Madina', 'Dubai', 'America', 'Naran'];
let sortingAlp = places.slice().sort();
let sortingRev = places.slice().sort().reverse();

let reverse = places.slice().reverse();
let reverse2 = places.slice().reverse().slice().reverse();

console.log(places); //1
console.log(sortingAlp); //2
console.log(places); //3

console.log(sortingRev); //4
console.log(places); //5

console.log(reverse); //6
console.log(reverse2); //7
// console.log(places);
console.log(reverse2.sort());
console.log(reverse2.sort().reverse());