console.log("this is tut 3");
let element = document.querySelector('.container')
console.log(element.childNodes);
console.log(element.children);
console.log(element.children[0]);
console.log(element.children[0].nextElementSibling);
console.log(element.lastElementChild);
console.log(element.firstElementChild.parentElement);
console.log(element);
element = document.querySelector('ul.aakash')
console.log(element.nextElementSibling.nextElementSibling);
element = document.querySelector('form')
console.log(element);