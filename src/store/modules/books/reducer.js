const INITIAL_STATE = {
  reservedBooks: [],
};

export default function books(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@books/RESERVED_BOOKS":
      const today = new Date().getTime();
      const dateTimeFormat = new Intl.DateTimeFormat("pt-BR").format(today);
      const booksWithDate = action.books.map((book) => {
        const newBooks = { ...book, reserved_At: dateTimeFormat };
        return newBooks;
      });
      return {
        ...state,
        reservedBooks: booksWithDate,
      };
    case "@books/DELETE_BOOKS":
      return {
        ...state,
        reservedBooks: action.books,
      };
    default:
      return state;
  }
}
