var personName = "Rohan ali";

console.log(`${personName}`.toUpperCase());
console.log(`${personName}`.toLowerCase());

const myName = "My name is syEd rohan ali."

function titleCase(name) {
    return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}
console.log(titleCase(myName));