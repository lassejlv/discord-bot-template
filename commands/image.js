const Discord = require("discord.js");
const Scraper = require("images-scraper");
const config = require("../config.json");

module.exports = {
  name: "image",
  alliases: ["img"],
  description: "search images",
  async execute(client, message, args, Discord) {
    const google = new Scraper({
      puppeteer: {
        headless: true,
      },
    });
    const query = args.join(" ");
    if (!query) return message.channel.send("Please enter a query!");

    const results = await google.scrape(query, 1);
    message.channel.send(
      new Discord.MessageEmbed()
        .setImage(results[0].url)
        .setColor(config.colors.teal)
    );
  },
};
