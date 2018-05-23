const Beer = require('../models/beer')

module.exports = {
  create: (req, res, next) => {
    let beer = new Beer(req.body)

    beer.save()
      .then(saved => res.json(saved))
      .catch(e => next(e))
    
  },

  find: (req, res, next) => {
    Beer.findById(req.params.id)
      .then(user => res.json(user))
      .catch(e => next(e))
  },

  findAll: (req, res) => {
    Beer.find()
      .then(users => res.json(users))
      .catch(e => next(e))
  },

  update: (req, res, next) => {
    Beer.findById(req.params.id)
      .then( found => {
        found.set(req.body)
        found.save()
          .then(saved => res.json(saved))
          .catch(e => next(e))
      })
      .catch(e => next(e))
  },

  delete: (req, res) => {
    Beer.findByIdAndRemove(req.params.id)
      .then(deleted => {
        res.json({
          message: 'Beer deleted',
          id: deleted._id
        })
      })
      .catch(e => next(e))
  }
}