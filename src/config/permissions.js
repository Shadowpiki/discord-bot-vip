
const { PermissionFlagsBits } = require('discord.js');

const ROLES = Object.freeze({
  OWNER: 'OWNER',
  SERVER_ADMIN: 'SERVER_ADMIN',
  PREMIUM: 'PREMIUM',
  MEMBER: 'MEMBER',
});

function isOwner(interaction, ownerId) {
  return Boolean(
    ownerId &&
    interaction?.user?.id &&
    interaction.user.id === ownerId
  );
}

function isServerAdministrator(interaction) {
  return Boolean(
    interaction?.inGuild?.() &&
    interaction.memberPermissions?.has(
      PermissionFlagsBits.Administrator
    )
  );
}

function getUserRole(interaction, ownerId) {
  if (isOwner(interaction, ownerId)) {
    return ROLES.OWNER;
  }

  if (isServerAdministrator(interaction)) {
    return ROLES.SERVER_ADMIN;
  }

  return ROLES.MEMBER;
}

function hasDiscordPermission(interaction, permission) {
  if (
    !interaction?.inGuild?.() ||
    !interaction.memberPermissions ||
    !permission
  ) {
    return false;
  }

  return interaction.memberPermissions.has(permission);
}

function canManageGuild(interaction) {
  return hasDiscordPermission(
    interaction,
    PermissionFlagsBits.ManageGuild
  );
}

function canManageChannels(interaction) {
  return hasDiscordPermission(
    interaction,
    PermissionFlagsBits.ManageChannels
  );
}

function canManageRoles(interaction) {
  return hasDiscordPermission(
    interaction,
    PermissionFlagsBits.ManageRoles
  );
}

function canUseFeature({
  interaction,
  ownerId,
  feature,
  premiumActive = false,
  requiredPermission = null,
  allowedFeatures = [],
}) {
  // Los permisos reales de Discord siempre se comprueban primero.
  if (requiredPermission) {
    if (!hasDiscordPermission(interaction, requiredPermission)) {
      return {
        allowed: false,
        role: getUserRole(interaction, ownerId),
        reason: 'MISSING_DISCORD_PERMISSION',
      };
    }
  }

  // El creador puede probar funciones internas del bot,
  // pero nunca saltarse los permisos de Discord.
  if (isOwner(interaction, ownerId)) {
    return {
      allowed: true,
      role: ROLES.OWNER,
      reason: 'OWNER_ACCESS',
    };
  }

  if (allowedFeatures.includes(feature)) {
    return {
      allowed: true,
      role: getUserRole(interaction, ownerId),
      reason: 'FEATURE_ALLOWED',
    };
  }

  if (premiumActive) {
    return {
      allowed: true,
      role: getUserRole(interaction, ownerId),
      reason: 'PREMIUM_ACTIVE',
    };
  }

  return {
    allowed: false,
    role: getUserRole(interaction, ownerId),
    reason: 'PREMIUM_REQUIRED',
  };
}

module.exports = {
  ROLES,
  getUserRole,
  isOwner,
  isServerAdministrator,
  hasDiscordPermission,
  canManageGuild,
  canManageChannels,
  canManageRoles,
  canUseFeature,
};
