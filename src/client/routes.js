const path = require('path');

const root = { root: path.join(__dirname, '/views') };

const bind = (app) => {
  app.get('/login', (req, res) => {
    res.sendFile('Login.html', root);
  });

  app.get('/inicio', (req, res) => {
    res.sendFile('Inicio.html', root);
  });

  app.get('/listas', (req, res) => {
    res.sendFile('Listas.html', root);
  });

  app.get('/lista', (req, res) => {
    res.sendFile('ListaTares.html', root);
  });
};

module.exports = {
  bind,
};
