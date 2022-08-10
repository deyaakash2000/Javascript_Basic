console.log("practice on promise");
let fetchDetails = document.getElementById('fetchDetails').addEventListener('click', FetchData)
function FetchData() {
    // console.log("indside function");
    // url='aakash.txt'
    // fetch(url).then((response)=>{
    //     console.log("inside 1st then()");
    //     return response.text()
    // }).then((data)=>{
    //     console.log("inside 2nd then()");
    //     console.log(data);
    // })
    // get request
    console.log("indside function");
    url = 'https://api.github.com/users'
    fetch(url).then((response) => {
        console.log("inside 1st then()");
        return response.json()
    }).then((data) => {
        console.log("inside 2nd then()");
        console.log(data);
    })
}
// console.log("Before call function");
// FetchData()
// console.log("after call function");



//post Request
function postRequest() {
        url = "http://dummy.restapiexample.com/api/v1/create";
        data ='	{"name": "test7897878","salary": "123","age": "23"}'  
        params = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        }
        fetch(url).then((response) => {
            return response.json()
        }).then((data) => {  
            console.log(data);
        })
    }
    postRequest()