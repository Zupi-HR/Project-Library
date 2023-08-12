const addBook = document.getElementById('addBook');
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector('.close');
const submitBTN = document.querySelector('.submitBTN');
const booksContainer = document.querySelector('.books_container');
const deleteBTN = document.createElement('button');
deleteBTN.textContent = "Delete";

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
  getInputValAndCreateObject();
  displayBooks();
  modal.classList.add('hidden');
  
})

deleteBTN.addEventListener('click', function() {
  
})

function removeObjectWIthDataset(array, dataset) {
  const ObjWithIndex = arr.findIndex((obj))
}

function getInputValAndCreateObject() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const readStatus = document.getElementById('isRead').checked;
  console.log(title, author, pages, readStatus);
  const newBook = new Book(title, author, pages, readStatus);
  addBookToLibrary(newBook);
}

function Book(title, author, pages, isRead) {
  //costructor
  this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  console.log(myLibrary);
}

function displayBooks() {

  myLibrary.forEach((element, index) => {
    
    //create book wrapper
    const bookWrapper = document.createElement('div');
    bookWrapper.dataset.indexNumber = index;
    bookWrapper.classList.add('book');
    // create book content
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const readBTN = document.createElement('button');
    readBTN.classList.add('readBTN');

    // connect book content with object
    title.textContent = element.title;
    author.textContent = element.author;
    pages.textContent = element.pages + ' ' + 'pages';
    if (element.isRead) {
      readBTN.textContent = 'Read';
      readBTN.classList.add('green');
    } else {
      readBTN.textContent = 'Not read'
      readBTN.classList.add('red');
    }

    //create delete button 
    
    deleteBTN.classList.add('deleteBTN');
    

    bookWrapper.append(title, author, pages, readBTN, deleteBTN);
    booksContainer.appendChild(bookWrapper);
    console.log(bookWrapper.dataset);
  })
 
}










