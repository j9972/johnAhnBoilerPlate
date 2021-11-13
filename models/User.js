module.exports = (sequelize, DataTypes) => {
  const userSchema = sequelize.define("User", {
    name: {
      type: DataTypes.String,
      allowNull: false,
      maxlength: 50,
    },
    email: {
      type: DataTypes.String,
      allowNull: false,
      // 띄어쓰기 해도 붙여서 되게끔
      trim: true,
      // 이메일 중복 검사시 같은것은 안되게
      unique: true,
    },
    password: {
      type: DataTypes.String,
      allowNull: false,
      minlength: 5,
    },
    lastname: {
      type: DataTypes.String,
      allowNull: false,
      maxlength: 50,
    },
    // role을 주는 이유는 관리자와 일반 유저를 구별 -> number로 관리자와 유저 구별
    role: {
      type: DataTypes.Number,
      default: 0,
    },
    // 그 사람에 해당하는 이미지 ( obj 사용안하고 가능)
    image: DataTypes.String,
    // 토큰으로 나중에 유효성 관리
    token: {
      type: DataTypes.String,
    },
    // 토큰 유효기간
    tokenExp: {
      type: DataTypes.Number,
    },
  });

  return userSchema;
};
