module.exports = {
    name: "ping",
    description: "this is a ping command!",
    execute(client, message, args, Discord) {
        message.channel.send("Pong!")
    },
  };
  