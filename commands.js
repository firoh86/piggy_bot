// at the top of your file
const Discord = require("discord.js");
const exampleEmbed = new Discord.MessageEmbed(receivedEmbed)
  .setColor("#0099ff")
  .setTitle("Some title")
  .setURL("https://discord.js.org/");

module.exports = exampleEmbed;
