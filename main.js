let myLibrary = [];

function Book(title, author, pages, read, coverimage){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.coverimage = coverimage;
}
//The render() function updates the UI to display the current library of books.
//It dynamically generates HTML for each book and updates the left panel with read and unread counts.
function render(){
    let libraryEl = document.querySelector("#library");
    libraryEl.innerHTML = "";
    let readCount = 0;
    let unreadCount = 0;
    
    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.className = "bg-white rounded-lg shadow-md p-4 mb-4";
        bookEl.innerHTML = `
            <p>Title: ${book.title}</p>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? 'Yes' : 'No'}</p>
        `;
        
        if (book.coverimage){
            let imgEl = document.createElement("img");
            imgEl.src = URL.createObjectURL(book.coverimage);
            imgEl.className = "rounded-full max-w-xs mx-auto mb-4";
            bookEl.appendChild(imgEl);
        }
        libraryEl.appendChild(bookEl);
        
        // Count read and unread books
        if (book.read) {
            readCount++;
        } else {
            unreadCount++;
        }
    }
    
    // Display read and unread counts in the left panel
    let leftPanelEl = document.querySelector("#left-panel");
    leftPanelEl.innerHTML = `
        <div class="p-4">
            <p class="font-bold text-lg text-white">Read (${readCount}):</p>
            ${getBooksHTML(true)}
            <p class="font-bold text-lg text-white">Unread (${unreadCount}):</p>
            ${getBooksHTML(false)}
        </div>
    `;
}

// Helper function to generate HTML for read and unread books
function getBooksHTML(isRead) {
    let booksHTML = "";
    myLibrary.forEach(book => {
        if (book.read === isRead) {
            booksHTML += `<p>${book.title}, ${book.author}, ${book.pages} pages</p>`;
        }
    });
    return booksHTML;
}
//This function extracts data from the form inputs and creates a new Book object.
//It then adds the new book to the myLibrary array and triggers a re-rendering of the library.
function addBookToLibrary(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let coverimage = document.getElementById("coverimage").files[0]; // Get the first file
    let newBook = new Book(title, author, pages, read, coverimage);
    myLibrary.push(newBook);
    render();
}

document.querySelector("#new-book-form").addEventListener("submit", function(event){
    event.preventDefault();
    addBookToLibrary();
});

let newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", function(){
    newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "block";
});

let addBookCover = document.getElementById("book-cover");
let addCoverImage = document.getElementById("coverimage");

addCoverImage.onchange = function(){
    addBookCover.src = URL.createObjectURL(addCoverImage.files[0]);
};

// Initial rendering
render();
