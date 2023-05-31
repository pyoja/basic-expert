const express = require("express");

const authRouter = require("./routes/auth");
const { sequelize } = require("./models");

const app = express();

app.use(authRouter);

app.listen(3000, async () => {
  console.log("서버 시작");
  await sequelize.authenticate();
  console.log("DB연결완료");
});
