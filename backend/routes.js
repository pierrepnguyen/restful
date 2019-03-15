const controllers = require('./controllers');

module.exports = function(app) {
    app
        .get('/', controllers.index)
        .get('/:id', controllers.info)
        .post('/news', controllers.news)
        .put('/update/:id', controllers.update)
        .delete('/remove/:id', controllers.remove)
}