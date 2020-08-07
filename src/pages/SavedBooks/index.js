import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import crypton from "crypto";

import { FiTrash2 } from "react-icons/fi";
import "./styles.css";

import Header from "../../components/Header";

import * as BooksActions from "../../store/modules/books/actions";

export default function SavedBooks() {
  // const selectedBooks = useSelector((state) => state.reservedBooks);

  const history = useHistory();
  const dispatch = useDispatch();

  const selectedBooks = useSelector((state) => state.reservedBooks);

  const handleDeleteBook = (book) => {
    const deleteValue = selectedBooks.filter(
      (deleteBook) => deleteBook.isbn !== book.isbn
    );
    dispatch(BooksActions.deleteReserveBook(deleteValue));
  };

  const submitForm = (value) => {
    value.preventDefault();
    alert(
      "Seu código de confirmação é: " + crypton.randomBytes(4).toString("HEX")
    );
    history.push("/");
  };

  return (
    <div className="selected-books-container">
      <Header bookPage />

      <form onSubmit={submitForm}>
        <h1>Minha reserva</h1>
        <ul>
          {selectedBooks.map((books) => (
            <li key={books.isbn}>
              <strong>LIVROS:</strong>
              <p>{books.name}</p>

              <strong>DESCRIÇÃO:</strong>
              <p>{books.dresciption}</p>

              <strong>ISBN:</strong>
              <p>{books.isbn}</p>

              <strong>Data locação:</strong>
              <p>{books.reserved_At}</p>

              <button onClick={() => handleDeleteBook(books)} type="button">
                <FiTrash2 size={20} color="a8a8b3" />
              </button>
            </li>
          ))}
        </ul>
        <button className="button" type="submit">
          Reservar
        </button>
      </form>
    </div>
  );
}
