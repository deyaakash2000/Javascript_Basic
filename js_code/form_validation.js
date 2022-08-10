console.log("registration");

console.log("validation");
let Name = document.getElementById('name')
let email = document.getElementById('email')
console.log(email);
let mnumber = document.getElementById('mnumber')
let password = document.getElementById('password')
Name.addEventListener('blur', () => {
    let regex = /^[a-zA-z]([a-zA-Z0-9]){2,20}$/
    let str = Name.value
    if (regex.test(str)) {
        console.log("matched");
    } else {
        console.log("not matched");
    }
})

email.addEventListener('blur', () => {
    let regex = /^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z0-9]+){2,10}/
    let str = email.value
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("matched");
    } else {
        console.log("not matched");
    }
})

mnumber.addEventListener('blur', () => {
    let regex = /([0-9]+){10}$/
    let str = mnumber.value
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("matched");
    } else {
        console.log("not matched");
    }
})
password.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]([a-zA-Z0-9!@#%&]){5,18}$/
    let str = password.value
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("matched");
    } else {
        console.log("not matched");
    }
})