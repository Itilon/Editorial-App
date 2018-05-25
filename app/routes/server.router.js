const { Router } = require('express');

const attach = (app, controllers) => {
    const router = new Router();

    const postController = controllers.postController;

    router
        .get('/', postController.getHome);

    app.use('/', router);
};

module.exports = attach;