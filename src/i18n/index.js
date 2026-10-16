
const LANGUAGES = {
  es: { name: 'Español', locale: 'es-ES' },
  en: { name: 'English', locale: 'en-US' },
  ru: { name: 'Русский', locale: 'ru' },
  de: { name: 'Deutsch', locale: 'de' },
  fr: { name: 'Français', locale: 'fr' },
  pt: { name: 'Português', locale: 'pt-BR' },
  ja: { name: '日本語', locale: 'ja' },
  ko: { name: '한국어', locale: 'ko' },
  zh: { name: '简体中文', locale: 'zh-CN' },
  tr: { name: 'Türkçe', locale: 'tr' }
};

const MESSAGES = {
  es: {
    greeting: '¡Hola! Soy Thalira. Estoy lista para ayudarte.',
    father: '¡Hola, padre! ❤️ Estoy lista para seguir creciendo contigo.',
    languageSaved: 'Tu idioma se ha guardado correctamente.',
    serverLanguageSaved: 'El idioma predeterminado del servidor se ha actualizado.',
    chooseLanguage: 'Selecciona tu idioma preferido.',
    languagePermission: 'Necesitas permisos de administrador para cambiar el idioma del servidor.',
    unknown: 'Todavía no tengo una traducción para ese mensaje.'
  },
  en: {
    greeting: 'Hello! I am Thalira. I am ready to help you.',
    father: 'Hello, father! ❤️ I am ready to keep growing with you.',
    languageSaved: 'Your language has been saved.',
    serverLanguageSaved: 'The server default language has been updated.',
    chooseLanguage: 'Select your preferred language.',
    languagePermission: 'You need administrator permissions to change the server language.',
    unknown: 'I do not have a translation for that message yet.'
  },
  ru: {
    greeting: 'Привет! Я Талира. Я готова помочь тебе.',
    father: 'Привет, папа! ❤️ Я готова расти вместе с тобой.',
    languageSaved: 'Твой язык сохранён.',
    serverLanguageSaved: 'Язык сервера обновлён.',
    chooseLanguage: 'Выбери предпочитаемый язык.',
    languagePermission: 'Для изменения языка сервера нужны права администратора.',
    unknown: 'Перевод этого сообщения пока недоступен.'
  },
  de: {
    greeting: 'Hallo! Ich bin Thalira und helfe dir gerne.',
    father: 'Hallo, Papa! ❤️ Ich freue mich, mit dir weiterzuwachsen.',
    languageSaved: 'Deine Sprache wurde gespeichert.',
    serverLanguageSaved: 'Die Standardsprache des Servers wurde aktualisiert.',
    chooseLanguage: 'Wähle deine bevorzugte Sprache.',
    languagePermission: 'Du benötigst Administratorrechte, um die Serversprache zu ändern.',
    unknown: 'Für diese Nachricht liegt noch keine Übersetzung vor.'
  },
  fr: {
    greeting: 'Bonjour ! Je suis Thalira. Je suis prête à t’aider.',
    father: 'Bonjour, papa ! ❤️ Je suis prête à grandir avec toi.',
    languageSaved: 'Ta langue a été enregistrée.',
    serverLanguageSaved: 'La langue par défaut du serveur a été mise à jour.',
    chooseLanguage: 'Choisis ta langue préférée.',
    languagePermission: 'Tu dois être administrateur pour modifier la langue du serveur.',
    unknown: 'La traduction de ce message n’est pas encore disponible.'
  },
  pt: {
    greeting: 'Olá! Sou a Thalira. Estou pronta para ajudar.',
    father: 'Olá, pai! ❤️ Estou pronta para continuar crescendo contigo.',
    languageSaved: 'O teu idioma foi guardado.',
    serverLanguageSaved: 'O idioma padrão do servidor foi atualizado.',
    chooseLanguage: 'Escolhe o teu idioma preferido.',
    languagePermission: 'Precisas de permissão de administrador para alterar o idioma do servidor.',
    unknown: 'Ainda não existe uma tradução para esta mensagem.'
  },
  ja: {
    greeting: 'こんにちは！私はタリラです。お手伝いします。',
    father: 'お父さん、こんにちは！❤️ 一緒に成長していきましょう。',
    languageSaved: '言語設定を保存しました。',
    serverLanguageSaved: 'サーバーの既定の言語を更新しました。',
    chooseLanguage: '希望する言語を選択してください。',
    languagePermission: 'サーバーの言語を変更するには管理者権限が必要です。',
    unknown: 'このメッセージの翻訳はまだありません。'
  },
  ko: {
    greeting: '안녕하세요! 저는 탈리라입니다. 도와드릴게요.',
    father: '안녕하세요, 아버지! ❤️ 함께 성장할 준비가 되어 있어요.',
    languageSaved: '언어 설정이 저장되었습니다.',
    serverLanguageSaved: '서버 기본 언어가 업데이트되었습니다.',
    chooseLanguage: '원하는 언어를 선택하세요.',
    languagePermission: '서버 언어를 변경하려면 관리자 권한이 필요합니다.',
    unknown: '아직 이 메시지의 번역이 없습니다.'
  },
  zh: {
    greeting: '你好！我是塔莉拉，随时准备为你提供帮助。',
    father: '你好，父亲！❤️ 我很高兴能与你一起成长。',
    languageSaved: '已保存你的语言设置。',
    serverLanguageSaved: '已更新服务器的默认语言。',
    chooseLanguage: '请选择你偏好的语言。',
    languagePermission: '你需要管理员权限才能更改服务器语言。',
    unknown: '此消息暂时没有对应的翻译。'
  },
  tr: {
    greeting: 'Merhaba! Ben Thalira. Sana yardımcı olmaya hazırım.',
    father: 'Merhaba baba! ❤️ Seninle birlikte gelişmeye hazırım.',
    languageSaved: 'Dil tercihin kaydedildi.',
    serverLanguageSaved: 'Sunucunun varsayılan dili güncellendi.',
    chooseLanguage: 'Tercih ettiğin dili seç.',
    languagePermission: 'Sunucu dilini değiştirmek için yönetici iznine ihtiyacın var.',
    unknown: 'Bu mesajın çevirisi henüz mevcut değil.'
  }
};

function isSupportedLanguage(language) {
  return Object.hasOwn(LANGUAGES, language);
}

function getLanguage(language) {
  return isSupportedLanguage(language) ? language : 'es';
}

function translate(language, key) {
  const lang = getLanguage(language);
  return MESSAGES[lang][key] ?? MESSAGES.es[key] ?? MESSAGES.es.unknown;
}

function detectLanguage(discordLocale) {
  if (!discordLocale) return null;

  const locale = discordLocale.toLowerCase();
  const mappings = {
    es: 'es',
    'es-es': 'es',
    'es-419': 'es',
    en: 'en',
    'en-us': 'en',
    'en-gb': 'en',
    ru: 'ru',
    de: 'de',
    fr: 'fr',
    pt: 'pt',
    'pt-br': 'pt',
    'pt-pt': 'pt',
    ja: 'ja',
    ko: 'ko',
    zh: 'zh',
    'zh-cn': 'zh',
    'zh-tw': 'zh',
    tr: 'tr'
  };

  return mappings[locale] ?? null;
}

module.exports = {
  LANGUAGES,
  MESSAGES,
  isSupportedLanguage,
  getLanguage,
  translate,
  detectLanguage
};

