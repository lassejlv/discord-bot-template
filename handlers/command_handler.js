const fs = require("fs");
const chalk = require("chalk");

module.exports = (client, Discord) => {
  const command_files = fs
    .readdirSync("./commands/")
    .filter((file) => file.endsWith(".js"));

  for (const file of command_files) {
    const command = require(`../commands/${file}`);

    if (command.name) {
      client.commands.set(command.name, command);
    } else {
      console.log(chalk.red(chalk.red("[ERROR] ") + `${file} has no name!`));
    }
  }
};
