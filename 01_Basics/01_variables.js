const accountId = 144553
let accountEmail = "santosh@gmail.com"
var accountPassword = "12345"
accountCity = "Berhampur"
let accountState

//accountId = 2 // Not Allowed

accountEmail = "hc@hc.com"
accountPassword = "2121212"
accountCity = "Hyderabad"

console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])