console.log("tut5 ");
let container = document.querySelector('.container').addEventListener('click',function(e) {
    let variable
    variable = e.target
    variable = e.target.className
    variable = Array.from(e.target.classList)
    console.log("click event triggered");
    console.log(variable);
    
})
