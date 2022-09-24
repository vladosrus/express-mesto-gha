// Создание сервера
const express = require("express");
const app = express();

const { PORT = 3000, MONGODB_URL = "mongodb://localhost:27017/mestodb" } = process.env;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Роутеры
const routerUsers = require("./routes/users");
const routerUserId = require("./routes/userId");
const routerMe = require("./routes/me");
const routerAvatar = require("./routes/avatar");
const routerCards = require("./routes/cards");
const routerCardId = require("./routes/cardId");
const routerLikes = require("./routes/likes");

// Подключение к серверу mongoDB
mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
});

// Временное решение авторизации пользователя
app.use((req, res, next) => {
  req.user = {
    _id: "632b565d7dbd8b437d7c8223",
  };

  next();
});

app.use(bodyParser.json());

app.use("/users", routerUsers);
app.use("/", routerUserId);
app.use("/users/me", routerMe);
app.use("/users/me/avatar", routerAvatar);

app.use("/cards", routerCards);
app.use("/", routerCardId);
app.use("/", routerLikes);

app.listen(PORT);
