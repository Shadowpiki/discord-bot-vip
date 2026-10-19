
require('dotenv').config();

const {
  Client,
  GatewayIntentBits,
  Events,
  PermissionFlagsBits,
  MessageFlags,
  EmbedBuilder,
  version,
} = require('discord.js');

const {
  getEffectiveLanguage,
  setUserLanguage,
  setGuildLanguage,
} = require('./src/config/storage');

const {
  LANGUAGES,
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

  let responseLanguage = 'en';

  try {
    const command = interaction.commandName;
    const guildId = interaction.guildId;
    const userId = interaction.user.id;
    const isFather = userId === ownerId;

    if (!guildId) {
      await interaction.reply({
        content: translate('en', 'outsideGuild'),
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
      language = 'en';
    }
    responseLanguage = language;

    // COMANDOS PUBLICOS
    if (command === 'thalira') {
      const response = isFather
        ? '¡Hola, padre! ❤️ Soy Thalira. Mi conexión funciona correctamente y estoy lista para seguir creciendo contigo.'
        : translate(language, 'greeting');

      await interaction.reply({ content: response });
      return;
    }

    if (command === 'who-am-i') {
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
          content: translate(language, 'whoAdmin'),
        });
        return;
      }

      await interaction.reply({
        content: translate(language, 'whoMember'),
      });
      return;
    }

    // CONSULTA PRIVADA DE PREMIUM
    if (command === 'premium') {
      const subscription = getSubscription(guildId);
      const active = isPremiumActive(guildId);

      let response;

      if (active) {
        const locale = LANGUAGES[language]?.locale || LANGUAGES.en.locale;
        const expiry = new Date(subscription.expiresAt).toLocaleDateString(
          locale,
          { year: 'numeric', month: 'long', day: 'numeric' }
        );

        response =
          `✨ **${translate(language, 'premiumActive')}**\n` +
          `${translate(language, 'premiumExpiry')} ${expiry}.\n` +
          translate(language, 'premiumManage');
      } else {
        response =
          `ℹ️ **${translate(language, 'premiumInactive')}**\n` +
          translate(language, 'premiumUnavailable');
      }

      await interaction.reply({
        content: response,
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    // COMANDOS PRIVADOS
    if (command === 'language') {
      const selectedLanguage = interaction.options.getString(
        'language',
        true
      );

      setUserLanguage(guildId, userId, selectedLanguage);

      await interaction.reply({
        content: translate(selectedLanguage, 'languageSaved'),
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    if (command === 'server-language') {
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
        'language',
        true
      );

      setGuildLanguage(guildId, selectedLanguage);

      await interaction.reply({
        content: translate(selectedLanguage, 'serverLanguageSaved'),
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    // NUEVOS COMANDOS INFORMATIVOS
    if (command === 'help') {
      await interaction.deferReply();

      const embed = new EmbedBuilder()
        .setColor(0x8A6DCC)
        .setTitle(translate(language, 'helpTitle'))
        .setDescription(translate(language, 'helpDescription'))
        .addFields(
          {
            name: translate(language, 'helpGeneral'),
            value: translate(language, 'helpGeneralValue'),
          },
          {
            name: translate(language, 'helpUsers'),
            value: translate(language, 'helpUsersValue'),
          },
          {
            name: translate(language, 'helpSettings'),
            value: translate(language, 'helpSettingsValue'),
          }
        )
        .setFooter({
          text: translate(language, 'helpFooter'),
        });

      await interaction.editReply({ embeds: [embed] });
      return;
    }

    if (command === 'about') {
      const embed = new EmbedBuilder()
        .setColor(0x8A6DCC)
        .setTitle(translate(language, 'aboutTitle'))
        .setDescription(translate(language, 'aboutDescription'))
        .addFields({
          name: translate(language, 'aboutPhilosophyTitle'),
          value: translate(language, 'aboutPhilosophy'),
        })
        .setFooter({ text: translate(language, 'aboutFooter') });

      await interaction.reply({ embeds: [embed] });
      return;
    }

    if (command === 'bot-info') {
      const uptimeSeconds = Math.floor(client.uptime / 1000);
      const days = Math.floor(uptimeSeconds / 86400);
      const hours = Math.floor((uptimeSeconds % 86400) / 3600);
      const minutes = Math.floor((uptimeSeconds % 3600) / 60);
      const seconds = uptimeSeconds % 60;

      const embed = new EmbedBuilder()
        .setColor(0x8A6DCC)
        .setTitle(translate(language, 'botInfoTitle'))
        .setThumbnail(client.user.displayAvatarURL())
        .addFields(
          { name: translate(language, 'botName'), value: client.user.username, inline: true },
          { name: translate(language, 'botVersion'), value: version, inline: true },
          { name: translate(language, 'botServers'), value: String(client.guilds.cache.size), inline: true },
          {
            name: translate(language, 'botUptime'),
            value: `${days} ${translate(language, 'uptimeDays')}, ${hours} ${translate(language, 'uptimeHours')}, ${minutes} ${translate(language, 'uptimeMinutes')}, ${seconds} ${translate(language, 'uptimeSeconds')}`,
            inline: false,
          },
          {
            name: translate(language, 'botLatency'),
            value: `${Math.round(client.ws.ping)} ms`,
            inline: true,
          }
        )
        .setTimestamp();

      await interaction.reply({ embeds: [embed] });
      return;
    }

    if (command === 'ping') {
      const interactionLatency = Math.max(
        0,
        Date.now() - interaction.createdTimestamp
      );
      const gatewayLatency = Math.round(client.ws.ping);

      await interaction.reply({
        content:
          `🏓 **${translate(language, 'pingPong')}**\n` +
          `${translate(language, 'pingInteraction')}: **${interactionLatency} ms**\n` +
          `${translate(language, 'pingDiscord')}: **${gatewayLatency} ms**`,
      });
      return;
    }

    if (command === 'user-info') {
      const target = interaction.options.getUser('user') || interaction.user;
      const member = interaction.guild.members.cache.get(target.id);

      const embed = new EmbedBuilder()
        .setColor(0x8A6DCC)
        .setTitle(`${translate(language, 'userInfoTitle')} ${target.username}`)
        .setThumbnail(target.displayAvatarURL({ size: 256 }))
        .addFields(
          { name: translate(language, 'userName'), value: target.username, inline: true },
          { name: translate(language, 'userId'), value: target.id, inline: true },
          {
            name: translate(language, 'userCreated'),
            value: `<t:${Math.floor(target.createdTimestamp / 1000)}:F>`,
            inline: false,
          },
          {
            name: translate(language, 'userJoined'),
            value: member?.joinedTimestamp
              ? `<t:${Math.floor(member.joinedTimestamp / 1000)}:F>`
              : translate(language, 'userJoinedUnavailable'),
            inline: false,
          }
        );

      if (target.discriminator && target.discriminator !== '0') {
        embed.addFields({
          name: translate(language, 'userLegacyTag'),
          value: target.discriminator,
          inline: true,
        });
      }

      await interaction.reply({
        embeds: [embed],
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    if (command === 'server-info') {
      const guild = interaction.guild;

      const embed = new EmbedBuilder()
        .setColor(0x8A6DCC)
        .setTitle(`🏰 ${guild.name}`)
        .setThumbnail(guild.iconURL({ size: 256 }) || null)
        .addFields(
          { name: translate(language, 'serverId'), value: guild.id, inline: true },
          { name: translate(language, 'serverMembers'), value: String(guild.memberCount), inline: true },
          {
            name: translate(language, 'serverOwner'),
            value: `<@${guild.ownerId}>`,
            inline: true,
          },
          {
            name: translate(language, 'serverCreated'),
            value: `<t:${Math.floor(guild.createdTimestamp / 1000)}:F>`,
            inline: false,
          },
          { name: translate(language, 'serverChannels'), value: String(guild.channels.cache.size), inline: true },
          { name: translate(language, 'serverRoles'), value: String(guild.roles.cache.size), inline: true }
        );

      await interaction.reply({ embeds: [embed] });
      return;
    }

    if (command === 'avatar') {
      const target = interaction.options.getUser('user') || interaction.user;
      const avatarUrl = target.displayAvatarURL({
        size: 1024,
        extension: 'png',
      });

      const embed = new EmbedBuilder()
        .setColor(0x8A6DCC)
        .setTitle(`🖼️ ${translate(language, 'avatarTitle')} ${target.username}`)
        .setImage(avatarUrl)
        .setURL(avatarUrl);

      await interaction.reply({ embeds: [embed] });
      return;
    }

  } catch (error) {
    console.error('Error al procesar un comando:', error);

    const response = {
      content: translate(responseLanguage, 'commandError'),
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

