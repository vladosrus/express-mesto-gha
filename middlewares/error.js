const { INTERNAL_SERVER_ERROR } = process.env;

module.exports = (err, req, res) => {
  console.log(err);
  if (err.statusCode) {
    res.status(err.statusCode).send({ message: err.message });
  } else {
    res.status(INTERNAL_SERVER_ERROR).send({ message: 'Произошла ошибка' });
  }
};
