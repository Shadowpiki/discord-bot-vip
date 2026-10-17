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
  console.error('ERROR: Missing configuration in .env');
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
    .setDescription('Check that Thalira is working.'),

  new SlashCommandBuilder()
    .setName('who-am-i')
    .setDescription('Discover how Thalira recognizes you.'),

  new SlashCommandBuilder()
    .setName('language')
    .setDescription('Change your personal language in this server.')
    .addStringOption(option =>
      option.setName('language')
        .setDescription('Choose your personal language.')
        .setRequired(true)
        .addChoices(...languages)
    ),

  new SlashCommandBuilder()
    .setName('server-language')
    .setDescription('Change the default language for this server.')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
    .addStringOption(option =>
      option.setName('language')
        .setDescription('Choose the server language.')
        .setRequired(true)
        .addChoices(...languages)
    ),

  new SlashCommandBuilder()
    .setName('premium')
    .setDescription('Check this server’s Premium subscription status.'),

  new SlashCommandBuilder()
    .setName('help')
    .setDescription('View Thalira’s commands and features.'),

  new SlashCommandBuilder()
    .setName('about')
    .setDescription('Learn about Thalira and her purpose.'),

  new SlashCommandBuilder()
    .setName('bot-info')
    .setDescription('View information about Thalira.'),

  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Check Thalira’s latency.'),

  new SlashCommandBuilder()
    .setName('user-info')
    .setDescription('View information about a member.')
    .addUserOption(option =>
      option.setName('user')
        .setDescription('The user you want to inspect.')
        .setRequired(false)
    ),

  new SlashCommandBuilder()
    .setName('server-info')
    .setDescription('View information about this server.'),

  new SlashCommandBuilder()
    .setName('avatar')
    .setDescription('Show a user’s avatar.')
    .addUserOption(option =>
      option.setName('user')
        .setDescription('The user whose avatar you want to see.')
        .setRequired(false)
    ),
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

async function main() {
  try {
    console.log('Preparing to register Thalira commands...');
    console.log(`Total commands: ${commands.length}`);

    await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands }
    );

    console.log('Commands registered successfully.');
  } catch (error) {
    console.error('Failed to register commands.');
    console.error('Details:', error.message);
    process.exitCode = 1;
  }
}

main();
