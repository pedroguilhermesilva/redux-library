import { createStore } from "redux";

import books from "./modules/books/reducer";

export default createStore(
  books,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
