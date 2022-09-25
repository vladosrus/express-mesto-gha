const { BAD_REQUEST = 400, NOT_FOUND = 404, INTERNAL_SERVER_ERROR = 500 } = process.env;

const notFound = new Error();
notFound.name = 'DocumentNotFoundError';

const validationError = (res) => {
  res.status(BAD_REQUEST).send({ message: 'Переданы некорректные данные' });
};

const notFoundError = (res) => {
  res.status(NOT_FOUND).send({ message: 'Объект c указанным _id не найден' });
};

const defaultError = (res) => {
  res.status(INTERNAL_SERVER_ERROR).send({ message: 'Произошла ошибка' });
};

module.exports = {
  defaultError,
  validationError,
  notFoundError,
  notFound,
};
