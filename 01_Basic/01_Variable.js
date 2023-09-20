const accountId = 123344
let accountEmail = "bunu@gmail.com"
var accountPassword = "12345"
accountCity = "Bhubaneswar"
let accountState;

// accountId = 2 // Not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

accountEmail = "bhutia@gmail.com"
accountPassword = "Bunu@123"
accountCity = "Deogarh"

console.table([accountId ,accountEmail , accountPassword , accountCity , accountState])

