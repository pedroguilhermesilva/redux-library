import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";

import Header from "../../components/Header";
import "./styles.css";

import { books } from "../../api/index";

export default function Books() {
  const [data, setData] = useState([]);

  const history = useHistory();
  // const dispatch = useDispatch();

  const checkedBooks = (checked, book) => {
    if (checked) {
      data.push(book);
    } else {
      const deleteBook = data.filter((hasBook) => hasBook.isbn !== book.isbn);
      setData(deleteBook);
    }
  };

  const submitForm = (value) => {
    value.preventDefault();

    if (data.length > 0) {
      console.log(data);
      // dispatch(BooksActions.reserveBooks(dataChange));
      history.push("/login");
    } else {
      alert("É preciso selecionar no mínimo um livro");
    }
  };

  return (
    <>
      <Header />
      <div className="main-container">
        <form onSubmit={submitForm}>
          <h1>Livros</h1>
          <ul>
            {books.map((book) => (
              <label key={book.isbn}>
                <input
                  type="checkbox"
                  onChange={(e) => checkedBooks(e.target.checked, book)}
                />
                <li>
                  <strong>LIVROS:</strong>
                  <p>{book.name}</p>

                  <strong>Descrição:</strong>
                  <p>{book.drescription}</p>

                  <strong>ISBN:</strong>
                  <p>{book.isbn}</p>
                </li>
              </label>
            ))}
          </ul>
          <button className="button" type="submit">
            Comprar livros
          </button>
        </form>
      </div>
    </>
  );
}
