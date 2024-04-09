let myLibrary = [];

function Book(title, author, pages, read, coverimage){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.coverimage = coverimage;
}
function render(){
    let libraryEl = document.querySelector("#library");
    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.innerHTML = `<p>${book.title}</p>`
        libraryEl.appendChild(bookEl);
    }
}

function addBookToLibrary(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let coverimage = document.getElementById("coverimage").files;
    let newBook = new Book(title, author, pages, read, coverimage);
    myLibrary.push(newBook);
    render();
}


document.querySelector("#new-book-form").addEventListener("submit", function(event){
    event.preventDefault();
    addBookToLibrary();
})


let newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", function(){
    newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "block";
})

let addBookCover = document.getElementById("book-cover");
let addCoverImage = document.getElementById("coverimage");

addCoverImage.onchange = function(){
    addBookCover.src = URL.createObjectURL(addCoverImage.files[0]);
}
