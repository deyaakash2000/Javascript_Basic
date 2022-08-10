console.log("college");
showBooks()
function Book(name, author, type) {
    this.name = name
    this.author = author
    this.type = type
}
function showBooks() {
    let items = localStorage.getItem('library')
    if (items == null) {
        objItem = []
    } else {
        objItem = JSON.parse(items)
    }
    let html=''
    objItem.forEach(function (element, index) {
        html += `<tbody>
                    <tr>
                        <td>${index+1}</td>
                        <td>${element.name}</td>
                        <td>${element.author}</td>
                        <td>${element.type}</td>
                        <td><button type="button" class="btn btn-warning" id="${index}" onclick="deleteRecord(this.id)">Delete</button></td>
                    </tr>
                </tbody>`
    });
    let alldata = document.getElementById("alldata")
     alldata.innerHTML = html
}
function deleteRecord(params){
    let items = localStorage.getItem('library')
    if (items == null) {
        objItem = []
    } else {
        objItem = JSON.parse(items)
    }
    objItem.splice(params,1)
    localStorage.setItem('library',JSON.stringify(objItem))
    showBooks()
}

class dispaly {
    // showbooks(books) {
    //         let html =`<tbody>
    //             <tr>
    //                 <td>${books.name}</td>
    //                 <td>${books.author}</td>
    //                 <td>${books.type}</td>
    //             </tr>
    //         </tbody>`

    //     let alldata = document.getElementById("alldata")
    //     alldata.innerHTML += html
    // }
    
    clearText() {
        let dataSend = document.getElementById('dataSend')
        dataSend.reset()

    }
    validation(books) {
        if (books.name.length < 3 || books.author.length < 3) {
            return false
        } else {
            return true
        }

    }
    show(type, message) {

        let mse = document.getElementById('msg')
        mse.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>!!!</strong> ${message}.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
        setTimeout(() => {
            mse.innerHTML = ''
        }, 2000);
    }

}

let datasubmit = document.getElementById('dataSend')
datasubmit.addEventListener('submit', submitdata)
function submitdata(e) {
    console.log("submit");
    e.preventDefault()
    let name = document.getElementById('bookname').value
    let author = document.getElementById('authour').value
    let type;
    let cooking = document.getElementById('cooking')
    let programming = document.getElementById('programming')
    let story = document.getElementById('story')
    if (cooking.checked) {
        type = cooking.value
    } else if (story.checked) {
        type = story.value
    } else {
        type = programming.value
    }
    let book = new Book(name, author, type)
    console.log(book);

    let dis = new dispaly();
    let showItem = new showBooks()
    let items = localStorage.getItem('library')
    if (items == null) {
        objItem = []
    } else {
        objItem = JSON.parse(items)
    }
    if (dis.validation(book)) {
        objItem.push(book)
        localStorage.setItem('library', JSON.stringify(objItem))
    }

    if (dis.validation(book)) {
        showBooks()
        dis.clearText()
        dis.show('success', 'Successfully added')
    } else {
        dis.show('danger', 'Successfully added')
    }


}