let username = "niraj";
let password = "nepal123";
function isValidPassword(username, password){
    if (password.length < 8 || password.includes(" ") || password.includes(username)){
        console.log("Password is invalid");
        return false;
    }
    return true;
};

console.log(isValidPassword(username, password));