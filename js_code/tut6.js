console.log("tut6");
let u = document.querySelector('#btn2').addEventListener('click',function (params) {
    params.preventDefault()
    console.log("click triggerd");
})
document.querySelector('.container').addEventListener('mouseenter',function (params) {
  
    document.body.style.background = 'gold'
    console.log("mouseenter");
});
document.querySelector('.container').addEventListener('mouseleave',function (params) {
   
    document.body.style.background ='green'
    console.log("mouseleave");
});
let arr = ["a","b","c"]
localStorage.setItem('name',JSON.stringify(arr))
let name = JSON.parse(localStorage.getItem("name"))
console.log(name);