console.log("callback tut11");
//a function call another function insidd the prev-function body

//const student is a jeson structure
const students = [
    { name: 'Aakash', subject: 'java' },
    { name: 'Shiva', subject: 'php' }
]
function setStudent(student, callback) {
    setTimeout(() => {
        students.push(student)
        callback()
    }, 2000);
}

function getStudent() {
    let str;
    setTimeout(() => {
        students.forEach(function (element) {
            str += `<li>${element.name}</li>`
        })
        document.getElementById('students').innerHTML += str
    }, 1000)



}
let s = { name: 'fdfd', subject: 'python' }
setStudent(s, getStudent)
