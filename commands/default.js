const { Command } = require("wolf.js");
const { api } = require("../bot");
const { isBanded } = require("../utility/spam");

const COMMAND_TRIGGER = "command_default";
const COMMAND_RESPONSE = "message_default";

Default = async (api, command) => {
  //spam
  let okay = isBanded(command.sourceSubscriberId);
  console.log(okay);
  if (okay) {
    return;
  }
  await api
    .messaging()
    .sendMessage(
      command,
      api.phrase().getByLanguageAndName(command.language, COMMAND_RESPONSE)
    );
};

module.exports = new Command(COMMAND_TRIGGER, {
  both: (command) => Default(api, command),
});
