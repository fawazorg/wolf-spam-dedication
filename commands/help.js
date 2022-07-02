const { Command } = require("wolf.js");
const { api } = require("../bot");
const { isBanded } = require("../utility/spam");

const COMMAND_TRIGGER = "command_help";
const COMMAND_RESPONSE = "message_help";

Help = async (api, command) => {
  // spam
  let okay = isBanded(command.sourceSubscriberId);
  if (okay) {
    return;
  }
  console.log(okay);
  await api
    .messaging()
    .sendMessage(
      command,
      api
        .phrase()
        .getByLanguageAndName(command.language, COMMAND_RESPONSE)
        .join("\n")
    );
};

module.exports = new Command(COMMAND_TRIGGER, {
  both: (command) => Help(api, command),
});
