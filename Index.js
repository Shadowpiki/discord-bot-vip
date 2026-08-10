// index.js
require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Cuando el bot se conecta
client.once("ready", () => {
  console.log(`✅ ThaliraBot está en línea como ${client.user.tag}`);
});

// Comandos básicos
client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content === "!ping") {
    message.reply("🏓 Pong! Thalira está activa.");
  }

  if (message.content === "!ayuda") {
    message.reply("📜 Comandos disponibles: !ping, !ayuda");
  }
});

// Conectar con el token
client.login(process.env.TOKEN);
