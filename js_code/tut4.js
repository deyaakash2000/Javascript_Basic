console.log("this is tut 4");
let element = document.createElement('h1')
let text = document.createTextNode('i am a good boy')
element.appendChild(text)
element.id = 'element1'
element.class = 'element'
element.setAttribute('title','about me')
// console.log(element);
let s = document.getElementById('this')
// console.log(s.children);
s.replaceChild(element,document.getElementById('one'))


// EXCERSSICE

let google = document.createElement('h2')
google.id = 'search'
let text1 = document.createTextNode('google search')
google.appendChild(text1)
console.log(google);
let place = document.getElementById('5')
// console.log(place);
place.appendChild(google)


let sear = document.createElement('a')
sear.setAttribute('href',"http://www.google.com")
let text2 = document.createTextNode('click')
sear.appendChild(text2)
console.log(sear);
google.appendChild(sear)