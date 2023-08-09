let myLibrary = [];

function Book(name, pages) {
    //costructor

}

function addBookToLibrary() {
    let userInput;
    do {
       userInput = prompt("Please enter a book title and number of pages, separated with comas").split(",");
       console.log("user input je:" + userInput[0] + " " + userInput[1]);
        let object = {
          title: userInput[0],
          pages: userInput[1]
        }
         console.log(object);
         myLibrary.push(object);
         
    } while (userInput != "" && userInput != null )
    
    console.log(`My librari je: ${myLibrary}`);
}





addBookToLibrary();
