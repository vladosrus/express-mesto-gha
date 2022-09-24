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
    .catch((err) => validationError(err, res));
};

const getUser = (req, res) => {
  User.findById(req.params.userId)
    .orFail(notFound)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => notFoundError(err, res));
};

const updateUser = (req, res) => {
  User.findById(req.user._id)
    .orFail(notFound)
    .then(() => {
      User.updateOne(
        { _id: req.user._id },
        { $set: { name: req.body.name, about: req.body.about } },
      ).then(() => {
        User.findById(req.user._id).then((user) => res.send(user));
      });
    })
    .catch((err) => {
      validationError(err, res);
      notFoundError(err, res);
      defaultError(res);
    });
};

const updateAvatar = (req, res) => {
  User.findById(req.user._id)
    .orFail(notFound)
    .then(() => {
      User.updateOne(
        { _id: req.user._id },
        { $set: { avatar: req.body.avatar } },
      ).then(() => {
        User.findById(req.user._id).then((user) => res.send(user));
      });
    })
    .catch((err) => {
      validationError(err, res);
      notFoundError(err, res);
      defaultError(res);
    });
};

module.exports = {
  getUsers,
  createUser,
  getUser,
  updateUser,
  updateAvatar,
};
