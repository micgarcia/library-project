/* Library of books to display*/
var myLibrary = [];

/* Constructor function that creates a book object */
function Books(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
};

/* Functions to reveal or hide form */
function revealForm() {
  const form = document.getElementById('form');
  const cancel = document.getElementById('cancel');
  form.style.display = 'block'
  cancel.style.display = 'block'

}

function hideForm() {
  const form = document.getElementById('form');
  const cancel = document.getElementById('cancel')

  form.style.display = 'none'
  cancel.style.display = 'none'
}

const newBook = document.getElementById('newBook');
newBook.addEventListener('click', revealForm);

const cancel = document.getElementById('cancel');
cancel.addEventListener('click', hideForm)


/* Function that adds Book object to myLibrary, then calls
   function that posts book to DOM */
function addBookToLibrary() {

  /* Clears text input fields after adding book */
  var inputs = document.getElementsByTagName('input');
  for (e of inputs) {
    e.value = '';
  }

  var title = document.getElementById('name').value;
  var author = document.getElementById('author').value;
  var pages = document.getElementById('pages').value;
  var hasRead = document.getElementById('hasRead').value;

  var finalBook = new Books(title, author, pages, hasRead);
  myLibrary.push(finalBook);

  addBookToDOM();
}

/* listener event for adding book form */
const button = document.getElementById('enter');
button.addEventListener("click", addBookToLibrary);


/* Adds books in library to DOM */
function addBookToDOM() {



  document.getElementById('grid').innerHTML = '';
  for (var i = 0; i < myLibrary.length; i++) {
    /* Creates a card for each book */
    var bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
    bookCard.setAttribute("data-index", i);

    /* Adds title to book card */
    var bookTitle = document.createElement('p');
    bookTitle.classList.add('bookTitle');
    bookTitle.textContent = 'Title: ' + myLibrary[i].title;
    bookCard.appendChild(bookTitle)

    var bookAuthor = document.createElement('p');
    bookAuthor.classList.add('bookAuthor');
    bookAuthor.textContent = 'Author: ' + myLibrary[i].author;
    bookCard.appendChild(bookAuthor)

    var bookPages = document.createElement('p');
    bookPages.classList.add('bookPages');
    bookPages.textContent = 'Pages: ' + myLibrary[i].pages;
    bookCard.appendChild(bookPages)

    var bookRead = document.createElement('p');
    bookRead.classList.add('bookRead');
    bookRead.textContent = 'Have You Read It?: ' +myLibrary[i].hasRead;
    bookCard.appendChild(bookRead)

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.textContent = 'Remove Book';
    remove.setAttribute('data-index', i)
    remove.onclick = removeBook;
    bookCard.appendChild(remove);


    document.getElementById('grid').appendChild(bookCard);
  }
}

function removeBook() {
  var index = this.index;
  myLibrary.splice(index, 1);
  addBookToDOM();
}

var removeButton = document.getElementsByClassName('remove');
for (var i = 0; i < removeButton.length; i++) {
  removeButton[i].addEventListener('click', removeBook);
}


