let current_user = ['munim', 'ammad', 'badar', 'hamza', 'ali']
let new_user = ['munim', 'salman', 'affan', 'shazil', 'huzaifa']
let x = 0

for (let i = 0; i < new_user.length; i++) {

    if (current_user[i] == new_user[i]) {

        console.log(i + " Username exist, try another username");

    } else {
        console.log(i + " Username  available");
    }

}