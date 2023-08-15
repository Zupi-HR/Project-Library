const addBook = document.getElementById('addBook');
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector('.close');
const submitBTN = document.querySelector('.submitBTN');
const booksContainer = document.querySelector('.books_container');

let myLibrary = [];

function Book(id, title, author, pages, isRead) {
  //costructor
  this.id = id;
  this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead
    
}

Book.prototype.changeReadStatusBTN = function(readBTN) {
  if (this.isRead) {
      readBTN.classList.add('green');
      readBTN.textContent = "read";
  } else {
    readBTN.textContent = "Not Read";
    readBTN.classList.remove('green');
  }
}

addBook.addEventListener("click", function () {
  modal.classList.remove('hidden');
})

closeBtn.addEventListener('click', function () {
  modal.classList.add('hidden');
})

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.classList.add('hidden');
  }
})

submitBTN.addEventListener('click', function (event) {
  event.preventDefault();
  booksContainer.textContent = "";
  getInputValAndCreateObject();
  displayBooks();
  modal.classList.add('hidden');

})

function getInputValAndCreateObject() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const readStatus = document.getElementById('isRead').checked;
  console.log(title, author, pages, readStatus);
  const newBook = new Book(undefined, title, author, pages, readStatus);
  addBookToLibrary(newBook);
}




function addBookToLibrary(book) {
  myLibrary.push(book);
  console.log(myLibrary);
}

function deleteBook(event) {
  const bookIDToDelete = event.target.parentNode.dataset.bookID;
  const objWithIndex = myLibrary.findIndex(object => {
    return object.id == bookIDToDelete;
  })
 
   myLibrary.splice(objWithIndex, 1);
    event.target.parentNode.remove();
  
  console.log(myLibrary);
}
  
 
function displayBooks() {

  myLibrary.forEach((book, index) => {
    book.id = index;
    
    //create book element
    const bookElement = document.createElement('div');
    bookElement.dataset.bookID = index;
    bookElement.classList.add('book');
    // create book element content
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
     readBTN = document.createElement('button');
     readBTN.classList.add('readBTN');
     book.changeReadStatusBTN(readBTN);
    readBTN.addEventListener('click', function(event) {
       console.log(book.isRead);
       if(book.isRead) {
        book.isRead = false;
        book.changeReadStatusBTN(event.target);
       } else {
        book.isRead = true;
        book.changeReadStatusBTN(event.target);
       }
       console.log(book.isRead);
    })

    // connect book element content with object
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages + ' ' + 'pages';
   
    //create delete button 
    const deleteBTN = document.createElement('button');
    deleteBTN.textContent = "Delete";
    deleteBTN.classList.add('deleteBTN');

    //attach event listener to delete button
    deleteBTN.addEventListener('click', function (event) {
      console.log(book.id);
      deleteBook(event);

    })
    //append everything
    bookElement.append(title, author, pages, readBTN, deleteBTN);
    booksContainer.appendChild(bookElement);
    console.log(bookElement.dataset);
  })

}









