const Router = require("express");
const router = new Router();
const UserSchema = require("../models/user");

const userService = {
  async getUsers(req, res) {
    console.log("get");
    try {
      const users = await UserSchema.find();
      return res.status(200).json({ statusCode: 0, users });
    } catch (error) {
      console.log(error);
    }
  },
  async addUser(req, res) {
    console.log("post");
    try {
      const { username, email, age, country } = req.body;
      if (!username || !email || !age || !country) {
        return res
          .status(400)
          .json({ errorMessage: "All input must be not empty" });
      }
      const user = new UserSchema({
        id: Date.now(),
        username,
        email,
        age,
        country,
      });
      user.save();
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  },
  async removeUser(req, res) {
    console.log("delete");
    try {
      const user = await UserSchema.findOne({ id: req.query.id });
      if (!user) {
        return res.status(404).json({ message: "User not find" });
      }
      user.remove();
      return res
        .status(200)
        .json({ statusCode: 0, message: "User has been deleted" });
    } catch (error) {
      console.log(error);
    }
  },
  async updateUser(req, res) {
    console.log("put");
    try {
      const { username, email, age, country, _id } = req.body;
      const user = await UserSchema.findOne({ _id });
      if (!user) {
        return res.status(404).json({ message: "User not find" });
      }
      user.username = username;
      user.email = email;
      user.age = age;
      user.country = country;
      user.save();
      return res.status(200).json({ statusCode: 0, user });
    } catch (error) {
      console.log(error);
    }
  },
};

router.post("/user", userService.addUser);
router.delete("/user", userService.removeUser);
router.put("/user", userService.updateUser);
router.get("/users", userService.getUsers);

module.exports = router;
