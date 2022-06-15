const JokeController = require('../controllers/joke.controller')

module.exports = app => {
  app.get('/api/jokes', JokeController.getAll),
    app.get('/api/jokes/:_id', JokeController.getOne),
    app.post('/api/jokes', JokeController.createNew),
    app.put('/api/jokes/:_id', JokeController.updateJoke),
    app.delete('/api/jokes/:_id', JokeController.deleteJoke)
}
