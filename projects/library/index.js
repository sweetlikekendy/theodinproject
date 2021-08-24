function Book(title, author, pages, isRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.isRead = isRead
}

function Library() {
  this.books = []
}

Library.prototype.addBook = function (newBook) {
  if (!this.isInLibrary(newBook)) {
    this.books.push(newBook)
  }
}

Library.prototype.removeBook = function (title) {
  this.books = this.books.filter((book) => book.title !== title)
}

Library.prototype.findBook = function (title) {
  return this.books.filter((book) => book.title === title)
}

Library.prototype.toggleRead = function (title) {
  const book = this.findBook(title)

  if (book.length > 0) {
    book[0].isRead = !book[0].isRead
  }
}

Library.prototype.isInLibrary = function (newBook) {
  return this.books.some((book) => book.title === newBook.title)
}

const library = new Library()

// UI
const addBookForm = document.getElementById("add-book-form")
const errorMsg = document.getElementById("errorMsg")
const booksList = document.getElementById("book-list")
const title = document.getElementById("book-title")
const author = document.getElementById("book-author")
const pages = document.getElementById("book-pages")
const isRead = document.getElementById("book-isRead")

const updateBooksList = () => {
  resetBooksList()

  if (library.books.length > 0) {
    for (let book of library.books) {
      createBookCard(book)
    }
  } else {
    const emptyList = document.createElement("div")
    const title = document.createElement("h3")

    title.textContent = "No Books Read"

    emptyList.appendChild(title)
    booksList.appendChild(emptyList)
  }
}

const resetBooksList = () => {
  booksList.innerHTML = ""
}

const createBookCard = (book) => {
  const bookCard = document.createElement("div")
  const title = document.createElement("h3")
  const author = document.createElement("h3")
  const pages = document.createElement("h3")
  const readBtn = document.createElement("button")
  const removeBtn = document.createElement("button")

  bookCard.classList.add("book-list-item")
  title.textContent = book.title
  author.textContent = book.author
  pages.textContent = book.pages
  removeBtn.textContent = `Remove`
  removeBtn.classList.add("btn", "btn-remove")
  removeBtn.onclick = removeBook

  if (book.isRead) {
    readBtn.textContent = `Read`
    readBtn.classList.add("btn", "btn-read")
  } else {
    readBtn.textContent = `Not Read`
    readBtn.classList.add("btn", "btn-unread")
  }

  readBtn.onclick = toggleRead

  bookCard.appendChild(title)
  bookCard.appendChild(author)
  bookCard.appendChild(pages)
  bookCard.appendChild(readBtn)
  bookCard.appendChild(removeBtn)
  booksList.appendChild(bookCard)
}

const createBookFromInput = () => {
  const titleValue = title.value
  const authorValue = author.value
  const pagesValue = pages.value
  const isReadValue = isRead.value

  return new Book(
    titleValue,
    authorValue,
    pagesValue,
    isReadValue === "off" ? true : false
  )
}

const clearAddBookForm = () => {
  const titleValue = (title.value = "")
  const authorValue = (author.value = "")
  const pagesValue = (pages.value = "")
  const isReadValue = (isRead.value = "off")
}

const addBook = (e) => {
  e.preventDefault()

  const newBook = createBookFromInput()

  if (library.isInLibrary(newBook)) {
    errorMsg.textContent = "Error: Book is already in library"
    errorMsg.classList.add("error-message")
    return
  }

  library.addBook(newBook)
  updateBooksList()
  clearAddBookForm()
}

const removeBook = (e) => {
  const title = e.target.parentNode.firstChild.innerHTML

  library.removeBook(title)
  updateBooksList()
}

const toggleRead = (e) => {
  const title = e.target.parentNode.firstChild.innerHTML
  const readBtn = document.getElementsByClassName("btn-read")[0]

  library.toggleRead(title)
  updateBooksList()
}
addBookForm.onsubmit = addBook
window.onload = updateBooksList
