console.log("this is tut14");
// let reg = /Aakash Dey/i
// let reg = /Aakash Dey/g
let reg = /Aakash Deys/
let str = "My name is Aakash Dey and my best friend name also Aakash Dey"
// let result = reg.exec(str) //return array else null
// result = reg.test(str) //return true and false
// result = str.match(reg) // return array else null
// result = str.search(reg) //return search result of -1 
// result = str.replace(reg,"My name is Kamol and my best friend name also Aakash Dey") // replace entaire string
// console.log(result);


let regex = /aakash/
regex = /^aakash/ // ^ starts with 
regex = /aakash$/ // $ ends with
regex = /a.kash/ // . one charecter match
regex = /a*kash/ // * 0 or more than one charecter
regex = /a\*kash/
regex = /aa?kash?i/ // ? after character means that character is optional
let s = "aakash"


// craracter set
let r = /a[0-9][A-Z]akash dey/
r = /a[0-9][^A-Z]akash dey/ // ^ means not A-Z

// r = /a{2}akashy{1} dey/
// r = /a{2}akashy{0,1} dey/

//group
//  r = /(vi){2}rat kholi([0-9]is best){1}/
// let p= "vivivirat kholi9is best"
r=/\wka/ //\w word charecture
r=/\w+dey/ //\w+ means one or more word charecture
r=/\Wkolkata/ // \W non word character
r=/\W+k/ // \W+ non word character one or more
r=/\d56/ // \d digit character
r=/\d+56/ // \b+ one or more one digit character
r=/\D056/ // \D non digit character
r=/\D+056/ // \D+ one or more than one non word character
r=/\s#/ // \s white space character
r=/\s+#/ // \s+ one or more white space character
r=/\Sfrom/ // \S non white space character
r=/\S+from/ // \S+ one or more non white space character
let p = 'akashdey i amfrom #$%#$%^$%&kolkata 700tattu056'
console.log(r.exec(p));
let result = regex.exec(s)
if(r.test(p)){
    console.log("Match the string");
}else{
    console.log("Not match the string");
}