import React from "react";
import { useHistory } from "react-router-dom";
// import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { FiPower } from "react-icons/fi";

import "./styles.css";

export default function Header(props) {
  const { bookPage } = props;

  // const bookLength = useSelector((state) => state.reservedBooks);

  const history = useHistory();

  const loginOut = () => {
    localStorage.removeItem("user");
    history.push("/");
  };

  return (
    <div className="header-container">
      {!bookPage ? (
        <header>
          <img
            src={
              "https://zeedog.vteximg.com.br/arquivos/logo-zeedog.png?v=637242003751900000"
            }
            alt="Zee-Dog"
          />
        </header>
      ) : (
        <header>
          <img
            src={
              "https://zeedog.vteximg.com.br/arquivos/logo-zeedog.png?v=637242003751900000"
            }
            alt="Zee-Dog"
          />
          {/* <span>Livros no carrinho: {bookLength.length}</span> */}
          <span>Livros no carrinho:</span>
          <span style={{ textAlign: "end" }}>
            Bem vindo, <br />
            {localStorage.getItem("user")}
          </span>
          <button type="button" onClick={loginOut}>
            <FiPower size={18} color="#E02041" />
          </button>
        </header>
      )}
    </div>
  );
}

Header.propTypes = {
  bookPage: PropTypes.bool,
};
