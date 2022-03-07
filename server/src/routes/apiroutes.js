const express = require['express']
const router = express.Router()
const db = require('..models')

router.get('/all', (req, res) =>{
  db.Book.findAll().them(books => res.send(books))
})

module.exports = router