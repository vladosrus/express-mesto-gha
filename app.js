require('dotenv').config();

// Создание сервера
const express = require('express');

const app = express();

const { PORT = 3000, MONGODB_URL = 'mongodb://localhost:27017/mestodb' } = process.env;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Мидлвэры
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
app.use('/', routerUsers);
app.use('/', routerCards);

// Обработка неправильного пути
app.use('*', routerError);

// Централизованный обработчик ошибок (основные ошибки + celebrate)
app.use(error);

app.listen(PORT);
