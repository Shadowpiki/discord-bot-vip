
require('dotenv').config();

const {
  REST,
  Routes,
  SlashCommandBuilder,
  PermissionFlagsBits,
} = require('discord.js');

const token = process.env.DISCORD_TOKEN;
const clientId = process.env.DISCORD_CLIENT_ID;
const guildId = process.env.DISCORD_GUILD_ID;

if (!token || !clientId || !guildId) {
  console.error('ERROR: Faltan datos en el archivo .env');
  process.exit(1);
}

const languages = [
  { name: 'Español', value: 'es' },
  { name: 'English', value: 'en' },
  { name: 'Русский', value: 'ru' },
  { name: 'Deutsch', value: 'de' },
  { name: 'Français', value: 'fr' },
  { name: 'Português', value: 'pt' },
  { name: '日本語', value: 'ja' },
  { name: '한국어', value: 'ko' },
  { name: '简体中文', value: 'zh' },
  { name: 'Türkçe', value: 'tr' },
];

const commands = [
  new SlashCommandBuilder()
    .setName('thalira')
    .setDescription('Comprueba que Thalira funciona correctamente.'),

  new SlashCommandBuilder()
    .setName('quien-soy')
    .setDescription('Descubre quién eres para Thalira.'),

  new SlashCommandBuilder()
    .setName('idioma')
    .setDescription('Cambia tu idioma personal en este servidor.')
    .addStringOption(option =>
      option
        .setName('idioma')
        .setDescription('Selecciona tu idioma personal.')
        .setRequired(true)
        .addChoices(...languages)
    ),

  new SlashCommandBuilder()
    .setName('idioma-servidor')
    .setDescription('Cambia el idioma predeterminado del servidor.')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
    .addStringOption(option =>
      option
        .setName('idioma')
        .setDescription('Selecciona el idioma del servidor.')
        .setRequired(true)
        .addChoices(...languages)
    ),

  new SlashCommandBuilder()
    .setName('premium')
    .setDescription('Consulta el estado de Premium de este servidor.'),
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

async function main() {
  try {
    console.log('Registrando los comandos de Thalira...');

    await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands }
    );

    console.log('¡Comandos registrados correctamente!');
    console.log('/thalira');
    console.log('/quien-soy');
    console.log('/idioma');
    console.log('/idioma-servidor');
    console.log('/premium');
  } catch (error) {
    console.error('No se pudieron registrar los comandos.');
    console.error('Detalle:', error.message);
    process.exitCode = 1;
  }
}

main();

