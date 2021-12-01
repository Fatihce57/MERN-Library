import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import AddBook from './components/addBook/AddBook'
import Books from './components/books/Books'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [books, setBooks] = useState([])
  const [book, setBook] = useState({
    bookName: '',
    author: '',
    quantity: '',
    department: '',
    comments: '',
  })

  useEffect(() => {
    fetch('/books')
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
      })
      .then((jsonRes) => setBooks(jsonRes))
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setBook((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      }
    })
  }

  const addBook = (e) => {
    e.preventDefault()
    const newBook = {
      bookName: book.bookName,
      author: book.author,
      quantity: book.quantity,
      department: book.department,
      comments: book.comments,
    }

    axios.post('/newbook', newBook)
    alert(`The Book ${book.bookName} is added`)
    setBook({
      bookName: '',
      author: '',
      quantity: '',
      department: '',
      comments: '',
    })
  }

  const deleteBook = (id) => {
    axios.delete('/delete/' + id)
    alert(`The book with id ${id} is deleted`)
  }

  const lendBook = (id) => {
    axios.put('/lend/' + id)
    alert(`The book with id ${id} is lended`)
  }

  const backBook = (id) => {
    axios.put('/back/' + id)
    alert(`The book with id ${id} is back`)
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Books
              books={books}
              deleteBook={deleteBook}
              lendBook={lendBook}
              backBook={backBook}
            />
          </Route>
          <Route path="/addbook">
            <AddBook
              book={book}
              handleChange={handleChange}
              addBook={addBook}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App
