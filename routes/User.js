const express = require("express");

const app = express.Router();

// client로 부터 받은 정보를 넣기 위해서 사용하는 모듈
const bodyParser = require("body-parser");

// application/x-www-form-urlencoded 을 분석해서 정보를 넣어줌
app.use(express.urlencoded({ extended: true }));

// application/json으로 들어오는 정보들을 넣기 위해서 사용하는 코드
app.use(bodyParser.json());

const { User } = require("../models");

app.post("/register", (req, res) => {
  // 회원 가입시 필요한 정보들을 client에서 가져오면, 그것들을 데이터 베이스에 넣어준다.

  // model의 user 테이블을 가져오는것 & req.body로 데이터가 들어오는이유는 body-parser 덕분
  const user = new User(req.body);
});

module.exports = router;
