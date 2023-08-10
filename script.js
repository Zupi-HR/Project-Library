const addBook = document.getElementById('addBook');
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector('.close');
const submitBTN = document.querySelector('.submitBTN');
console.log(addBook);

addBook.addEventListener("click", function() {
  modal.style.display = "block";
}) 

closeBtn.addEventListener('click', function() {
  modal.style.display = "none";
})

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
})
  

let myLibrary = [];

function Book(name, author, pages, readBook) {
    //costructor
   this.name = name,
   this.author = author,
   this.pages = pages,
   this.readBook = readBook
}

function getInputValues() {
 
}

function addBookToLibrary() {
  let newBook = new Book();
  myLibrary.push(newBook);
}


function displayBooks() {
  /*
  myLibrary.forEach((element, index) => {
    const div = document.createElement('div');
    div.innerHTML = `${element.title} ${element.pages}`;
    div.classList.add('card');
    container.appendChild(div);
  })
  */
}

submitBTN.addEventListener('click', function(event) {
  event.preventDefault();
  console.log(document.querySelector('input[type="text"]').value);
})









