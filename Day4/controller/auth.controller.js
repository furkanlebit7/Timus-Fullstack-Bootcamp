const { authService } = require("../services");

const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const user = authService.getUserByEmailAndPassword(email, password);
    if (user) {
      const accessToken = jwt.sign({ user }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      const refreshToken = jwt.sign({ user }, process.env.SECRET_KEY, {
        expiresIn: "1d",
      });
      res
        .cookie("refreshToken", refreshToken, {
          httpOny: true, //TODO: Araştır
          sameSite: "strict", //TODO: Araştır
        })
        .header("Authorization", accessToken)
        .status(200)
        .send();
    } else {
      res.status(401).send("Kullanıcı adı veya şifre hatalı!");
    }
  } else {
    res.status(400).send("Email ve şifre zorunludur!");
  }
};

exports.refresh = (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (refreshToken) {
    try {
      const { user } = jwt.verify(refreshToken, process.env.SECRET_KEY);
      //TODO: if(user) ekle
      const accessToken = jwt.sign({ user }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      res.header("Authorization", accessToken).status(200).send();
    } catch (error) {
      res.status(403).send("Refresh token süresi geçmiş!");
    }
  } else {
    res.status(401).send("Refresh token bulunamadı!");
  }
};

exports.logout = (req, res) => {
  const { token } = req.params;

  if (!token) {
    res.status(400).send("Token bulunamadı!");
  }

  const { user } = jwt.verify(token, process.env.SECRET_KEY);
  if (user) {
    res.clearCookie("refreshToken").status(200).send();
  }
};
