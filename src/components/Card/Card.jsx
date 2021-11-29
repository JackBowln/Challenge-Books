import React from "react"
import "./card.css"
import CardDetails from "./../Card Details/CardDetails"
const Card = (props) => {
  const openDetails = () => {
    closeModal()
    document.getElementById(`${props.id}`).style.display = "flex"
  }
  const closeModal = () => {
    document.querySelector(` .modal-background`).style.display = "none"
    document.querySelector(`.card-details`).style.display = "none"
    document.getElementById(`${props.id}`).style.display = "none"
  }
  return (
    <div>
      <div
        id="card"
        onClick={() => {
          openDetails()
        }}
      >
        <img src={props.imageUrl ? props.imageUrl.toString() : " "} alt="" />
        <div className="item">
          <h3>
            <strong>{props.bookTitle}</strong>
          </h3>
          <div className="book-authors">
            {[props.bookAuthor].map((author, index) => {
              return (
                <div key={index}>
                  <div>
                    {author + " "}
                    <br></br>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="book-specs">
            <div className="book-pages-count">{props.pageCount} páginas</div>
            <div className="book-publisher">Editora {props.publisher}</div>
            <div className="book-published-at">
              Publicado em{""}
              <span> {props.published}</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal-background"
        id={props.id}
        onClick={() => {
          closeModal()
        }}
      ></div>
      <CardDetails
        imageUrl={props.imageUrl}
        title={props.bookTitle}
        id={props.id}
        pageCount={props.pageCount}
        bookAuthor={props.author}
        publisher={props.publisher}
        language={props.language}
        isbn10={props.isbn10}
        isbn13={props.isbn13}
        description={props.description}
      />
    </div>
  )
}

export default Card
