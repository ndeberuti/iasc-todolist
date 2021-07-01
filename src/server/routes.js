const { check } = require('./controller/healthController')

const bind = (app) => {
    app.get('/health', check)
}

module.exports = {
    bind
}