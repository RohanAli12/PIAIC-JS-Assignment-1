let current_user = ['munim', 'ammad', 'badar', 'hamza', 'ali']
let new_user = ['salman', 'affan', 'munim', 'shazil', 'huzaifa']


for (let x of new_user) {

    if ((x.includes(current_user))) {

        console.log(x + ": is not available. Enter new name");

    } else {
        console.log(x + ": is available");
    }

}