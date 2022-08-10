console.log("ajax.js");
// The XMLHttpRequest object can be used to
// exchange data with a web server behind the scenes. 
// This means that it is possible to update parts of a web page, without reloading the whole page.

//fetch CarList
let fetchCars = document.getElementById('cars')
fetchCars.addEventListener('click', carlist)
function carlist() {
    let xhr = new XMLHttpRequest()

    xhr.open('GET', 'car.txt', true)
    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);
            let data = this.responseText
            let html;
            let list = document.getElementById('List')
            html = `<li>${data}</li>`
            list.innerHTML = html
        } else {
            console.error("400")
        }
    }
    xhr.send()
}




// fetch FruitsList
let Fruits = document.getElementById('fruits')
Fruits.addEventListener('click', Fruitslist)
function Fruitslist() {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'fruit.txt', true)
    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);
            let data = this.responseText
            let html;
            let list = document.getElementById('List')
            html = `<li>${data}</li>`
            list.innerHTML = html
        } else {
            console.error("400")
        }
    }
    xhr.send()
}


//Post Request
let employee = document.getElementById('employee')
employee.addEventListener('click',employeePost)
function employeePost(params) {
    console.log("click");
    let xhr = new XMLHttpRequest()
    xhr.open('POST','https://dummy.restapiexample.com/api/v1/create',true)
    xhr.getAllResponseHeaders('Content-type','application/json')
    xhr.onload=function(){
        console.log(this.responseText);
    }
    params = `{"name":"testsdsdee","salary":"123","age":"23"}`
    xhr.send(params)


    
}