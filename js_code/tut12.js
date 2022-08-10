console.log("Tut 12 promise");
function details() {
    return new Promise(function (resolve, reject) {
        let eror = true
        setTimeout(() => {
            if (!eror) {
                console.log("Function : promise resolved");
                resolve()
            } else {
                console.log("Function : Not fetched any data");
                reject('sorry')
            }
        }, 2000);

    })
}

details().then(function () {
    console.log("aakash:thanks for my reponse");
}).catch(function (e) {
    console.log("some failoure occour " + e);
})





