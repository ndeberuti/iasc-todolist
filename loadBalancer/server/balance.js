// TODO implementar esto bien en otro modulo
const dictionary = (key) => {
  const objectLiteral = {
    someKey: 'http://localhost:3000',
  };
  return objectLiteral[key];
};
const pickShard = (req) => {
  let body = '';
  let key;
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', () => {
    const parsedBody = JSON.parse(body);
    // TODO definir que va aca
    key = parsedBody.key;
  });

  return dictionary[key];
};

module.exports = {
  pickShard,
};
