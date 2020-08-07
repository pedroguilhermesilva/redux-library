export function reservedBooks(books) {
  return {
    type: "@books/RESERVED_BOOKS",
    books,
  };
}

export function deleteReserveBook(books) {
  return {
    type: "@books/DELETE_BOOKS",
    books,
  };
}
