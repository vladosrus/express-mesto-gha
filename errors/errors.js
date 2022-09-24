const defaultError = (res) => {
  res.status(500).send({ message: "Произошла ошибка" });
};

const validationError = (err, res) => {
  if (err.name === "ValidationError") {
    res.status(400).send({ message: "Переданы некорректные данные" });
  }
};

const notFound = new Error();
notFound.name = "DocumentNotFoundError";
notFound.message = "Объект c указанным _id не найден";

const notFoundError = (err, res) => {
  if (err.name === "DocumentNotFoundError") {
    res.status(404).send({ message: err.message });
  }
};

module.exports = {
  defaultError,
  validationError,
  notFoundError,
  notFound,
};
