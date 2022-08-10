console.log("this is tut7");
let container = document.querySelector(".container")
let header = document.getElementsByClassName("good")
let divEle = document.createElement('div')
divEle.setAttribute('class', 'something')
divEle.setAttribute('id', 'something')
divEle.setAttribute('style', 'border:2px solid black; width:154px;margin: 54px; padding:24px')
let text = document.createTextNode("i am aaksh dey")
divEle.appendChild(text)
container.appendChild(divEle)

divEle.addEventListener('click', function(){
    // console.log("click");
    let noofText = document.getElementsByClassName('area').length
    if (noofText == 0) {
        let html = divEle.innerHTML
        divEle.innerHTML = `<textarea class="area" placeholder="Leave a comment here" id="area">${html}</textarea>`

    }
    let area = document.getElementById('area')
    area.addEventListener('blur', function () {
        console.log(area);
        divEle.innerHTML = area.value

    })
});
