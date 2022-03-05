const books = require('../book');

const showBookById = (request, h) => {
  const {id} = request.params;
  const book = books.filter((book) => book.id === id)[0];


  if (book === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    });
    response.code(404);
    return response;
  }
  const response = h.response({
    status: 'success',
    data: {
      book: book,
    },
  });
  response.code(200);
  return response;
};

module.exports = showBookById;
