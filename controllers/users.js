const {
  defaultError,
  validationError,
  notFoundError,
  notFound,
} = require('../errors/errors');
const User = require('../models/user');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send(users))
    .catch(() => defaultError(res));
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        validationError(res);
      } else {
        defaultError(res);
      }
    });
};

const getUser = (req, res) => {
  User.findById(req.params.userId)
    .orFail(notFound)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        notFoundError(res);
      } else if (err.name === 'CastError') {
        validationError(res);
      } else {
        defaultError(res);
      }
    });
};

const updateUser = (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    { $set: { name: req.body.name, about: req.body.about } },
    { new: true, runValidators: true },
  )
    .orFail(notFound)
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        notFoundError(res);
      } else if (err.name === 'CastError' || err.name === 'ValidationError') {
        validationError(res);
      } else {
        defaultError(res);
      }
    });
};

const updateAvatar = (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    { $set: { avatar: req.body.avatar } },
    { new: true, runValidators: true },
  )
    .orFail(notFound)
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        notFoundError(res);
      } else if (err.name === 'CastError' || err.name === 'ValidationError') {
        validationError(res);
      } else {
        defaultError(res);
      }
    });
};

module.exports = {
  getUsers,
  createUser,
  getUser,
  updateUser,
  updateAvatar,
};
