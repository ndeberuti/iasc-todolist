const { check } = require('./controller/healthController');
const { create } = require('./controller/todoListController');

const bind = (app) => {
    app.get('/health', check);
    app.get('/list', create);
}

module.exports = {
    bind
}