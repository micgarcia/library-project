/* Library of books to display*/
var myLibrary = [];

/* Constructor function that creates a book object */
function Books(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
  this.toggleReadStatus = function() {
    var status = this.hasRead.toLowerCase();
    if (status.includes('yes')) {
      this.hasRead = 'No';
    } else {
      this.hasRead = 'Yes';
    }
  }
};


/* Functions to reveal or hide form */
function revealForm() {
  const form = document.getElementById('form');
  const cancel = document.getElementById('cancel');
  const newBook = document.getElementById('newBook');
  form.style.display = 'grid';
  cancel.style.display = 'block';
  newBook.style.display = 'none';

}

function hideForm() {
  const form = document.getElementById('form');
  const cancel = document.getElementById('cancel')
  const newBook = document.getElementById('newBook');
  form.style.display = 'none';
  cancel.style.display = 'none';
  newBook.style.display = 'block';
}

const newBook = document.getElementById('newBook');
newBook.addEventListener('click', revealForm);

const cancel = document.getElementById('cancel');
cancel.addEventListener('click', hideForm)


/* Function that adds Book object to myLibrary, then calls
   function that posts book to DOM */
function addBookToLibrary() {

  var title = document.getElementById('name').value;
  var author = document.getElementById('author').value;
  var pages = document.getElementById('pages').value;
  var hasRead = document.getElementById('hasRead').value;

  var finalBook = new Books(title, author, pages, hasRead);
  myLibrary.push(finalBook);

  addBookToDOM();
}

/* listener event for adding book form */
// const button = document.getElementById('enter');
// button.addEventListener("click", addBookToLibrary);


/* Adds books in library to DOM */
function addBookToDOM() {

   /* Clears text input fields after adding book */
   var inputs = document.getElementsByTagName('input');
   for (e of inputs) {
     e.value = '';
   }

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
    bookRead.textContent = 'Have You Read It?: ' + myLibrary[i].hasRead;
    bookCard.appendChild(bookRead)

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.textContent = 'Remove Book';
    remove.setAttribute('data-index', i);
    remove.onclick = removeBook;
    bookCard.appendChild(remove);

    var toggle = document.createElement('button');
    toggle.classList.add('toggle');
    toggle.textContent = 'Change Read Status';
    toggle.setAttribute('data-index', i);
    toggle.onclick = toggleRead;
    bookCard.appendChild(toggle);


    document.getElementById('grid').appendChild(bookCard);
  }
}

function removeBook() {
  var index = this.dataset.index;
  myLibrary.splice(index, 1);
  addBookToDOM();
}



function toggleRead()  {
  var index = this.dataset.index;
  myLibrary[index].toggleReadStatus();
  addBookToDOM();
}


const bookName = document.getElementById('name');
bookName.addEventListener("input", function () {
  if (bookName.validity.valueMissing) {
    bookName.setCustomValidity('Field Must Not Be Empty');
    bookName.reportValidity();
  } else {
    email.setCustomValidity('');
  }
})

const enter = document.getElementById('enter');

enter.addEventListener('click', function(event) {
  if(!bookName.validity.valid) {
    bookName.reportValidity();
  } else {
    addBookToLibrary();
  }
})


