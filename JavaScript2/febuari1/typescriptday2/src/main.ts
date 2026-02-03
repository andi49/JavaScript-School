type Book = {
  author: string,
  title: string,
  favorite: boolean
}

const book:Book = {
  author: 'JK Rowling',
  title: 'Harry Potter',
  favorite: false
}

book.author = ''

const books:Book[] = []

type Test = {
  toggleFavorite: Function,
  name?: string
}

const test:Test = {
  toggleFavorite(){
    console.log(test)
  }, 
  name: 'Andi'
}

console.log(books)

interface BookInterface {
  author: string,
  title: string,
  favorite: boolean
}

interface Movie {
  title: string,
  director: string
}

const book2:BookInterface = {
  author: '',
  title: 'You',
  favorite: true
}

interface List <obj> {
  list: obj[],
  name: string
}


// Lista med bok
const bookList:List<Book> = {
  list: [book, book],
  name: 'boklista'
}

// list med movie
const movieList: List<Movie> = {
  list: [{title: '', director: ''}],
  name: 'filmlista'
}