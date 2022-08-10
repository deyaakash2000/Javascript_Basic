//Asyncronous using Promise
const students = [
    { name: 'Aakash', subject: 'java' },
    { name: 'Shiva', subject: 'php' }
]

function employee(student) {
    return new Promise(function (resolve, reject) {
        let error = false
        setTimeout(() => {
            if (!error) {
                students.push(student)
                resolve()
            }else{
                reject('opps server error')
            }

        }, 2000);
    })
}

function getEmp(){
    let str;
    setTimeout(() => {
        students.forEach(function (element) {
            str += `<li>${element.name}</li>`
        })
        document.getElementById('students').innerHTML += str
    }, 1000)

}
let emp = {name:'Kunal',subject:'c#'}
employee(emp).then(function(){
    getEmp()
}).catch(function(e){
    console.log("Serevr : "+e);
})

