const Discord = require("discord.js");
module.exports = {
  name: "kick",
  description: "this command bans a member from your server",
  async execute(client, message, args, Discord) {
    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send(
        "You do not have permission to use this command!"
      );
    let member = message.mentions.members.first();
    if (!member) return message.channel.send("Please mention a valid member");
    if (!member.kickable) {
      return message.channel.send(
        "I cannot kick this user! Do they have a higher role? Do I have kick permissions?"
      );
    }
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reason provided";
    await member
      .kick(reason)
      .catch((error) =>
        message.channel.send(
          `Sorry ${message.author} I couldn't kick because of : ${error}`
        )
      );
    message.channel.send(
      `${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`
    );
  },
};
