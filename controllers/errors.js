const requestError = (req, res) => {
  res.status(404).send({ message: 'Неправильный путь' });
};

module.exports = requestError;
