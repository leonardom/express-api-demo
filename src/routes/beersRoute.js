const express = require('express')
const router = express.Router();
const controller = require('../controllers/beersController')

router.post('/', controller.create)
router.get('/:id', controller.find)
router.get('/', controller.findAll)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

module.exports = router
