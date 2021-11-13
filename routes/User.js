const express = require("express");

const app = express.Router();

// client로 부터 받은 정보를 넣기 위해서 사용하는 모듈
const bodyParser = require("body-parser");

// application/x-www-form-urlencoded 을 분석해서 정보를 넣어줌
app.use(express.urlencoded({ extended: true }));

// application/json으로 들어오는 정보들을 넣기 위해서 사용하는 코드
app.use(bodyParser.json());

const { User } = require("../models");

app.post("/register", async (req, res) => {
  // 회원 가입시 필요한 정보들을 client에서 가져오면, 그것들을 데이터 베이스에 넣어준다.

  // model의 user 테이블을 가져오는것 & req.body로 데이터가 들어오는이유는 body-parser 덕분
  const user = new User(req.body);

  // moongo 에서는 if(user.isModified('passoword')) {} -> 비밀번호를 바꿀때만 비밀번호를 암호화한다. mysql에서는 change()

  bcrypt.hash(password, 10).then(async (hash) => {
    await Users.create({
      email,
      username,
      nickname,
      password: hash,
      checkingPassword: hash,
    });
    res.json("SUCCESS, NOW YOU GET YOUR ID");
    console.log("Success");
  });
});

app.post("/login", (req, res) => {
  // 1. 요청된 이메일을 디비에 있는지 찾기
  user.findOne(
    {
      email: req.body.email,
    },
    (err, user) => {
      if (!user) {
        return res.json({
          loginSuccess: false,
          message: "제공된 이메일에 해당 유저가 없습니다.",
        });
      }
    }
  );
  // 2. 요청된 이메일을 디비에 있다면, 비밀번호가 맞는 비밀번호인지 확인
  user.comparePassword(req.body.password, (err, isMatch) => {});

  // 3. 비번까지 맞다면 토큰 생성 하기
});

module.exports = router;
