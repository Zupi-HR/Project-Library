const newBook = document.getElementById('new_book');
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector('.close');
console.log(newBook);

newBook.addEventListener("click", function() {
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

function addBookToLibrary() {
    
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









