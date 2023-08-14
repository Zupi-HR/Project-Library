const addBook = document.getElementById('addBook');
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector('.close');
const submitBTN = document.querySelector('.submitBTN');
const booksContainer = document.querySelector('.books_container');
const readBTN = document.querySelector('.readBTN');


let myLibrary = [];

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

readBTN.addEventListener('click',function changeReadStatus() {
  readBTN.classList.toggle('.green');
});




function getInputValAndCreateObject() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const readStatus = document.getElementById('isRead').checked;
  console.log(title, author, pages, readStatus);
  const newBook = new Book(undefined, title, author, pages, readStatus);
  addBookToLibrary(newBook);
}

function Book(id, title, author, pages, isRead) {
  //costructor
  this.id = id;
  this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead
    
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
    //create book wrapper
    const bookWrapper = document.createElement('div');
    bookWrapper.dataset.bookID = index;


    bookWrapper.classList.add('book');
    // create book content
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const readBTN = document.createElement('button');
    readBTN.classList.add('readBTN');

    // connect book content with object
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages + ' ' + 'pages';
    if (book.isRead) {
      readBTN.textContent = 'Read';
      readBTN.classList.add('green');
    } else {
      readBTN.textContent = 'not read';
    }

    //create delete button 
    const deleteBTN = document.createElement('button');
    deleteBTN.textContent = "Delete";
    deleteBTN.classList.add('deleteBTN');

    //attach event listener to delete button
    deleteBTN.addEventListener('click', function (event) {
      console.log(book.id);
      deleteBook(event);

    })

    bookWrapper.append(title, author, pages, readBTN, deleteBTN);
    booksContainer.appendChild(bookWrapper);
    console.log(bookWrapper.dataset);


  })

}









