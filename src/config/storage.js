
const fs = require('node:fs');
const path = require('node:path');
const {
  LANGUAGES,
  isSupportedLanguage,
  detectLanguage,
} = require('../i18n');

const DATA_DIR = path.join(__dirname, '../../data');
const DATA_FILE = path.join(DATA_DIR, 'settings.json');
const TEMP_FILE = `${DATA_FILE}.tmp`;

function loadData() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return { guilds: {}, users: {} };
    }

    const content = fs.readFileSync(DATA_FILE, 'utf8');
    const data = JSON.parse(content);

    if (!data.guilds || typeof data.guilds !== 'object') {
      data.guilds = {};
    }

    if (!data.users || typeof data.users !== 'object') {
      data.users = {};
    }

    return data;
  } catch (error) {
    console.error('Error al leer la configuración:', error.message);
    throw error;
  }
}

function saveData(data) {
  fs.mkdirSync(DATA_DIR, { recursive: true });

  fs.writeFileSync(
    TEMP_FILE,
    JSON.stringify(data, null, 2),
    'utf8'
  );

  fs.renameSync(TEMP_FILE, DATA_FILE);
}

function getGuildSettings(guildId) {
  if (!guildId) {
    throw new Error('Se necesita el ID del servidor.');
  }

  const data = loadData();

  if (!data.guilds[guildId]) {
    data.guilds[guildId] = {
      language: 'es',
      features: {},
      style: 'friendly',
    };

    saveData(data);
  }

  return { ...data.guilds[guildId] };
}

function setGuildLanguage(guildId, language) {
  if (!guildId) {
    throw new Error('Se necesita el ID del servidor.');
  }

  if (!isSupportedLanguage(language)) {
    throw new Error(`Idioma no compatible: ${language}`);
  }

  const data = loadData();

  if (!data.guilds[guildId]) {
    data.guilds[guildId] = {
      language: 'es',
      features: {},
      style: 'friendly',
    };
  }

  data.guilds[guildId].language = language;
  saveData(data);

  return data.guilds[guildId].language;
}

function getUserLanguage(guildId, userId) {
  if (!guildId || !userId) {
    return null;
  }

  const data = loadData();
  return data.users[guildId]?.[userId]?.language || null;
}

function setUserLanguage(guildId, userId, language) {
  if (!guildId || !userId) {
    throw new Error('Se necesitan los IDs del servidor y del usuario.');
  }

  if (!isSupportedLanguage(language)) {
    throw new Error(`Idioma no compatible: ${language}`);
  }

  const data = loadData();

  if (!data.users[guildId]) {
    data.users[guildId] = {};
  }

  if (!data.users[guildId][userId]) {
    data.users[guildId][userId] = {};
  }

  data.users[guildId][userId].language = language;
  saveData(data);

  return language;
}

function getEffectiveLanguage(guildId, userId, discordLocale) {
  const userLanguage = getUserLanguage(guildId, userId);

  if (userLanguage) {
    return userLanguage;
  }

  if (guildId) {
    const settings = getGuildSettings(guildId);

    if (isSupportedLanguage(settings.language)) {
      return settings.language;
    }
  }

  const detectedLanguage = detectLanguage(discordLocale);

  if (isSupportedLanguage(detectedLanguage)) {
    return detectedLanguage;
  }

  return 'es';
}

module.exports = {
  LANGUAGES,
  loadData,
  saveData,
  getGuildSettings,
  setGuildLanguage,
  getUserLanguage,
  setUserLanguage,
  getEffectiveLanguage,
};

