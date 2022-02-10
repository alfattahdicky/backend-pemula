/**
 * @description menyimpan fungsi handler pada berkas routes
 */

const { nanoid } = require('nanoid');
const notes = require('./notes');

/**
 * Handle CORS(Cross Origin Resource Sharing) dengan cara biasa
 */

// const handleCORS = (request, h) => {
//   const response = h.response({
//     error: false,
//     message: 'Catatan berhasil ditambakan',
//   });
//   response.header('Access-Control-Allow-Origin', '*');
//   return response;
// };

/**
 * handler menambah note
 */

const addNoteHandler = (request, h) => {
  // data yang dikirim dalam bentuk JSON melalui body request
  const { title, tags, body } = request.payload;
  // membuat id, createdAt, updatedAt
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    title, tags, body, id, createdAt, updatedAt,
  };

  notes.push(newNote);

  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  // isSuccess id exist maka akan mengirim data
  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil ditambahkan',
      data: {
        noteId: id,
      },
    });
    response.code(201);
    return response;
  }

  // jika tidak ada id pada isSuccess mengirim status fail
  const response = h.response({
    status: 'failed',
    message: 'Catatan gagal ditambahkan',
  });
  response.code(500);
  return response;
};

/**
 * handler untuk mengambil semua data notes
 */

const getAllNotesHandler = () => ({
  status: 'success',
  data: {
    notes,
  },
});

/**
 * handler untuk menampilkan catatan berdasarkan id
 */

const getNoteByIdHandler = (request, h) => {
  const { id } = request.params;
  const note = notes.filter((n) => n.id === id)[0];

  if (note !== undefined) {
    return {
      status: 'success',
      data: {
        note,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan tidak dapat ditemukan',
  });
  response.code(404);
  return response;
};

/**
 * handler untuk mengubah catatan berdasarkan id
 */

const editNoteByIdHandler = (request, h) => {
  const { id } = request.params;

  const { title, tags, body } = request.payload;
  const updatedAt = new Date().toISOString();

  const index = notes.findIndex((note) => note.id === id);
  console.log(index);

  if (index !== -1) {
    notes[index] = {
      ...notes[index],
      title,
      tags,
      body,
      updatedAt,
    };
    console.log(notes[index]);
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil diperbaharui',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbaharui catata. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

/**
 * handler untuk menghapus catatan berdasarkan id
 */

const deleteNoteByIdHandler = (request, h) => {
  const { id } = request.params;

  const index = notes.findIndex((n) => n.id === id);

  if (index !== -1) {
    notes.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'catatan berhasil dihapus',
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'catatan gagal dihapus',
  });
  response.code(404);
  return response;
};

module.exports = {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
};
