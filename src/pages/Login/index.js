import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import logoIn from "../../assets/login.svg";

import { user } from "../../api";

import "./styles.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const books = useSelector((state) => state.reservedBooks);

  const history = useHistory();

  function goToReserve(e) {
    e.preventDefault();

    if (password === user.password && email === user.email) {
      localStorage.setItem("user", email);
      history.push("/livros-salvos");
    } else {
      alert("Usuário não permitido");
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <img
          src={
            "https://zeedog.vteximg.com.br/arquivos/logo-zeedog.png?v=637242003751900000"
          }
          alt="Be The Hero"
        />

        <p className="back-link">Livros selecionados: {books.length}</p>

        <form onSubmit={goToReserve}>
          <h1>Entre com sua conta</h1>

          <input
            type="email"
            placeholder="Seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>
        </form>
      </section>
      <img className="image-Login" src={logoIn} alt="Heroes" />
    </div>
  );
}
