require('dotenv').config();

// Создание сервера
const express = require('express');

const app = express();

const { PORT, MONGODB_URL } = process.env;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Мидлвэры
const auth = require('./middlewares/auth');
const error = require('./middlewares/error');

// Роутеры
const routerUsers = require('./routes/users');
const routerCards = require('./routes/cards');
const routerError = require('./routes/error');
const routerSignUp = require('./routes/signUp');
const routerSignIn = require('./routes/signIn');

// Подключение к серверу mongoDB
mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
});

app.use(bodyParser.json());
app.use(cookieParser());

app.use('/', routerSignUp);
app.use('/', routerSignIn);
app.use('/', auth, routerUsers);
app.use('/', auth, routerCards);

// Обработка неправильного пути
app.use('*', routerError);

app.use(error);

app.listen(PORT, () => console.log('Соединение установлено'));
