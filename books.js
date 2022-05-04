var myLibrary = [];

function Books(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
  this.info = function() {
    var output = title + ' by ' + author + ', ' + pages + ' pages, ' + hasRead;
    return output;
  }
};

function addBookToLibrary() {
  var name = document.getElementById('name');
  console.log(name);
}
