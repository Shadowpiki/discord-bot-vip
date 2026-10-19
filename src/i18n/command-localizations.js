'use strict';

const COMMAND_LOCALIZATIONS = {
  thalira: {
    name: {
      'es-ES': 'thalira',
      'ru': 'thalira',
      'de': 'thalira',
      'fr': 'thalira',
      'pt-BR': 'thalira',
      'ja': 'thalira',
      'ko': 'thalira',
      'zh-CN': 'thalira',
      'tr': 'thalira',
    },
    description: {
      'es-ES': 'Comprueba que Thalira está funcionando.',
      'ru': 'Проверьте, работает ли Талира.',
      'de': 'Prüfe, ob Thalira funktioniert.',
      'fr': 'Vérifiez que Thalira fonctionne.',
      'pt-BR': 'Verifique se a Thalira está funcionando.',
      'ja': 'Thaliraが正常に動作しているか確認します。',
      'ko': '탈리라가 작동하는지 확인합니다.',
      'zh-CN': '检查 Thalira 是否正常运行。',
      'tr': 'Thalira’nın çalıştığını kontrol edin.',
    },
  },

  'who-am-i': {
    name: {
      'es-ES': 'quien-soy',
      'ru': 'кто-я',
      'de': 'wer-bin-ich',
      'fr': 'qui-suis-je',
      'pt-BR': 'quem-sou-eu',
      'ja': 'わたしはだれ',
      'ko': '나는-누구',
      'zh-CN': '我是谁',
      'tr': 'ben-kimim',
    },
    description: {
      'es-ES': 'Descubre cómo te reconoce Thalira.',
      'ru': 'Узнайте, как Талира вас распознаёт.',
      'de': 'Finde heraus, wie Thalira dich erkennt.',
      'fr': 'Découvrez comment Thalira vous reconnaît.',
      'pt-BR': 'Descubra como Thalira reconhece você.',
      'ja': 'Thaliraがあなたをどう認識するか確認します。',
      'ko': '탈리라가 당신을 어떻게 인식하는지 확인합니다.',
      'zh-CN': '查看 Thalira 如何识别你。',
      'tr': 'Thalira’nın sizi nasıl tanıdığını öğrenin.',
    },
  },

  language: {
    name: {
      'es-ES': 'idioma',
      'ru': 'язык',
      'de': 'sprache',
      'fr': 'langue',
      'pt-BR': 'idioma',
      'ja': '言語',
      'ko': '언어',
      'zh-CN': '语言',
      'tr': 'dil',
    },
    description: {
      'es-ES': 'Cambia tu idioma personal en este servidor.',
      'ru': 'Измените свой язык на этом сервере.',
      'de': 'Ändere deine persönliche Sprache auf diesem Server.',
      'fr': 'Changez votre langue personnelle sur ce serveur.',
      'pt-BR': 'Altere seu idioma pessoal neste servidor.',
      'ja': 'このサーバーで使用する個人の言語を変更します。',
      'ko': '이 서버에서 사용할 개인 언어를 변경합니다.',
      'zh-CN': '更改你在此服务器使用的个人语言。',
      'tr': 'Bu sunucudaki kişisel dilinizi değiştirin.',
    },
    options: {
      language: {
        name: {
          'es-ES': 'idioma',
          'ru': 'язык',
          'de': 'sprache',
          'fr': 'langue',
          'pt-BR': 'idioma',
          'ja': '言語',
          'ko': '언어',
          'zh-CN': '语言',
          'tr': 'dil',
        },
        description: {
          'es-ES': 'Elige tu idioma personal.',
          'ru': 'Выберите свой язык.',
          'de': 'Wähle deine persönliche Sprache.',
          'fr': 'Choisissez votre langue personnelle.',
          'pt-BR': 'Escolha seu idioma pessoal.',
          'ja': '使用する言語を選択します。',
          'ko': '사용할 언어를 선택합니다.',
          'zh-CN': '选择你要使用的语言。',
          'tr': 'Kişisel dilinizi seçin.',
        },
      },
    },
  },

  'server-language': {
    name: {
      'es-ES': 'idioma-servidor',
      'ru': 'язык-сервера',
      'de': 'server-sprache',
      'fr': 'langue-serveur',
      'pt-BR': 'idioma-servidor',
      'ja': 'サーバー言語',
      'ko': '서버-언어',
      'zh-CN': '服务器语言',
      'tr': 'sunucu-dili',
    },
    description: {
      'es-ES': 'Cambia el idioma predeterminado del servidor.',
      'ru': 'Измените язык сервера по умолчанию.',
      'de': 'Ändere die Standardsprache des Servers.',
      'fr': 'Changez la langue par défaut du serveur.',
      'pt-BR': 'Altere o idioma padrão do servidor.',
      'ja': 'サーバーのデフォルト言語を変更します。',
      'ko': '서버의 기본 언어를 변경합니다.',
      'zh-CN': '更改服务器的默认语言。',
      'tr': 'Sunucunun varsayılan dilini değiştirin.',
    },
    options: {
      language: {
        name: {
          'es-ES': 'idioma',
          'ru': 'язык',
          'de': 'sprache',
          'fr': 'langue',
          'pt-BR': 'idioma',
          'ja': '言語',
          'ko': '언어',
          'zh-CN': '语言',
          'tr': 'dil',
        },
        description: {
          'es-ES': 'Elige el idioma del servidor.',
          'ru': 'Выберите язык сервера.',
          'de': 'Wähle die Serversprache.',
          'fr': 'Choisissez la langue du serveur.',
          'pt-BR': 'Escolha o idioma do servidor.',
          'ja': 'サーバーの言語を選択します。',
          'ko': '서버에서 사용할 언어를 선택합니다.',
          'zh-CN': '选择服务器使用的语言。',
          'tr': 'Sunucunun dilini seçin.',
        },
      },
    },
  },

  premium: {
    name: {
      'es-ES': 'premium',
      'ru': 'премиум',
      'de': 'premium',
      'fr': 'premium',
      'pt-BR': 'premium',
      'ja': 'プレミアム',
      'ko': '프리미엄',
      'zh-CN': '高级会员',
      'tr': 'premium',
    },
    description: {
      'es-ES': 'Consulta el estado de Premium de este servidor.',
      'ru': 'Проверьте статус Premium этого сервера.',
      'de': 'Prüfe den Premium-Status dieses Servers.',
      'fr': 'Consultez le statut Premium de ce serveur.',
      'pt-BR': 'Consulte o status Premium deste servidor.',
      'ja': 'このサーバーのPremium状態を確認します。',
      'ko': '이 서버의 Premium 상태를 확인합니다.',
      'zh-CN': '查看此服务器的高级会员状态。',
      'tr': 'Bu sunucunun Premium durumunu kontrol edin.',
    },
  },

  help: {
    name: {
      'es-ES': 'ayuda',
      'ru': 'помощь',
      'de': 'hilfe',
      'fr': 'aide',
      'pt-BR': 'ajuda',
      'ja': 'ヘルプ',
      'ko': '도움말',
      'zh-CN': '帮助',
      'tr': 'yardım',
    },
    description: {
      'es-ES': 'Consulta los comandos y funciones de Thalira.',
      'ru': 'Посмотрите команды и возможности Талиры.',
      'de': 'Sieh dir Thaliras Befehle und Funktionen an.',
      'fr': 'Consultez les commandes et fonctions de Thalira.',
      'pt-BR': 'Veja os comandos e recursos da Thalira.',
      'ja': 'Thaliraのコマンドと機能を確認します。',
      'ko': '탈리라의 명령어와 기능을 확인합니다.',
      'zh-CN': '查看 Thalira 的命令和功能。',
      'tr': 'Thalira’nın komutlarını ve özelliklerini görüntüleyin.',
    },
  },

  about: {
    name: {
      'es-ES': 'acerca-de',
      'ru': 'о-боте',
      'de': 'über-thalira',
      'fr': 'à-propos',
      'pt-BR': 'sobre',
      'ja': '概要',
      'ko': '소개',
      'zh-CN': '关于',
      'tr': 'hakkında',
    },
    description: {
      'es-ES': 'Conoce a Thalira y su propósito.',
      'ru': 'Узнайте о Талире и её предназначении.',
      'de': 'Erfahre mehr über Thalira und ihren Zweck.',
      'fr': 'Découvrez Thalira et son objectif.',
      'pt-BR': 'Conheça a Thalira e seu propósito.',
      'ja': 'Thaliraとその目的について紹介します。',
      'ko': '탈리라와 제작 목적을 알아봅니다.',
      'zh-CN': '了解 Thalira 及其使命。',
      'tr': 'Thalira’yı ve amacını tanıyın.',
    },
  },

  'bot-info': {
    name: {
      'es-ES': 'info-bot',
      'ru': 'инфо-бота',
      'de': 'bot-info',
      'fr': 'info-bot',
      'pt-BR': 'info-bot',
      'ja': 'ボット情報',
      'ko': '봇-정보',
      'zh-CN': '机器人信息',
      'tr': 'bot-bilgisi',
    },
    description: {
      'es-ES': 'Consulta información sobre Thalira.',
      'ru': 'Посмотрите информацию о Талире.',
      'de': 'Sieh dir Informationen über Thalira an.',
      'fr': 'Consultez les informations sur Thalira.',
      'pt-BR': 'Veja informações sobre a Thalira.',
      'ja': 'Thaliraに関する情報を表示します。',
      'ko': '탈리라에 관한 정보를 확인합니다.',
      'zh-CN': '查看 Thalira 的相关信息。',
      'tr': 'Thalira hakkında bilgi görüntüleyin.',
    },
  },

  ping: {
    name: {
      'es-ES': 'ping',
      'ru': 'пинг',
      'de': 'ping',
      'fr': 'ping',
      'pt-BR': 'ping',
      'ja': 'ping',
      'ko': 'ping',
      'zh-CN': 'ping',
      'tr': 'ping',
    },
    description: {
      'es-ES': 'Comprueba la latencia de Thalira.',
      'ru': 'Проверьте задержку Талиры.',
      'de': 'Prüfe die Latenz von Thalira.',
      'fr': 'Vérifiez la latence de Thalira.',
      'pt-BR': 'Verifique a latência da Thalira.',
      'ja': 'Thaliraの応答遅延を確認します。',
      'ko': '탈리라의 응답 지연 시간을 확인합니다.',
      'zh-CN': '检查 Thalira 的延迟。',
      'tr': 'Thalira’nın gecikmesini kontrol edin.',
    },
  },

  'user-info': {
    name: {
      'es-ES': 'info-usuario',
      'ru': 'инфо-пользователя',
      'de': 'benutzer-info',
      'fr': 'info-utilisateur',
      'pt-BR': 'info-usuario',
      'ja': 'ユーザー情報',
      'ko': '사용자-정보',
      'zh-CN': '用户信息',
      'tr': 'kullanici-bilgisi',
    },
    description: {
      'es-ES': 'Consulta información sobre un miembro.',
      'ru': 'Посмотрите информацию об участнике.',
      'de': 'Sieh dir Informationen über ein Mitglied an.',
      'fr': 'Consultez les informations d’un membre.',
      'pt-BR': 'Veja informações sobre um membro.',
      'ja': 'メンバーの情報を表示します。',
      'ko': '멤버 정보를 확인합니다.',
      'zh-CN': '查看成员信息。',
      'tr': 'Bir üye hakkında bilgi görüntüleyin.',
    },
    options: {
      user: {
        name: {
          'es-ES': 'usuario',
          'ru': 'пользователь',
          'de': 'benutzer',
          'fr': 'utilisateur',
          'pt-BR': 'usuario',
          'ja': 'ユーザー',
          'ko': '사용자',
          'zh-CN': '用户',
          'tr': 'kullanici',
        },
        description: {
          'es-ES': 'El miembro que quieres consultar.',
          'ru': 'Участник, информацию о котором нужно посмотреть.',
          'de': 'Das Mitglied, das du ansehen möchtest.',
          'fr': 'Le membre que vous souhaitez consulter.',
          'pt-BR': 'O membro que você deseja consultar.',
          'ja': '情報を確認するメンバーを指定します。',
          'ko': '정보를 확인할 멤버를 지정합니다.',
          'zh-CN': '选择要查看信息的成员。',
          'tr': 'Bilgilerini görüntülemek istediğiniz üye.',
        },
      },
    },
  },

  'server-info': {
    name: {
      'es-ES': 'info-servidor',
      'ru': 'инфо-сервера',
      'de': 'server-info',
      'fr': 'info-serveur',
      'pt-BR': 'info-servidor',
      'ja': 'サーバー情報',
      'ko': '서버-정보',
      'zh-CN': '服务器信息',
      'tr': 'sunucu-bilgisi',
    },
    description: {
      'es-ES': 'Consulta información sobre este servidor.',
      'ru': 'Посмотрите информацию об этом сервере.',
      'de': 'Sieh dir Informationen über diesen Server an.',
      'fr': 'Consultez les informations sur ce serveur.',
      'pt-BR': 'Veja informações sobre este servidor.',
      'ja': 'このサーバーの情報を表示します。',
      'ko': '이 서버의 정보를 확인합니다.',
      'zh-CN': '查看此服务器的信息。',
      'tr': 'Bu sunucu hakkında bilgi görüntüleyin.',
    },
  },

  avatar: {
    name: {
      'es-ES': 'avatar',
      'ru': 'аватар',
      'de': 'avatar',
      'fr': 'avatar',
      'pt-BR': 'avatar',
      'ja': 'アバター',
      'ko': '아바타',
      'zh-CN': '头像',
      'tr': 'avatar',
    },
    description: {
      'es-ES': 'Muestra el avatar de un usuario.',
      'ru': 'Покажите аватар пользователя.',
      'de': 'Zeige den Avatar eines Benutzers.',
      'fr': 'Affichez l’avatar d’un utilisateur.',
      'pt-BR': 'Mostre o avatar de um usuário.',
      'ja': 'ユーザーのアバターを表示します。',
      'ko': '사용자의 아바타를 표시합니다.',
      'zh-CN': '显示用户头像。',
      'tr': 'Bir kullanıcının avatarını gösterin.',
    },
    options: {
      user: {
        name: {
          'es-ES': 'usuario',
          'ru': 'пользователь',
          'de': 'benutzer',
          'fr': 'utilisateur',
          'pt-BR': 'usuario',
          'ja': 'ユーザー',
          'ko': '사용자',
          'zh-CN': '用户',
          'tr': 'kullanici',
        },
        description: {
          'es-ES': 'El usuario cuyo avatar quieres ver.',
          'ru': 'Пользователь, чей аватар нужен.',
          'de': 'Der Benutzer, dessen Avatar du sehen möchtest.',
          'fr': 'L’utilisateur dont vous souhaitez voir l’avatar.',
          'pt-BR': 'O usuário cujo avatar você deseja ver.',
          'ja': 'アバターを表示するユーザーを指定します。',
          'ko': '아바타를 표시할 사용자를 지정합니다.',
          'zh-CN': '选择要查看头像的用户。',
          'tr': 'Avatarını görmek istediğiniz kullanıcı.',
        },
      },
    },
  },
};

const SUPPORTED_COMMAND_LOCALES = [
  'es-ES',
  'ru',
  'de',
  'fr',
  'pt-BR',
  'ja',
  'ko',
  'zh-CN',
  'tr',
];

function applyCommandLocalizations(command, commandKey) {
  const localization = COMMAND_LOCALIZATIONS[commandKey];

  if (!localization) {
    return command;
  }

  command
    .setNameLocalizations(localization.name)
    .setDescriptionLocalizations(localization.description);

  for (const [optionName, optionLocalization] of Object.entries(
    localization.options || {},
  )) {
    const option = command.options.find(
      (candidate) => candidate.name === optionName,
    );

    if (!option) {
      continue;
    }

    option
      .setNameLocalizations(optionLocalization.name)
      .setDescriptionLocalizations(optionLocalization.description);
  }

  return command;
}

module.exports = {
  COMMAND_LOCALIZATIONS,
  SUPPORTED_COMMAND_LOCALES,
  applyCommandLocalizations,
};
