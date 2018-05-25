init = (data) => {
    const postController = require('./post.controller')(data);

    const controller = {
        postController
    };

    return controller;
};

module.exports = init;