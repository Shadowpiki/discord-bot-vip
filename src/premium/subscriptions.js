const fs = require('fs');
const path = require('path');
const { PermissionFlagsBits } = require('discord.js');

const FILE = path.join(
  __dirname,
  '..',
  '..',
  'data',
  'subscriptions.json'
);

const SUBSCRIPTION_STATUSES = Object.freeze({
  PENDING: 'pending',
  ACTIVE: 'active',
  EXPIRED: 'expired',
  CANCELLED: 'cancelled',
});

const GIFT_STATUSES = Object.freeze({
  PENDING: 'pending',
  REDEEMED: 'redeemed',
  CANCELLED: 'cancelled',
});

function emptyData() {
  return {
    version: 1,
    subscriptions: {},
    gifts: {},
  };
}

function loadData() {
  fs.mkdirSync(path.dirname(FILE), { recursive: true });

  if (!fs.existsSync(FILE)) {
    saveData(emptyData());
  }

  const data = JSON.parse(fs.readFileSync(FILE, 'utf8'));

  if (
    !data ||
    typeof data !== 'object' ||
    !data.subscriptions ||
    typeof data.subscriptions !== 'object' ||
    !data.gifts ||
    typeof data.gifts !== 'object'
  ) {
    throw new Error('El archivo de suscripciones no es válido.');
  }

  return data;
}

function saveData(data) {
  fs.mkdirSync(path.dirname(FILE), { recursive: true });

  const tempFile = `${FILE}.tmp`;

  fs.writeFileSync(tempFile, JSON.stringify(data, null, 2), {
    encoding: 'utf8',
    mode: 0o600,
  });

  fs.renameSync(tempFile, FILE);
}

function validateDiscordId(id, field) {
  if (typeof id !== 'string' || !/^\d{17,20}$/.test(id)) {
    throw new TypeError(`${field} debe ser un ID válido de Discord.`);
  }

  return id;
}

function validateDuration(days) {
  if (!Number.isInteger(days) || days < 1 || days > 3660) {
    throw new RangeError('La duración debe estar entre 1 y 3660 días.');
  }

  return days;
}

/**
 * Comprueba la autorización de una interacción real de Discord.
 * El creador del bot no recibe excepciones en este control.
 */
function requireServerAdministrator(interaction, expectedGuildId) {
  if (
    !interaction ||
    typeof interaction.inGuild !== 'function' ||
    !interaction.inGuild() ||
    !interaction.guildId ||
    !interaction.memberPermissions
  ) {
    throw new Error('Esta acción requiere una interacción dentro de un servidor.');
  }

  if (interaction.guildId !== expectedGuildId) {
    throw new Error('La interacción no pertenece al servidor destinatario.');
  }

  const permissions = interaction.memberPermissions;

  const authorized =
    permissions.has(PermissionFlagsBits.Administrator) ||
    permissions.has(PermissionFlagsBits.ManageGuild);

  if (!authorized) {
    throw new Error(
      'Necesitas permisos de administrador o Gestionar servidor.'
    );
  }
}

function getSubscription(guildId) {
  const id = validateDiscordId(guildId, 'guildId');

  return loadData().subscriptions[id] || null;
}

function isPremiumActive(guildId) {
  const subscription = getSubscription(guildId);

  return Boolean(
    subscription &&
    subscription.status === SUBSCRIPTION_STATUSES.ACTIVE &&
    Number.isFinite(subscription.expiresAt) &&
    subscription.expiresAt > Date.now()
  );
}

/**
 * Las activaciones quedan bloqueadas hasta integrar un proveedor
 * de pagos y verificar sus notificaciones de forma auténtica.
 */
function activateSubscription() {
  throw new Error(
    'Activación deshabilitada: todavía no se ha integrado la verificación del proveedor de pagos.'
  );
}

/**
 * Cancelar una suscripción requiere autorización del servidor.
 * La cancelación de la suscripción y la cancelación de la facturación
 * serán procesos separados cuando integremos el proveedor.
 */
function cancelSubscription(interaction) {
  if (!interaction?.guildId) {
    throw new Error('No se pudo identificar el servidor.');
  }

  const guildId = validateDiscordId(interaction.guildId, 'guildId');

  requireServerAdministrator(interaction, guildId);

  const data = loadData();
  const subscription = data.subscriptions[guildId];

  if (!subscription) {
    return false;
  }

  subscription.status = SUBSCRIPTION_STATUSES.CANCELLED;
  subscription.updatedAt = Date.now();

  saveData(data);

  return true;
}

/**
 * Los regalos pagados quedan deshabilitados hasta que exista
 * una verificación auténtica de pago.
 */
function createGift() {
  throw new Error(
    'Creación de regalos deshabilitada hasta integrar la verificación del proveedor de pagos.'
  );
}

/**
 * Canjea un regalo para su servidor destinatario.
 * El administrador debe autorizarlo mediante una interacción real.
 */
function redeemGift(giftId, interaction) {
  if (typeof giftId !== 'string' || !/^[a-zA-Z0-9_-]{8,64}$/.test(giftId)) {
    throw new TypeError('El identificador del regalo no es válido.');
  }

  const data = loadData();
  const gift = data.gifts[giftId];

  if (!gift || gift.status !== GIFT_STATUSES.PENDING) {
    throw new Error('El regalo no existe o ya fue utilizado.');
  }

  const guildId = validateDiscordId(gift.guildId, 'guildId');

  requireServerAdministrator(interaction, guildId);

  const now = Date.now();
  const existing = data.subscriptions[guildId];

  const startAt =
    existing?.status === SUBSCRIPTION_STATUSES.ACTIVE &&
    Number.isFinite(existing.expiresAt) &&
    existing.expiresAt > now
      ? existing.expiresAt
      : now;

  const subscription = {
    guildId,
    status: SUBSCRIPTION_STATUSES.ACTIVE,
    source: 'gift',
    paymentReference: gift.paymentReference,
    startAt,
    expiresAt: startAt + validateDuration(gift.durationDays) * 86400000,
    updatedAt: now,
  };

  gift.status = GIFT_STATUSES.REDEEMED;
  gift.redeemedAt = now;
  data.subscriptions[guildId] = subscription;

  saveData(data);

  return { ...subscription };
}

module.exports = {
  SUBSCRIPTION_STATUSES,
  GIFT_STATUSES,
  getSubscription,
  isPremiumActive,
  activateSubscription,
  cancelSubscription,
  createGift,
  redeemGift,
};
