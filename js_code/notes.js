console.log("notes");
showNotes()
let btn = document.getElementById('addBtn').addEventListener('click', function () {
    console.log("click");
    let text = document.getElementById('textItem')
    let title = document.getElementById('title')
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        noteObj = []
    } else {
        noteObj = JSON.parse(notes)

    }
    let obj ={
        text:text.value,
        title:title.value
    }
    noteObj.push(obj)
    localStorage.setItem('notes',JSON.stringify(noteObj))
    text.value =""
    title.value =""
     showNotes()
})
function showNotes() {
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        noteObj = []
    } else {
        noteObj = JSON.parse(notes)
    }
    let html = ``
    noteObj.forEach(function (element, index) {
        html += `<div class="card my-3 mx-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Notes${index + 1}</h5>
                <h3 class="card-text">${element.title}.</h3>
                <p class="card-text">${element.text}.</p>
                <button id="${index}" class="btn btn-primary" onclick="deleteNote(this.id)" >Delete Note</button>
            </div>
     </div> `
    });
    let showNotes = document.getElementById('showNotes')
    if (showNotes.length != 0) {
        showNotes.innerHTML = html

    } else {
        let  = "Nothing...."

        showNotes.innerHTML = message
    }
    
}

function deleteNote(params) {
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        noteObj = []
    } else {
        noteObj = JSON.parse(notes)

    }
    noteObj.splice(params,1)
    localStorage.setItem('notes',JSON.stringify(noteObj))
    showNotes()
    console.log("click");
}
