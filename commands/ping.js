module.exports = {
  name: "ping",
  description: "this is a ping command!",
  execute(message, args) {
    const mention = message.author.id;

    message.channel.send(`<@${mention}> hello!`);
  },
};
