const { WOLFBot } = require("wolf.js");
const api = new WOLFBot();
require("dotenv").config();

module.exports = { api };

api.on("loginSuccess", (user) => {
  console.log(`login @ ${user.id}`);
});

api.login(process.env.EMAIL, process.env.PASSWORD);
