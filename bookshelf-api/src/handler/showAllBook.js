/* eslint-disable max-len */
/* eslint-disable prefer-const */
const books = require('../book');

const showAllBook = (request, h) => {
  const {name, reading, finished} = request.query;

  if (reading) {
    const booksReading = books.filter((book) => book.reading == reading);
    const response = h.response({
      status: 'success',
      data: {
        books: booksReading.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });
    response.code(200);
    return response;
  }

  if (finished) {
    const booksFinished = books.filter((book) => book.finished == finished);
    const response = h.response({
      status: 'success',
      data: {
        books: booksFinished.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });
    response.code(200);
    return response;
  }

  if (name) {
    const booksName = books.filter((book) => new RegExp(name, 'gi').test(book.name));
    const response = h.response({
      status: 'success',
      data: {
        books: booksName.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'success',
    data: {
      'books': books.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
      })),
    },
  });
  response.code(200);
  return response;
};
module.exports = showAllBook;
