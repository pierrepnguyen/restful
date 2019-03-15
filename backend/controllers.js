const Task = require('./models');

module.exports = {

    index: (req, res) => {
        Task.find()
            .then (data => res.json(data))
            .catch(err => res.json(err))
    },

    info: (req, res) => {
        Task.find({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    news: (req, res) => {
        Task.create({title: req.body.title, description: req.body.description, completed: req.body.completed})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    remove: (req, res) => {
        Task.findOneAndRemove({_id: req.params.id})
            .then(data =>  res.json(data))
            .catch(err => res.json(err))
    },

    update: (req, res) => {
        Task.updateOne({title: req.body.title, description: req.body.description, completed: req.body.completed})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }

}