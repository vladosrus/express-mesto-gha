// Создание сервера
const express = require('express');

const app = express();

const { PORT = 3000, MONGODB_URL = 'mongodb://localhost:27017/mestodb' } = process.env;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Роутеры
const routerUsers = require('./routes/users');
const routerCards = require('./routes/cards');
const routerError = require('./routes/error');

// Подключение к серверу mongoDB
mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
});

// Временное решение авторизации пользователя
app.use((req, res, next) => {
  req.user = {
    _id: '632b565d7dbd8b437d7c8223',
  };

  next();
});

app.use(bodyParser.json());

app.use('/', routerUsers);
app.use('/', routerCards);

// Обработка неправильного пути
app.use('*', routerError);

app.listen(PORT);
