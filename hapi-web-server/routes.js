/**
 * @function handler
 * @param request => objek yang menampung detail dari permintaan client
 * @param h => objek yang menampung method yang digunakan 
 *             untuk menanggapi sebuah permintaan client (harus mengembalikan nilai)
 */

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Homepage';
    }
  },
  {
    method: '*',
    path: '/',
    handler: (request, h) => {
      return 'Halaman tidak dapat diakses dengan method tersebut'
    }
  },
  {
    method: 'GET',
    path: '/about', 
    handler: (request, h) => {
      return 'About Page'
    }
  },
  {
    method: '*',
    path: '/about',
    handler: (request, h) => {
      return 'Halaman tidak dapat diakses dengan method tersebut';
    }
  },
  {
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
      const { name = "stranger" } = request.params;
      const { lang } = request.query;

      if(lang === 'id') {
        return `Hai, ${name}`;
      }
      return `Hello ${name}!`;
    }
  },
  {
    method: 'POST',
    path: '/login',
    handler: (request,h) => {
      const { username, password } = request.payload;
      return `Welcome ${username}!`;
    }
  },
  {
    method: 'POST',
    path: '/user',
    handler: (request, h) => {
      return h.response('created').code(201);
    }
  },
  {
    method: 'GET',
    path: '/blog',
    handler: (request, h) => {
      return h.response('success')
            .type('text/plain')
            .header('X-Custom', 'some-value')
    }
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
      return 'Halaman tidak ditemukan'
    }
  } 
];

module.exports = routes;