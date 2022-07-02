const Default = require("./default");
const Help = require("./help");
const Commands = [Help];

Default.children = Commands;

module.exports = Default;
