
const {
  canUseFeature,
  getUserRole,
} = require('./permissions');

const {
  isPremiumActive,
} = require('../premium/subscriptions');

/**
 * Comprueba el acceso a una función de Thalira.
 * Premium se consulta directamente desde las suscripciones
 * almacenadas para el servidor de la interacción.
 */
function checkFeatureAccess({
  interaction,
  ownerId,
  feature,
  requiredPermission = null,
  allowedFeatures = [],
}) {
  if (!interaction?.inGuild?.() || !interaction.guildId) {
    return {
      allowed: false,
      role: getUserRole(interaction, ownerId),
      reason: 'GUILD_REQUIRED',
    };
  }

  const premiumActive = isPremiumActive(interaction.guildId);

  return canUseFeature({
    interaction,
    ownerId,
    feature,
    premiumActive,
    requiredPermission,
    allowedFeatures,
  });
}

module.exports = {
  checkFeatureAccess,
};

