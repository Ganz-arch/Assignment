class Book {
    #isbn;

    constructor(title, author, isbn){
        this.title=title;
        this.author=author;
        this.#isbn=isbn;
        this.available=true;
    }

    get isbn(){
        return this.#isbn
    }

    set isbn(value){
        console.log('ISBN cannot be modified directly.')
    }

    borrowBook(){
        if (this.available){
            this.available=false;
            console.log(`${this.title} has been borrowed`)
        }
        else{
            console.log(`${this.title} is not available.`)
        }
    }

    returnBook(){
        this.available=true
        console.log(`${this.title} has been returned.`)
    }
}

class Library {
    constructor(){
        this.books=[]
    }
    
    addBook(book){
        this.books.push(book)
        console.log(`${book.title} has been added to the library`)
    }

    removeBook(isbn){
        const index = this.books.findIndex(book=> book.isbn === isbn)
        if (index!== -1){
            console.log(`${this.books[index].title} has been removed from the library`)
            this.books.splice(index, 1)
        }
        else {
            console.log(`Boo with ISBN: ${isbn} not found.`)
        }
    }

    findBookByTitle(title){
        const book = this.books.find(book=>book.title===title)
        if (book){
           return book
        }
        else {
            console.log(`Book titled "${title}" not found.`)
            return null
        }
    }
}

class DigitalLibrary extends Library {
    downloadBook(isbn){
        const book = this.books.find(book => book.isbn===isbn)
        if(book&&book.available){
            console.log(`You have downloaded "${book.title}".`)
        }
        else if (book){
            console.log(`"${book.title}" is not available for download.`)
        }
        else{
            console.log(`Book with ISBN: ${isbn} not found.`)
        }
    }
}


//Testing the code
const book1 = new Book('Rich Dad Poor Dad', 'George Martin', '273460729')
const book2 = new Book('Pshycology of Money', 'Edward Luke', '739217490')  //Declaring book1 and book2 variables

book1.borrowBook(); //Book has been borrowed
book1.borrowBook(); //Borrowed book is not available.
book1.returnBook(); //Borrowed book has been returnedk

const library1 = new Library();  //Declaring library variable
library1.addBook(book1);
library1.addBook(book2); //Adding book1 and book2 obeject to the library
const d =library1.findBookByTitle('Pshycology of Money'); // Finding book object by title from the library
console.log(d)
library1.removeBook('739217491');  // Book obeject has been removed from library


const digitalLibrary= new DigitalLibrary();
digitalLibrary.addBook(book1);
digitalLibrary.addBook(book2);  //Adding book1 and book2 to the digtal library

digitalLibrary.downloadBook('273460729'); //Downloads book1
book1.borrowBook();  //Book1 Borrowed
digitalLibrary.downloadBook('273460729');  //Borrowed book is not available for download

book1.isbn="493022221"  //ISBN cannot be modified