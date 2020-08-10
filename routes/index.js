//isinya routes/endpoint API kita
// routes bawaan dari express
const route = require('express').Router()

// import controller
const {
  home,
  getAll,
  getOne,
  register,
  edit,
  deleteUser
} = require('../controllers/index')

// menggunakan route bawaan express, dengan method GET, Post, dan HTTP method lainnya.
route.get('/', home)
route.get('/siswa', getAll)
route.get('/siswa/:id', getOne)
route.post('/siswa/register', register)
route.put('/siswa/:id', edit)
route.delete('/siswa/:id', deleteUser)

module.exports = route;
