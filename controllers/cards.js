const {
  defaultError,
  validationError,
  notFoundError,
  notFound,
} = require('../errors/errors');
const Card = require('../models/card');

const getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send(cards))
    .catch(() => defaultError(res));
};

const createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send(card))
    .catch((err) => validationError(err, res));
};

const deleteCard = (req, res) => {
  Card.findById(req.params.cardId)
    .orFail(notFound)
    .then(() => {
      Card.remove({ _id: req.params.cardId }).then(() => {
        res.send({ message: 'Карточка удалена' });
      });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        defaultError(res);
        return;
      }
      notFoundError(err, res);
      defaultError(res);
    });
};

const likeCard = (req, res) => {
  Card.findById(req.params.cardId)
    .orFail(notFound)
    .then(() => {
      Card.updateOne(
        { _id: req.params.cardId },
        { $addToSet: { likes: req.user._id } },
      ).then(() => {
        Card.findById(req.params.cardId).then((card) => res.send(card));
      });
    })
    .catch((err) => {
      notFoundError(err, res);
      defaultError(res);
    });
};

const dislikeCard = (req, res) => {
  Card.findById(req.params.cardId)
    .orFail(notFound)
    .then(() => {
      Card.updateOne(
        { _id: req.params.cardId },
        { $pull: { likes: req.user._id } },
      ).then(() => {
        Card.findById(req.params.cardId).then((card) => res.send(card));
      });
    })
    .catch((err) => {
      notFoundError(err, res);
      defaultError(res);
    });
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
