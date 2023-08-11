const addBook = document.getElementById('addBook');
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector('.close');
const submitBTN = document.querySelector('.submitBTN');
const booksContainer = document.querySelector('.books_container');

const myLibrary = [];

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

submitBTN.addEventListener('click', function() {
  getInputValAndCreateObject();
  displayBooks();
  modal.classList.add('hidden');
})

function getInputValAndCreateObject() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const readStatus = document.getElementById('isRead').checked;
  console.log(title,author, pages, readStatus);
  const newBook = new Book(title, author, pages, readStatus);
  addBookToLibrary(newBook);
}




function Book(title, author, pages, isRead) {
  //costructor
  this.title = title,
    this.author = author,
    this.pages = pages,
    this.readBook = isRead
}



function addBookToLibrary(book) {
  myLibrary.push(book);
  console.log(myLibrary);
}


function displayBooks() {
  
  myLibrary.forEach((element, index) => {
    const div = document.createElement('div');
    div.classList.add('book');
    div.innerHTML = `${element.title} ${element.author} ${element.pages}`;
    booksContainer.appendChild(div);
  })
  
}

submitBTN.addEventListener('click', function (event) {
  event.preventDefault();
})









