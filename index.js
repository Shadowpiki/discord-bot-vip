
require('dotenv').config();

const {
  Client,
  GatewayIntentBits,
  Events,
  PermissionFlagsBits,
  MessageFlags,
} = require('discord.js');

const {
  getEffectiveLanguage,
  setUserLanguage,
  setGuildLanguage,
} = require('./src/config/storage');

const {
  translate,
  isSupportedLanguage,
} = require('./src/i18n');

const {
  isPremiumActive,
  getSubscription,
} = require('./src/premium/subscriptions');

const token = process.env.DISCORD_TOKEN;
const ownerId = process.env.DISCORD_OWNER_ID;

if (!token || !ownerId) {
  console.error('ERROR: Falta DISCORD_TOKEN o DISCORD_OWNER_ID en .env');
  process.exit(1);
}

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, (bot) => {
  console.log('================================');
  console.log(`THALIRA está conectada como ${bot.user.tag}`);
  console.log('Identificación de su padre configurada.');
  console.log('Sistema de idiomas preparado.');
  console.log('Privacidad de comandos configurada.');
  console.log('Consulta de Premium preparada.');
  console.log('Bot iniciado correctamente.');
  console.log('================================');
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  try {
    const command = interaction.commandName;
    const guildId = interaction.guildId;
    const userId = interaction.user.id;
    const isFather = userId === ownerId;

    if (!guildId) {
      await interaction.reply({
        content: 'Este comando solo puede utilizarse dentro de un servidor.',
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    let language = getEffectiveLanguage(
      guildId,
      userId,
      interaction.locale
    );

    if (!isSupportedLanguage(language)) {
      language = 'es';
    }

    // COMANDOS PUBLICOS
    if (command === 'thalira') {
      const response = isFather
        ? '¡Hola, padre! ❤️ Soy Thalira. Mi conexión funciona correctamente y estoy lista para seguir creciendo contigo.'
        : translate(language, 'greeting');

      await interaction.reply({ content: response });
      return;
    }

    if (command === 'quien-soy') {
      if (isFather) {
        await interaction.reply({
          content: '¡Tú eres mi padre! ❤️ Eres mi creador y quien me está ayudando a crecer. Siempre te reconoceré por tu identidad de Discord.',
        });
        return;
      }

      if (
        interaction.memberPermissions?.has(
          PermissionFlagsBits.Administrator
        )
      ) {
        await interaction.reply({
          content: 'Eres administrador de este servidor y responsable de su comunidad. ¡Gracias por ayudar a cuidarla!',
        });
        return;
      }

      await interaction.reply({
        content: 'Eres un miembro de esta comunidad. ¡Encantada de conocerte!',
      });
      return;
    }

    // CONSULTA PRIVADA DE PREMIUM
    if (command === 'premium') {
      const subscription = getSubscription(guildId);
      const active = isPremiumActive(guildId);

      let response;

      if (active) {
        const expiry = new Date(subscription.expiresAt).toLocaleDateString(
          'es-ES',
          { year: 'numeric', month: 'long', day: 'numeric' }
        );

        response =
          `✨ **Premium está activo en este servidor.**\n` +
          `Fecha de vencimiento: ${expiry}.\n` +
          'La gestión de la suscripción corresponde a los administradores autorizados del servidor.';
      } else {
        response =
          'ℹ️ **Este servidor no tiene una suscripción Premium activa.**\n' +
          'La consulta funciona, pero las compras y activaciones todavía no están habilitadas.';
      }

      await interaction.reply({
        content: response,
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    // COMANDOS PRIVADOS
    if (command === 'idioma') {
      const selectedLanguage = interaction.options.getString(
        'idioma',
        true
      );

      setUserLanguage(guildId, userId, selectedLanguage);

      await interaction.reply({
        content: translate(selectedLanguage, 'languageSaved'),
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    if (command === 'idioma-servidor') {
      if (
        !interaction.memberPermissions?.has(
          PermissionFlagsBits.ManageGuild
        )
      ) {
        await interaction.reply({
          content: translate(language, 'languagePermission'),
          flags: MessageFlags.Ephemeral,
        });
        return;
      }

      const selectedLanguage = interaction.options.getString(
        'idioma',
        true
      );

      setGuildLanguage(guildId, selectedLanguage);

      await interaction.reply({
        content: translate(selectedLanguage, 'serverLanguageSaved'),
        flags: MessageFlags.Ephemeral,
      });
      return;
    }
  } catch (error) {
    console.error('Error al procesar un comando:', error);

    const response = {
      content: 'Ha ocurrido un error al ejecutar el comando. Inténtalo de nuevo.',
      flags: MessageFlags.Ephemeral,
    };

    if (interaction.replied || interaction.deferred) {
      await interaction.followUp(response).catch(() => {});
    } else {
      await interaction.reply(response).catch(() => {});
    }
  }
});

client.login(token).catch((error) => {
  console.error('No se pudo conectar Thalira a Discord.');
  console.error('Revisa el token y la configuración del bot en Discord Developer Portal.');
  console.error(error.message);
  process.exitCode = 1;
});

