// Constructor for Book Objects 
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    //Function to report book info
    this.info = function(){
        let readStatus = this.read ? "read" : "not ready yet";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
    };
}

//Example;
const theHobbit = new Book("The Hobbbit", "J.R.R Tolkein", 295, false);
console.log(theHobbit.info());