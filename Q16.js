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