import React from "react"
import "./card-details.css"
const CardDetails = (props) => {
  const closeModal = () => {
    document.querySelector(`.card-details`).style.display = "none"
    document.getElementById(`${props.id}`).style.display = "none"
  }
  return (
    <div className="card-details" id={props.id}>
      <div
        className="close-button"
        onClick={() => {
          closeModal()
        }}
      >
        X
      </div>
      <img
        className="card-details-image"
        src={props.imageUrl ? props.imageUrl.toString() : " "}
        alt=""
      />
      <div className="book-details">
        <h2>{props.title}</h2>
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
        <div className="book-info">
          <strong>INFORMAÇÕES</strong>
          <div>
            <div>
              <strong>Páginas</strong>
              <div>{props.pageCount} páginas</div>
            </div>
            <div>
              <strong>Editora</strong>
              <div>Editora {props.publisher}</div>
            </div>
            <div>
              <strong>Publicação</strong>
              <div>{props.pageCount}</div>
            </div>
            <div>
              <strong>Idioma</strong>
              <div>{props.language}</div>
            </div>
            <div>
              <strong>Título Original</strong>
              <div>{props.title}</div>
            </div>
            <div>
              <strong>ISBN-10</strong>
              <div>{props.isbn10} </div>
            </div>
            <div>
              <strong>ISBN-13</strong>
              <div>{props.isbn13} </div>
            </div>
          </div>
        </div>
        <div className="book-description">
          <strong>INFORMAÇÕES</strong>

          <div>{props.description}</div>
        </div>
      </div>
    </div>
  )
}

export default CardDetails
