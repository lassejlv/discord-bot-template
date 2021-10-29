require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require("chalk");
const fs = require("fs");

// bot settings
const token = process.env.TOKEN;
const invite = process.env.INVITE;
const prefix = process.env.PREFIX;

// colors for console
const neonColor = chalk.hex("#39ff14");

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    client.commands.get("ping").execute(message, args);
  } else if (command === "clear") {
    client.commands.get("clear").execute(message, args);
  }
});

client.once("ready", () => {
  console.log(neonColor("Bot is ready!"));
});

client.login(token);
