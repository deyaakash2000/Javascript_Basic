console.log("this is tut 2");
let element = document
element = document.getElementById('5').childNodes
element = document.getElementById('5').parentNode
element = document.getElementsByClassName('child')
// element.innerHTML = "i am good boy"
Array.from(element).forEach(element => {
    console.log(element);
    element.style.color = 'red'
});
let ele = document.querySelector('h1.hii')
ele.innerHTML = '<h3>Welcome to my world</h3>'
ele.style.color = 'gold'
console.log(ele);
let element2 = document.querySelectorAll('li')
Array.from(element2).forEach(element=>{
    console.log(element);
})