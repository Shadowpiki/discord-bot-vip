
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
      language = 'en';
    }

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
        .setTitle('🤖 Información de Thalira')
        .setThumbnail(client.user.displayAvatarURL())
        .addFields(
          { name: 'Nombre', value: client.user.username, inline: true },
          { name: 'Versión de discord.js', value: version, inline: true },
          { name: 'Servidores', value: String(client.guilds.cache.size), inline: true },
          {
            name: 'Tiempo activa',
            value: `${days} d, ${hours} h, ${minutes} min, ${seconds} s`,
            inline: false,
          },
          {
            name: 'Latencia de Discord',
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
          `🏓 **¡Pong!**\n` +
          `Latencia de la interacción: **${interactionLatency} ms**\n` +
          `Latencia de la conexión con Discord: **${gatewayLatency} ms**`,
      });
      return;
    }

    if (command === 'user-info') {
      const target = interaction.options.getUser('user') || interaction.user;
      const member = interaction.guild.members.cache.get(target.id);

      const embed = new EmbedBuilder()
        .setColor(0x8A6DCC)
        .setTitle(`👤 Información de ${target.username}`)
        .setThumbnail(target.displayAvatarURL({ size: 256 }))
        .addFields(
          { name: 'Nombre de usuario', value: target.username, inline: true },
          { name: 'ID de Discord', value: target.id, inline: true },
          {
            name: 'Cuenta creada',
            value: `<t:${Math.floor(target.createdTimestamp / 1000)}:F>`,
            inline: false,
          },
          {
            name: 'Se unió al servidor',
            value: member?.joinedTimestamp
              ? `<t:${Math.floor(member.joinedTimestamp / 1000)}:F>`
              : 'Fecha no disponible en la caché.',
            inline: false,
          }
        );

      if (target.discriminator && target.discriminator !== '0') {
        embed.addFields({
          name: 'Etiqueta antigua',
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
          { name: 'ID del servidor', value: guild.id, inline: true },
          { name: 'Miembros', value: String(guild.memberCount), inline: true },
          {
            name: 'Propietario',
            value: `<@${guild.ownerId}>`,
            inline: true,
          },
          {
            name: 'Servidor creado',
            value: `<t:${Math.floor(guild.createdTimestamp / 1000)}:F>`,
            inline: false,
          },
          { name: 'Canales en caché', value: String(guild.channels.cache.size), inline: true },
          { name: 'Roles en caché', value: String(guild.roles.cache.size), inline: true }
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
        .setTitle(`🖼️ Avatar de ${target.username}`)
        .setImage(avatarUrl)
        .setURL(avatarUrl);

      await interaction.reply({ embeds: [embed] });
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

