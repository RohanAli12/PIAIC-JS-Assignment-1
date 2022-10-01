var personNames = ['Badar', 'Munim', 'Ammad'];

for (let name of personNames) {
    console.log(name + " i am inviting you for dinner.");
}

console.log(`${personNames[0]}, can't make the dinner.`);

personNames[0] = 'Salman';

console.log("I have found Bigger dinning table so i am inviting three more guests.");

personNames.unshift('Adeel');
let start = 2;
let deleteCount = 0;
personNames.splice(start, deleteCount, 'Sandesh')
personNames.push('Huzaifa');


personNames.forEach(name => {
    console.log(name + " i am inviting you for dinner.");
});

console.log("\nI just found out that my new dinner table won’t arrive in time for the dinner, so i  have space for only two guests.\n");


let removedPerson1 = personNames.pop()
console.log(`Sorry ${removedPerson1}, I can't invite you to dinner`)
let removedPerson2 = personNames.pop()
console.log(`Sorry ${removedPerson2}, I can't invite you to dinner`)
let removedPerson3 = personNames.pop()
console.log(`Sorry ${removedPerson3}, I can't invite you to dinner`)
let removedPerson4 = personNames.pop()
console.log(`Sorry ${removedPerson4}, I can't invite you to dinner`)


personNames.forEach(names => {
    console.log(names + " i am inviting you for dinner.");
})


while (personNames.length > 0) {
    personNames.pop();
}
console.log(personNames);