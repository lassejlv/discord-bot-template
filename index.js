require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

// bot settings
const token = process.env.TOKEN;
const invite = process.env.INVITE;
const prefix = process.env.PREFIX;

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
["command_handler", "event_handler"].forEach((handler) => {
  require(`./handlers/${handler}`)(client, Discord);
});

client.login(token);
