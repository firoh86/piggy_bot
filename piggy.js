const Discord = require("discord.js");
const client = new Discord.Client();
const channel = client.channels.cache.get("843550410299801611");
const exampleEmbed = new Discord.MessageEmbed()
  .setColor("#0099ff")
  .setTitle("Some title")
  .setURL("https://discord.js.org/");

const prefix = "!";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (!msg.content.startsWith(prefix)) return;
  const args = msg.content.slice(prefix.length, msg.length);

  switch (args) {
    case "help":
      msg.channel.send({ embed: exampleEmbed });
      break;

    case "cheerios":
      msg.reply("Oink Oink!");

      break;
    case "twitch":
      msg.reply("[twitch channel](http://example.com)");

      break;
    default:
      msg.reply("ask me somthing");

      break;
  }
});

client.login("ODQzNDk5NDgwMjA0NTc0NzYx.YKEwGw.7vNWM1eeZlNzs7x0IifyLxBESdo");
