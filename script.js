const addBook = document.getElementById('addBook');
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector('.close');
const form = document.querySelector('form');
const submitBTN = document.querySelector('.submitBTN');
const booksContainer = document.querySelector('.books_container');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');

let myLibrary = [];

class Book {
  #id;
  #title;
  #author
  #pages;
  #isRead;

  constructor(id, title, author, pages, isRead) {
    this.#id = id;
    this.#title = title,
      this.#author = author,
      this.#pages = pages,
      this.#isRead = isRead
  }

  changeReadStatusBTN(readBTN) {
    if (this.#isRead) {
      readBTN.classList.add('green');
      readBTN.textContent = "read";
    } else {
      readBTN.textContent = "Not Read";
      readBTN.classList.remove('green');
    }
  }

  set id(value) {
    this.#id = value;
  }

  get id() {
    return this.#id;
  }

  set title(value) {
    this.#title = value;
  }

  get title() {
    return this.#title;
  }

  set author(value) {
    this.#author = value;
  }

  get author() {
    return this.#author;
  }

  set pages(value) {
    this.#pages = value;
  }

  get pages() {
    return this.#pages;
  }

  set isRead(value) {
    this.#isRead = value;
  }

  get isRead() {
    return this.#isRead;
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


function getInputValAndCreateObject() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const readStatus = document.getElementById('isRead').checked;
  console.log(title, author, pages, readStatus);
  const newBook = new Book(undefined, title, author, pages, readStatus);
  LibraryManager.addBookToLibrary(newBook);
}

class LibraryManager {

  static addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(myLibrary);
  }

  static deleteBook(event) {
    const bookIDToDelete = event.target.parentNode.dataset.bookID;
    const objWithIndex = myLibrary.findIndex(object => {
      return object.id == bookIDToDelete;
    })

    myLibrary.splice(objWithIndex, 1);
    event.target.parentNode.remove();

    console.log(myLibrary);
  }


  static displayBooks() {
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
      const readBTN = document.createElement('button');
      readBTN.classList.add('readBTN');
      book.changeReadStatusBTN(readBTN);
      readBTN.addEventListener('click', function (event) {
        console.log(book.isRead);
        if (book.isRead) {
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
        LibraryManager.deleteBook(event);

      })
      //append everything
      bookElement.append(title, author, pages, readBTN, deleteBTN);
      booksContainer.appendChild(bookElement);
      console.log(bookElement.dataset);
    })
  }
}


form.addEventListener('submit', (event) => {
  if (!form.checkValidity()) {
    console.log('wrong form')
    if (titleInput.validity.valueMissing) {
      titleInput.setCustomValidity('Title field is empty');
      titleInput.reportValidity();
    } else {
      titleInput.setCustomValidity('');
    }

    if (authorInput.validity.valueMissing) {
      authorInput.setCustomValidity('Author field is empty');
      authorInput.reportValidity();
    } else {
      authorInput.setCustomValidity('');
    }

    if (pagesInput.validity.valueMissing) {
      pagesInput.setCustomValidity('Please enter number of pages');
      pagesInput.reportValidity();
    } else {
      pagesInput.setCustomValidity('');
    }

    event.preventDefault();
  } else {
    event.preventDefault();
    booksContainer.textContent = "";
    getInputValAndCreateObject();
    LibraryManager.displayBooks();
    modal.classList.add('hidden');
  }
});











