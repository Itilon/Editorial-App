const { Router } = require('express');

const attach = (app, controllers) => {
    const router = new Router();

    const userController = controllers.userController;

    router
        .post('/login', userController.login)

    app.use('/', router);
};

module.exports = attach;