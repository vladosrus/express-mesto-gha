const { INTERNAL_SERVER_ERROR = 500, BAD_REQUEST = 400 } = process.env;
const { isCelebrateError } = require('celebrate');

// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  if (isCelebrateError(err)) {
    res.status(BAD_REQUEST).send({ message: 'Переданы некорректные данные' });
  } else if (err.statusCode) {
    res.status(err.statusCode).send({ message: err.message });
  } else {
    res.status(INTERNAL_SERVER_ERROR).send({ message: 'Произошла ошибка' });
  }
};
