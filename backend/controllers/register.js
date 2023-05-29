const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Models/userSchema");

exports.register = async (req, res) => {
  try {
    const { fullName, email, password, birthDay, gender, phoneNumber, adress, city, country  } = req.body;
    const existuser = await User.findOne({ email: email });
    if (existuser) res.status(400).json({ msg: "you have an account" });
    const cryptpassword = await bcrypt.hash(password, 12);
    const newuser = new User({ fullName, email, password: cryptpassword, birthDay, gender, phoneNumber, adress, city, country  });
    const user = await newuser.save();
    const token = jwt.sign({ email, id: User._id }, process.env.secretKey, {
      expiresIn: "20min",
    });

    // const userbyid = await User.findOne({email});
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).send(error.message)
  }
};


