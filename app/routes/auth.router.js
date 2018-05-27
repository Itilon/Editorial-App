const { Router } = require('express');

const attach = (app, controllers) => {
    const router = new Router();

    const userController = controllers.userController;

    router
        .post('/login', userController.login)

        .get('/dashboard/:id', userController.getDashboard);

    app.use('/', router);
};

module.exports = attach;