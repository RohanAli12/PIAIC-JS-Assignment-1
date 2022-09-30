var personNames = ['Badar', 'Munim', 'Ammad'];

for (let name of personNames) {
    console.log(name + " i am inviting you for dinner.");
}

console.log(`${personNames[0]}, can't make the dinner.`);

personNames[0] = 'Salman';

for (let name of personNames) {
    console.log(name + " i am inviting you for dinner.");
}