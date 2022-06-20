let submitBtn = document.querySelector('#submit');
let myBooks = [];
// remove or add book's 'read' class by clicking on it's status 
document.querySelector('#books').addEventListener('click', function(e) {
  if (e.target && e.target.matches('.book-status')) {
    document.querySelector(`#${e.target.id}`).classList.toggle('read');
    if (document.querySelector(`#${e.target.id}`).classList.contains('read')) {
      document.querySelector(`#${e.target.id}`).textContent = 'Read';
      myBooks[e.target.id.slice(-1)].alreadyRead = true;
    }
    else {
      document.querySelector(`#${e.target.id}`).textContent = 'Unread';
      myBooks[e.target.id.slice(-1)].alreadyRead = false;
    }
  }
});

function Book(name, author, alreadyRead) {
  this.name = name
  this.author = author
  this.alreadyRead = alreadyRead
}

function displayBooks() {
  let booksTable = document.querySelector('#table-body');
  booksTable.innerHTML = '';
  for (i = 0; i < myBooks.length; i++) {
    let bookRow = document.createElement('tr');
    let bookName = document.createElement('td');
    bookName.textContent = myBooks[i].name;
    let bookAuthor = document.createElement('td');
    bookAuthor.textContent = myBooks[i].author;
    let bookStatus = document.createElement('td');
    if (myBooks[i].alreadyRead == true) {
      let buttonStatus = document.createElement('button');
      buttonStatus.classList.add('book-status', 'read');
      buttonStatus.setAttribute('id', `book-number-${i}`);
      buttonStatus.textContent = 'Read';
      bookStatus.appendChild(buttonStatus);
    }
    else {
      let buttonStatus = document.createElement('button');
      buttonStatus.classList.add('book-status');
      buttonStatus.setAttribute('id', `book-number-${i}`);
      buttonStatus.textContent = 'Unread';
      bookStatus.appendChild(buttonStatus);
    }
    let bookDelete = document.createElement('td');
    let buttonDelete = document.createElement('button');
    buttonDelete.setAttribute('id', 'delete-book');
    buttonDelete.textContent = "DELETE";
    bookDelete.appendChild(buttonDelete);
    bookRow.appendChild(bookName);
    bookRow.appendChild(bookAuthor);
    bookRow.appendChild(bookStatus);
    bookRow.appendChild(bookDelete);
    booksTable.appendChild(bookRow);
  }
}

submitBtn.addEventListener('click', function(e) {
  let name = document.querySelector('#name');
  let author = document.querySelector('#author');
  let status = document.querySelector('#status')
  const book = new Book(name.value, author.value, status.checked);
  if(book.name != '' && book.author != '') {
    myBooks.push(book);
    displayBooks();
  }
});
