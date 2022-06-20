// remove or add book's 'read' class by clicking on it's status 
document.querySelector('#books').addEventListener('click', function(e) {
  if (e.target && e.target.matches('.book-status')) {
    document.querySelector(`#${e.target.id}`).classList.toggle('read');
  }
})

let myLibrary = [];

function Book(name, author, alreadyRead) {
  this.name = name
  this.author = author
  this.alreadyRead = alreadyRead
}

function addBookToLibrary() {
  
}