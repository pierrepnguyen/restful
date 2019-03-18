const controllers = require('./controllers');

module.exports = app => {
  app
    .get('/api/tasks', controllers.getAllTasks)
    .get('/api/tasks/:id', controllers.getOneTask)
    .post('/api/tasks', controllers.createTask)
    .put('/api/tasks/:id', controllers.updateTask)
    .delete('/api/tasks/:id', controllers.deleteTask);
}