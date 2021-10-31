module.exports = {
  name: "clear",
  description: "this is a ping command!",
  execute(client, message, args, Discord) {
    if (!args[0]) {
      message.channel.bulkDelete(1);
      message.channel.send(
        new MessageEmbed()
          .setColor("#00ff00")
          .setDescription("✅ | Deleted **1** message")
      );
    } else {
      message.channel.bulkDelete(args[0]);
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("#00ff00")
          .setDescription(`✅ | Deleted **${args[0]}** messages`)
      );
    }
  },
};
