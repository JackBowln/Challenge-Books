import React, { useState, useEffect } from "react"
import Card from "../../components/Card/Card"
import Nav from "../../components/Nav/Nav"
import "./home.css"
import http from "../../services/axios"

const Home = () => {
  const [page, setPage] = useState(1)
  const [books, setBooks] = useState([])
  const [lastPage, setLastPage] = useState(1)
  useEffect(() => {
    const getBooks = () => {
      http
        .get(`/books?page=${page}&amount=12`)
        .then((res) => {
          console.log(res.data)
          setBooks(res.data.data)
          setLastPage(res.data.totalPages)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    getBooks()
  }, [page])
  const handleNextPage = () => {
    console.log(page)
    let nextPage = page
    setPage(nextPage + 1)
  }
  const handleLastPage = () => {
    console.log(page)
    let lastPage = page
    setPage(lastPage - 1)
  }
  return (
    <div className="container">
      <Nav />
      <div className="cards">
        {books.map((book) => {
          return (
            <Card
              key={book.id}
              id={book.id}
              imageUrl={book.imageUrl}
              bookTitle={book.title}
              bookAuthor={book.authors}
              pageCount={book.pageCount}
              publisher={book.publisher}
              published={book.published}
              isbn10={book.isbn10}
              isbn13={book.isbn13}
              description={book.description}
            />
          )
        })}
      </div>
      <div className="paginator">
        <span>
          Página <strong>{page}</strong> de{" "}
          <strong>{parseInt(lastPage)}</strong>
        </span>
        <button
          disabled={page === 1}
          onClick={() => {
            handleLastPage()
          }}
        >
          {"<"}
        </button>
        <button
          disabled={page === lastPage}
          onClick={() => {
            handleNextPage()
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  )
}

export default Home
