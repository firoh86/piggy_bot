//discord modules import
const Discord = require("discord.js");
const bot = new Discord.Client();
const token = require("./token");
const channel = bot.channels.cache.get(token.channelcache);
//import own modules
const images = require("./images");
const imagLenght = Object.keys(images).length;

const piggyframe =
  "https://static.wixstatic.com/media/6ddbfe_4b7e2879e94b45c89fceb47627f59369~mv2.jpeg/v1/fill/w_524,h_453,al_c,q_90/6ddbfe_4b7e2879e94b45c89fceb47627f59369~mv2.jpeg";
const cry = "<a:cry:844507733394849802>";
const prefix = "!";

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", (msg) => {
  if (!msg.content.startsWith(prefix)) return;
  const args = msg.content.slice(prefix.length, msg.length);

  if (args === "rush") {
    let cheeriosEmbed = new Discord.MessageEmbed()
      .setColor("#7500F2")
      .setTitle("Gracias a todos recibí muchos cheerrrrios!!! muchas gracias")
      .setImage(
        "https://i.pinimg.com/originals/bc/c6/8c/bcc68cd9d2c993c192ce2e55dad9255d.jpg"
      );

    msg.channel
      .send("Tengo hambre, oink! ¿Qué me regalarías para comer?.")
      .then(() => {
        msg.channel
          .awaitMessages((response) => response.content === "cheerios", {
            max: 10,
            time: 30000,
            errors: ["time"],
          })
          .then(() => {
            msg.channel.send({ embed: cheeriosEmbed });
          })
          .catch(() => {
            msg.channel.send("Jops, nadie me regaló un cheerio!");
          });
      });
    return;
  }

  switch (args) {
    case "comandos":
      let comandEmbed = new Discord.MessageEmbed()
        .setColor("#7500F2")
        .setTitle("Lista de comandos de piggy")
        .setDescription("Todas las interacciones prueba alguna")
        .addFields({
          name: "\u200b",
          value: "\u200b",
          inline: false,
        })
        .setThumbnail(`${piggyframe}`)
        .addFields(
          {
            name: "!comandos",
            value: "lista de comandos",
            inline: false,
          },
          { name: "!gif", value: "piggy te envia amor", inline: false },
          {
            name: "!chao piggy",
            value: "avisar a piggy de que te vas a dormir",
            inline: false,
          },
          { name: "!twitch", value: "enlace a twitch", inline: false },
          { name: "!youtube", value: "enlace a youtube", inline: false },
          {
            name: "!rush",
            value: "empieza a recolectar cheerios para piggy",
            inline: false,
          }
        );
      msg.channel.send({ embed: comandEmbed });
      break;
    case "gif":
      let picEmbed = new Discord.MessageEmbed()
        .setColor("#7500F2")
        .setTitle("i am a cutie")
        .setImage(images[Math.floor(Math.random() * imagLenght)])
        .setFooter("you can request another cute pig-gif");
      msg.channel.send({ embed: picEmbed });
      break;

    case "chao piggy":
      msg.channel.send(`oink oink! ${cry} ${cry}`);
      break;
    case "twitch":
      let twitchEmbed = new Discord.MessageEmbed()
        .setColor("#7500F2")
        .setTitle("Twitter")
        .setURL("https://www.twitch.tv/firoh860")
        .setFooter("Uneté al aula de estudio para aprender juntos!");
      msg.channel.send({ embed: twitchEmbed });

      break;
    case "youtube":
      let youtubeEmbed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("Youtube")
        .setURL("https://www.youtube.com/channel/UCSUQElPLXKbHRQfm1RXkR9w")
        .setFooter("Videos de todo tipo, incluso dibujos!");
      msg.channel.send({ embed: youtubeEmbed });
      break;
    default:
      msg.reply("¿Qué quieres saber?");
      break;
  }
});

bot.login(token.token);
