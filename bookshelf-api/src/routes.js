const addBookHandler = require('./handler/addBook');
const deleteBookById = require('./handler/deleteBookById');
const editBookById = require('./handler/editBookById');
const showAllBook = require('./handler/showAllBook');
const showBookById = require('./handler/showBookById');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: showAllBook,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: showBookById,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookById,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookById,
  },
];

module.exports = routes;
