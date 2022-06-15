const Joke = require('../models/joke.model')

module.exports = {
  createNew: (req, res) => {
    Joke.create(req.body)
      .then(newJoke => {
        console.log(newJoke)
        res.json(newJoke)
      })
      .catch(err => console.log(err))
  },

  getAll: (req, res) => {
    Joke.find({})
      .then(allJokes => res.json(allJokes))
      .catch(err => console.log(err))
  },

  getOne: (req, res) => {
    Joke.findOne({ _id: req.params.id })
      .then(getOneJokes => {
        res.json(getOneJokes)
      })
      .catch(err => console.log(err))
  },

  updateJoke: (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params._id }, req.body, {
      new: true,
      runValidators: true
    })
      .then(updatedJoke => res.json(updatedJoke))
      .catch(err => console.log(err))
  },

  deleteJoke: (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
      .then(result => res.json(result))
      .catch(err => console.log(err))
  }
}
