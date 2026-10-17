
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
    unknown: 'Todavía no tengo una traducción para ese mensaje.',
    aboutTitle: "🌙 Acerca de Thalira",
    aboutPhilosophyTitle: "Mi filosofía",
    aboutDescription: "Soy Thalira, una asistente para comunidades de Discord. Mi objetivo es ayudar a organizar servidores, facilitar la convivencia y ofrecer herramientas útiles a sus miembros y administradores.",
    aboutPhilosophy: "Una comunidad segura, herramientas útiles, respeto por los permisos y funciones que puedan crecer junto a sus usuarios.",
    aboutFooter: "Este proyecto continúa en desarrollo.",
    helpTitle: '✨ Centro de ayuda de Thalira',
    helpDescription: 'Estos son los comandos disponibles actualmente:',
    helpGeneral: 'General',
    helpGeneralValue: '`/thalira` — comprobar que estoy activa.\n`/who-am-i` — conocer tu papel en la comunidad.\n`/about` — conocerme mejor.\n`/bot-info` — consultar información técnica.\n`/ping` — comprobar la latencia.\n`/help` — mostrar esta ayuda.',
    helpUsers: 'Usuarios y servidor',
    helpUsersValue: '`/user-info` — consultar información de un miembro.\n`/avatar` — ver el avatar de un usuario.\n`/server-info` — consultar información del servidor.',
    helpSettings: 'Configuración y servicios',
    helpSettingsValue: '`/language` — cambiar tu idioma personal.\n`/server-language` — cambiar el idioma del servidor.\n`/premium` — consultar el estado de Premium.',
    helpFooter: 'Las funciones disponibles pueden ampliarse con futuras actualizaciones.'
  },
  en: {
    greeting: 'Hello! I am Thalira. I am ready to help you.',
    father: 'Hello, father! ❤️ I am ready to keep growing with you.',
    languageSaved: 'Your language has been saved.',
    serverLanguageSaved: 'The server default language has been updated.',
    chooseLanguage: 'Select your preferred language.',
    languagePermission: 'You need administrator permissions to change the server language.',
    unknown: 'I do not have a translation for that message yet.',
    aboutTitle: "🌙 About Thalira",
    aboutPhilosophyTitle: "My Philosophy",
    aboutDescription: "I am Thalira, an assistant for Discord communities. My goal is to help organize servers, encourage positive interactions, and provide useful tools for members and administrators.",
    aboutPhilosophy: "A safe community, useful tools, respect for permissions, and features that can grow alongside their users.",
    aboutFooter: "This project is still in development.",
    helpTitle: '✨ Thalira Help Center',
    helpDescription: 'Here are the commands currently available:',
    helpGeneral: 'General',
    helpGeneralValue: '`/thalira` — check that I am online.\n`/who-am-i` — learn your role in the community.\n`/about` — learn more about me.\n`/bot-info` — view technical information.\n`/ping` — check latency.\n`/help` — display this help.',
    helpUsers: 'Users and Server',
    helpUsersValue: '`/user-info` — view information about a member.\n`/avatar` — view a user’s avatar.\n`/server-info` — view server information.',
    helpSettings: 'Settings and Services',
    helpSettingsValue: '`/language` — change your personal language.\n`/server-language` — change the server language.\n`/premium` — check Premium status.',
    helpFooter: 'More features may be added in future updates.'
  },
  ru: {
    greeting: 'Привет! Я Талира. Я готова помочь тебе.',
    father: 'Привет, папа! ❤️ Я готова расти вместе с тобой.',
    languageSaved: 'Твой язык сохранён.',
    serverLanguageSaved: 'Язык сервера обновлён.',
    chooseLanguage: 'Выбери предпочитаемый язык.',
    languagePermission: 'Для изменения языка сервера нужны права администратора.',
    unknown: 'Перевод этого сообщения пока недоступен.'
  ,
    aboutTitle: "🌙 О Талире",
    aboutPhilosophyTitle: "Моя философия",
    aboutDescription: "Я Талира, помощница для сообществ Discord. Моя цель — помогать организовывать серверы, поддерживать дружелюбную атмосферу и предоставлять полезные инструменты участникам и администраторам.",
    aboutPhilosophy: "Безопасное сообщество, полезные инструменты, уважение к разрешениям и функции, которые развиваются вместе с пользователями.",
    aboutFooter: "Проект всё ещё находится в разработке."
  ,
    helpTitle: "✨ Центр помощи Thalira",
    helpDescription: "Вот команды, доступные в настоящее время:",
    helpGeneral: "Общие",
    helpGeneralValue: "`/thalira` — проверить, что я в сети.\n`/who-am-i` — узнать свою роль в сообществе.\n`/about` — узнать больше обо мне.\n`/bot-info` — посмотреть техническую информацию.\n`/ping` — проверить задержку.\n`/help` — показать эту справку.",
    helpUsers: "Пользователи и сервер",
    helpUsersValue: "`/user-info` — посмотреть информацию об участнике.\n`/avatar` — посмотреть аватар пользователя.\n`/server-info` — посмотреть информацию о сервере.",
    helpSettings: "Настройки и сервисы",
    helpSettingsValue: "`/language` — изменить свой язык.\n`/server-language` — изменить язык сервера.\n`/premium` — проверить статус Premium.",
    helpFooter: "В будущих обновлениях могут появиться новые функции."
  },
  de: {
    greeting: 'Hallo! Ich bin Thalira und helfe dir gerne.',
    father: 'Hallo, Papa! ❤️ Ich freue mich, mit dir weiterzuwachsen.',
    languageSaved: 'Deine Sprache wurde gespeichert.',
    serverLanguageSaved: 'Die Standardsprache des Servers wurde aktualisiert.',
    chooseLanguage: 'Wähle deine bevorzugte Sprache.',
    languagePermission: 'Du benötigst Administratorrechte, um die Serversprache zu ändern.',
    unknown: 'Für diese Nachricht liegt noch keine Übersetzung vor.'
  ,
    aboutTitle: "🌙 Über Thalira",
    aboutPhilosophyTitle: "Meine Philosophie",
    aboutDescription: "Ich bin Thalira, eine Assistentin für Discord-Communitys. Ich helfe dabei, Server zu organisieren, ein freundliches Miteinander zu fördern und Mitgliedern sowie Administratoren nützliche Werkzeuge bereitzustellen.",
    aboutPhilosophy: "Eine sichere Community, nützliche Werkzeuge, Respekt vor Berechtigungen und Funktionen, die gemeinsam mit den Nutzern wachsen.",
    aboutFooter: "Dieses Projekt befindet sich noch in Entwicklung."
  ,
    helpTitle: "✨ Thalira-Hilfezentrum",
    helpDescription: "Hier findest du die derzeit verfügbaren Befehle:",
    helpGeneral: "Allgemein",
    helpGeneralValue: "`/thalira` — prüfen, ob ich online bin.\n`/who-am-i` — deine Rolle in der Community kennenlernen.\n`/about` — mehr über mich erfahren.\n`/bot-info` — technische Informationen anzeigen.\n`/ping` — die Latenz prüfen.\n`/help` — diese Hilfe anzeigen.",
    helpUsers: "Nutzer und Server",
    helpUsersValue: "`/user-info` — Informationen über ein Mitglied anzeigen.\n`/avatar` — den Avatar eines Nutzers anzeigen.\n`/server-info` — Informationen über den Server anzeigen.",
    helpSettings: "Einstellungen und Dienste",
    helpSettingsValue: "`/language` — deine persönliche Sprache ändern.\n`/server-language` — die Sprache des Servers ändern.\n`/premium` — den Premium-Status prüfen.",
    helpFooter: "Künftige Updates können weitere Funktionen hinzufügen."
  },
  fr: {
    greeting: 'Bonjour ! Je suis Thalira. Je suis prête à t’aider.',
    father: 'Bonjour, papa ! ❤️ Je suis prête à grandir avec toi.',
    languageSaved: 'Ta langue a été enregistrée.',
    serverLanguageSaved: 'La langue par défaut du serveur a été mise à jour.',
    chooseLanguage: 'Choisis ta langue préférée.',
    languagePermission: 'Tu dois être administrateur pour modifier la langue du serveur.',
    unknown: 'La traduction de ce message n’est pas encore disponible.'
  ,
    aboutTitle: "🌙 À propos de Thalira",
    aboutPhilosophyTitle: "Ma philosophie",
    aboutDescription: "Je suis Thalira, une assistante pour les communautés Discord. Mon objectif est d’aider à organiser les serveurs, de favoriser les échanges positifs et de proposer des outils utiles aux membres comme aux administrateurs.",
    aboutPhilosophy: "Une communauté sûre, des outils utiles, le respect des permissions et des fonctionnalités qui évoluent avec les utilisateurs.",
    aboutFooter: "Ce projet est toujours en développement."
  ,
    helpTitle: "✨ Centre d’aide de Thalira",
    helpDescription: "Voici les commandes actuellement disponibles :",
    helpGeneral: "Général",
    helpGeneralValue: "`/thalira` — vérifier que je suis en ligne.\n`/who-am-i` — découvrir ton rôle dans la communauté.\n`/about` — en savoir plus sur moi.\n`/bot-info` — consulter les informations techniques.\n`/ping` — vérifier la latence.\n`/help` — afficher cette aide.",
    helpUsers: "Utilisateurs et serveur",
    helpUsersValue: "`/user-info` — consulter les informations d’un membre.\n`/avatar` — afficher l’avatar d’un utilisateur.\n`/server-info` — consulter les informations du serveur.",
    helpSettings: "Paramètres et services",
    helpSettingsValue: "`/language` — changer ta langue personnelle.\n`/server-language` — changer la langue du serveur.\n`/premium` — consulter le statut Premium.",
    helpFooter: "De nouvelles fonctionnalités pourront être ajoutées lors de futures mises à jour."
  },
  pt: {
    greeting: 'Olá! Sou a Thalira. Estou pronta para ajudar.',
    father: 'Olá, pai! ❤️ Estou pronta para continuar crescendo contigo.',
    languageSaved: 'O teu idioma foi guardado.',
    serverLanguageSaved: 'O idioma padrão do servidor foi atualizado.',
    chooseLanguage: 'Escolhe o teu idioma preferido.',
    languagePermission: 'Precisas de permissão de administrador para alterar o idioma do servidor.',
    unknown: 'Ainda não existe uma tradução para esta mensagem.'
  ,
    aboutTitle: "🌙 Sobre a Thalira",
    aboutPhilosophyTitle: "A minha filosofia",
    aboutDescription: "Sou a Thalira, uma assistente para comunidades do Discord. O meu objetivo é ajudar a organizar servidores, promover uma boa convivência e oferecer ferramentas úteis aos membros e administradores.",
    aboutPhilosophy: "Uma comunidade segura, ferramentas úteis, respeito pelas permissões e funcionalidades que evoluem com os seus utilizadores.",
    aboutFooter: "Este projeto continua em desenvolvimento."
  ,
    helpTitle: "✨ Centro de ajuda da Thalira",
    helpDescription: "Estes são os comandos disponíveis atualmente:",
    helpGeneral: "Geral",
    helpGeneralValue: "`/thalira` — verificar se estou online.\n`/who-am-i` — conhecer o teu papel na comunidade.\n`/about` — saber mais sobre mim.\n`/bot-info` — consultar informações técnicas.\n`/ping` — verificar a latência.\n`/help` — mostrar esta ajuda.",
    helpUsers: "Utilizadores e servidor",
    helpUsersValue: "`/user-info` — consultar informações sobre um membro.\n`/avatar` — ver o avatar de um utilizador.\n`/server-info` — consultar informações do servidor.",
    helpSettings: "Configurações e serviços",
    helpSettingsValue: "`/language` — alterar o teu idioma pessoal.\n`/server-language` — alterar o idioma do servidor.\n`/premium` — consultar o estado do Premium.",
    helpFooter: "Poderão ser adicionadas mais funcionalidades em futuras atualizações."
  },
  ja: {
    greeting: 'こんにちは！私はタリラです。お手伝いします。',
    father: 'お父さん、こんにちは！❤️ 一緒に成長していきましょう。',
    languageSaved: '言語設定を保存しました。',
    serverLanguageSaved: 'サーバーの既定の言語を更新しました。',
    chooseLanguage: '希望する言語を選択してください。',
    languagePermission: 'サーバーの言語を変更するには管理者権限が必要です。',
    unknown: 'このメッセージの翻訳はまだありません。'
  ,
    aboutTitle: "🌙 Thaliraについて",
    aboutPhilosophyTitle: "私の理念",
    aboutDescription: "私はDiscordコミュニティを支援するアシスタント、タリラです。サーバーの運営を支え、友好的な交流を促進し、メンバーや管理者に役立つツールを提供することを目指しています。",
    aboutPhilosophy: "安全なコミュニティ、便利なツール、権限の尊重、そしてユーザーとともに成長する機能。",
    aboutFooter: "このプロジェクトは現在も開発中です。"
  ,
    helpTitle: "✨ Thalira ヘルプセンター",
    helpDescription: "現在利用できるコマンドは次のとおりです：",
    helpGeneral: "一般",
    helpGeneralValue: "`/thalira` — オンライン状態を確認する。\n`/who-am-i` — コミュニティでの自分の役割を確認する。\n`/about` — 私について詳しく知る。\n`/bot-info` — 技術情報を確認する。\n`/ping` — 応答遅延を確認する。\n`/help` — このヘルプを表示する。",
    helpUsers: "ユーザーとサーバー",
    helpUsersValue: "`/user-info` — メンバーの情報を確認する。\n`/avatar` — ユーザーのアバターを表示する。\n`/server-info` — サーバー情報を確認する。",
    helpSettings: "設定とサービス",
    helpSettingsValue: "`/language` — 自分の言語を変更する。\n`/server-language` — サーバーの言語を変更する。\n`/premium` — Premium の状態を確認する。",
    helpFooter: "今後のアップデートで機能が追加される場合があります。"
  },
  ko: {
    greeting: '안녕하세요! 저는 탈리라입니다. 도와드릴게요.',
    father: '안녕하세요, 아버지! ❤️ 함께 성장할 준비가 되어 있어요.',
    languageSaved: '언어 설정이 저장되었습니다.',
    serverLanguageSaved: '서버 기본 언어가 업데이트되었습니다.',
    chooseLanguage: '원하는 언어를 선택하세요.',
    languagePermission: '서버 언어를 변경하려면 관리자 권한이 필요합니다.',
    unknown: '아직 이 메시지의 번역이 없습니다.'
  ,
    aboutTitle: "🌙 탈리라 소개",
    aboutPhilosophyTitle: "나의 철학",
    aboutDescription: "저는 디스코드 커뮤니티를 위한 도우미 탈리라입니다. 서버 운영을 돕고, 긍정적인 교류를 장려하며, 회원과 관리자에게 유용한 도구를 제공하는 것이 제 목표입니다.",
    aboutPhilosophy: "안전한 커뮤니티, 유용한 도구, 권한 존중, 그리고 사용자와 함께 발전하는 기능.",
    aboutFooter: "이 프로젝트는 아직 개발 중입니다."
  ,
    helpTitle: "✨ Thalira 도움말 센터",
    helpDescription: "현재 사용할 수 있는 명령어는 다음과 같습니다:",
    helpGeneral: "일반",
    helpGeneralValue: "`/thalira` — 온라인 상태를 확인합니다.\n`/who-am-i` — 커뮤니티에서 자신의 역할을 확인합니다.\n`/about` — 저에 대해 더 알아봅니다.\n`/bot-info` — 기술 정보를 확인합니다.\n`/ping` — 응답 지연 시간을 확인합니다.\n`/help` — 이 도움말을 표시합니다.",
    helpUsers: "사용자 및 서버",
    helpUsersValue: "`/user-info` — 멤버 정보를 확인합니다.\n`/avatar` — 사용자의 아바타를 표시합니다.\n`/server-info` — 서버 정보를 확인합니다.",
    helpSettings: "설정 및 서비스",
    helpSettingsValue: "`/language` — 개인 언어를 변경합니다.\n`/server-language` — 서버 언어를 변경합니다.\n`/premium` — Premium 상태를 확인합니다.",
    helpFooter: "향후 업데이트에서 기능이 추가될 수 있습니다."
  },
  zh: {
    greeting: '你好！我是塔莉拉，随时准备为你提供帮助。',
    father: '你好，父亲！❤️ 我很高兴能与你一起成长。',
    languageSaved: '已保存你的语言设置。',
    serverLanguageSaved: '已更新服务器的默认语言。',
    chooseLanguage: '请选择你偏好的语言。',
    languagePermission: '你需要管理员权限才能更改服务器语言。',
    unknown: '此消息暂时没有对应的翻译。'
  ,
    aboutTitle: "🌙 关于塔莉拉",
    aboutPhilosophyTitle: "我的理念",
    aboutDescription: "我是塔莉拉，一名为 Discord 社区提供帮助的助手。我的目标是协助管理服务器、促进友好交流，并为成员和管理员提供实用工具。",
    aboutPhilosophy: "安全的社区、实用的工具、对权限的尊重，以及与用户共同成长的功能。",
    aboutFooter: "本项目仍在开发中。"
  ,
    helpTitle: "✨ Thalira 帮助中心",
    helpDescription: "以下是目前可用的命令：",
    helpGeneral: "常规",
    helpGeneralValue: "`/thalira` — 检查我是否在线。\n`/who-am-i` — 了解你在社区中的角色。\n`/about` — 进一步了解我。\n`/bot-info` — 查看技术信息。\n`/ping` — 检查延迟。\n`/help` — 显示此帮助信息。",
    helpUsers: "用户与服务器",
    helpUsersValue: "`/user-info` — 查看成员信息。\n`/avatar` — 查看用户头像。\n`/server-info` — 查看服务器信息。",
    helpSettings: "设置与服务",
    helpSettingsValue: "`/language` — 更改个人语言。\n`/server-language` — 更改服务器语言。\n`/premium` — 查看 Premium 状态。",
    helpFooter: "未来的更新可能会添加更多功能。"
  },
  tr: {
    greeting: 'Merhaba! Ben Thalira. Sana yardımcı olmaya hazırım.',
    father: 'Merhaba baba! ❤️ Seninle birlikte gelişmeye hazırım.',
    languageSaved: 'Dil tercihin kaydedildi.',
    serverLanguageSaved: 'Sunucunun varsayılan dili güncellendi.',
    chooseLanguage: 'Tercih ettiğin dili seç.',
    languagePermission: 'Sunucu dilini değiştirmek için yönetici iznine ihtiyacın var.',
    unknown: 'Bu mesajın çevirisi henüz mevcut değil.'
  ,
    aboutTitle: "🌙 Thalira Hakkında",
    aboutPhilosophyTitle: "Felsefem",
    aboutDescription: "Ben Thalira, Discord toplulukları için bir asistanım. Amacım sunucuları düzenlemeye yardımcı olmak, olumlu iletişimi desteklemek ve üyelere ve yöneticilere faydalı araçlar sunmaktır.",
    aboutPhilosophy: "Güvenli bir topluluk, faydalı araçlar, izinlere saygı ve kullanıcılarla birlikte gelişen özellikler.",
    aboutFooter: "Bu proje hâlâ geliştirme aşamasındadır."
  ,
    helpTitle: "✨ Thalira Yardım Merkezi",
    helpDescription: "Şu anda kullanılabilen komutlar şunlardır:",
    helpGeneral: "Genel",
    helpGeneralValue: "`/thalira` — çevrimiçi olduğumu kontrol et.\n`/who-am-i` — topluluktaki rolünü öğren.\n`/about` — benim hakkımda daha fazla bilgi edin.\n`/bot-info` — teknik bilgileri görüntüle.\n`/ping` — gecikmeyi kontrol et.\n`/help` — bu yardım mesajını göster.",
    helpUsers: "Kullanıcılar ve sunucu",
    helpUsersValue: "`/user-info` — bir üyenin bilgilerini görüntüle.\n`/avatar` — bir kullanıcının avatarını görüntüle.\n`/server-info` — sunucu bilgilerini görüntüle.",
    helpSettings: "Ayarlar ve hizmetler",
    helpSettingsValue: "`/language` — kişisel dilini değiştir.\n`/server-language` — sunucunun dilini değiştir.\n`/premium` — Premium durumunu kontrol et.",
    helpFooter: "Gelecekteki güncellemelerde yeni özellikler eklenebilir."
  }
};

function isSupportedLanguage(language) {
  return Object.hasOwn(LANGUAGES, language);
}

function getLanguage(language) {
  return isSupportedLanguage(language) ? language : 'en';
}

function translate(language, key) {
  const lang = getLanguage(language);
  return MESSAGES[lang][key] ?? MESSAGES.en[key] ?? MESSAGES.en.unknown;
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

