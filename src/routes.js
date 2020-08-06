import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Books from "./pages/Books/index";
import SavedBooks from "./pages/SavedBooks/index";
import Login from "./pages/Login/index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Books} />
        <Route path="/livros-salvos" component={SavedBooks} />
        <Route path="/login" exact component={Login}></Route>
      </Switch>
    </BrowserRouter>
  );
}
