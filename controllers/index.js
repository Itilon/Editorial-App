init = (data) => {
    const postController = require('./post.controller')(data);
    const userController = require('./user.controller')(data);

    const controller = {
        postController,
        userController
    };

    return controller;
};

module.exports = init;