export default {
  Agreement: {
    agreement: "Соглашение",
    Agreement: "СОГЛАШЕНИЕ",
  },
  Certificate: {
    Certificate: "СЕРТИФИКАТЫ",
    FCertificates: "СЕРТИФИКАТАМИ",
    certificate: "Сертификат",
    certs: "Сертификаты",
    delete_certificate: "Удаление сертификата",
    realy_delete_certificate: "Вы действительно хотите удалить сертификат?",
    key_import_ok: "Ключ привязан к сертификату",
    key_import_failed: "Не удалось привязать ключ",
    cert_info: "Сведения о сертификате",
    cert: "Сертификаты",
    cert_not_found: "Сертификаты не найдены",
    cert_not_select: "Сертификат не выбран",
    Select_Cert_Sign: "ВЫБРАТЬ СЕРТИФИКАТ ПОДПИСИ",
    cert_chain: "Цепочка сертификации",
    serialNumber: "Серийный номер",
    thumbprint: "Отпечаток",
    version: "Версия",
    subject: "Владелец сертификата",
    organization: "Организация",
    issuer: "Кем выдан",
    cert_valid: "Годен до",
    import_key: "Импортировать ключ",
    priv_key: "Закрытый ключ",
    issuer_name: "Издатель",
    signature_digest_algorithm: "Хэш-алгоритм подписи",
    public_key_algorithm: "Алгоритм открытого ключа",
    present: "Присутствует",
    absent: "Отсутствует",
    cert_status_true: "действителен",
    cert_status_false: "недействителен",
    cert_chain_status: "Общий статус цепочки",
    cert_chain_status_true: "действительна",
    cert_chain_status_false: "недействительна",
    cert_chain_info: "Состав цепочки",
    cert_export: "Экспортировать",
    export_cert: "Экспорт сертификата",
    cert_export_ok: "Сертификат успешно экспортирован",
    cert_export_cancel: "Отмена экспорта сертификата",
    cert_export_failed: "Не удалось экспортировать сертификат",
    cert_import_ok: "Сертификат успешно импортирован",
    cert_import_failed: "Не удалось импортировать сертификат",
    cert_trusted_import_ok: "Корневой сертификат успешно импортирован",
    cert_trusted_import_failed: "Не удалось импортировать корневой сертификат",
    cert_load_failed: "Не удалось прочитать сертификат",
    cert_delete_ok: "Сертификат успешно удалён",
    cert_delete_failed: "Не удалось удалить сертификат",
    cert_import: "Импортировать",
    Select_Cert_Encrypt: "ВЫБРАТЬ СЕРТИФИКАТ ПОЛУЧАТЕЛЯ",
    certs_encrypt: "Сертификаты шифрования",
    certs_getters: "Сертификаты получателей",
    cert_imported: "Сертификат уже импортирован",
    certs_my: "Личные сертификаты",
    certs_other: "Сертификаты других пользователей",
    certs_intermediate: "Промежуточные сертификаты",
    certs_root: "Доверенные корневые сертификаты",
    certs_token: "Сертификаты внешних носителей",
  },
  Events: {
    Operations_log: "ЖУРНАЛ ОПЕРАЦИЙ",
    operations_log: "Журнал операций",
  },
  EventsTable: {
    date_and_time: "Дата и время",
    operation: "Операция",
    operation_object: "Объект операции",
    status: "Статус",
    user_name: "Пользователь",
  },
  Export: {
    export: "Экспорт",
    export_certificate: "Экспорт сертификата",
    export_format: "Формат экспортируемого файла",
    export_format_pkcs12: "Файл обмена личной информацией PKCS#12 (PFX)",
    export_format_der: "X509 (.CER) в кодировке DER",
    export_format_base64: "X509 (.CER) в кодировке BASE64",
    export_private_key: "Эскпортировать закрытый ключ",
    no_export_private_key: "Не эскпортировать закрытый ключ",
    export_private_key_with_certificate: "Эскпортировать закрытый ключ вместе с сертификатом",
    export_params: "Экспорт параметров",
    export_set_password: "Укажите пароль для защиты закрытого ключа",
    export_set_encoding: "Выберите тип кодировки для применения в экспортируемом файле",
  },
  Filters: {
    filters_settings: "Настройки фильтрации",
  },
  Containers: {
    containers: "Контейнеры",
    Containers: "КОНТЕЙНЕРЫ",
    containersNotFound: "Контейнеры не найдены",
    container_delete_ok: "Контейнер успешно удалён",
    container_delete_failed: "Не удалось удалить контейнер",
    certificateInfo: "Сведения о сертификате",
    contNotSelected: "Контейнер не выбран",
    delete_container: "удалить связанный с сертификатом контейнер (не рекомендуется)",
    installCertificate: "Установить сертификат",
  },
  CSR: {
    algorithm: "Алгоритм",
    container: "Контейнер (будет создан новый)",
    create_request: "Создание запроса на сертификат",
    create_request_created: "Запрос на сертификат успешно создан",
    create_selfSigned: "Создать самоподписанный сертификат",
    template_label: "Шаблон сертификата",
    template_default: "Шаблон по умолчанию",
    template_additional_fields: "Шаблон с расширенным списком полей",
    template_kep_ip: "Сертификат КЭП индивидуального предпринимателя",
    template_kep_fiz: "Сертификат КЭП физичексого лица",
    csp_label: "Используемый криптопровайдер",
    csp_openssl: "OpenSSL RSA",
    csp_microsoft_base: "Microsoft Base Cryptografic Provaider v1.0",
    not_after: "Действителен до",
    generate_new_key: "Создать новый ключевой набор",
    exportable_key: "Пометить ключи как экспортируемые",
    key_length: "Длина ключа",
    keys_params: "Параметры ключа",
    subject_params: "Сведения о владельце сертификата",
    country: "Страна",
    common_name: "Идентификатор CN",
    inn: "ИНН",
    snils: "СНИЛС",
    ogrnip: "ОГРНИП",
    organization_name: "Организация",
    organizational_unit_name: "Подразделение",
    title: "Должность",
    locality_name: "Город",
    province_name: "Область",
    email_address: "Email адрес",
    key_generation_error: "Ошибка генерации ключевой пары",
    key_usage: "Использование ключа",
    key_usage_group: "Назначение ключа",
    key_usage_sign: "Подпись",
    key_usage_encrypt: "Шифрование",
    key_usage_sign_encrypt: "Подпись и шифрование",
    key_usage_dataEncipherment: "Шифрование",
    key_usage_keyAgreement: "Согласование",
    key_usage_keyCertSign: "Подпись сертификатов",
    key_usage_decipherOnly: "Только расшифрование",
    key_usage_encipherOnly: "Только шифрование",
    key_usage_digitalSignature: "Подпись",
    key_usage_nonRepudiation: "Неотрекаемость",
    key_usage_cRLSign: "Автономное подписание списка отзыва (CRL)",
    key_usage_keyEncipherment: "Шифрование ключа",
    extKeyUsage: "Назначение сертификата (EKU)",
    eku_serverAuth: "Проверка подлинности сервера",
    eku_clientAuth: "Проверка подлинности клиента",
    eku_emailProtection: "Защита электронной почты",
    eku_codeSigning: "Подпись кода",
    fill_required_fields: "Заполните обязательные поля",
  },
  Key: {
    key_load_failed: "Не удалось прочитать ключ",
  },
  Encrypt: {
    archive_name: "encrypt_files.zip",
    files_archived: "Файлы заархивированы",
    files_encrypt: "Файлы зашифрованы",
    files_encrypt_failed: "При шифровании произошла ошибка",
    files_archived_failed: "При архивировании произошла ошибка",
    decrypt_key_failed: "Не удалось найти ключ",
    files_decrypt: "Файлы расшифрованы",
    files_decrypt_failed: "Во время расшифровывания произошла ошибка",
    encrypt_and_decrypt: "Зашифровать / Расшифровать",
    encrypt: "Зашифровать",
    Encrypt: "ЗАШИФРОВАТЬ",
    decrypt: "Расшифровать",
    Encryption: "ШИФРОВАНИЕ",
    encrypt_setting: "Настройки шифрования",
    delete_files_after: "Удалить файлы после шифрования",
    archive_files_before: "Архивировать перед шифрованием",
    search_decrypt_cert_failed: "Не удается найти сертификат расшифровывания",
  },
  Sign: {
    sign_and_verify: "Подписать / Проверить подпись",
    sign: "Подписать",
    resign: "Добавить",
    unsign: "Снять",
    Sign: "ПОДПИСАТЬ",
    Signature: "ПОДПИСЬ",
    verify: "Проверить",
    load_sign_failed: "Ошибка чтения файла подписи",
    files_signed: "Файлы подписаны",
    files_signed_failed: "При подписи файлов произошла ошибка",
    files_resigned_failed: "При добавлении подписи произошла ошибка",
    files_resigned_exist: "Подпись уже существует. Выберите другой сертификат",
    files_resigned: "Подпись добавлена",
    files_unsigned_failed: "При снятии подписи произошла ошибка",
    files_unsigned_detached: "Открепленная подпись",
    files_unsigned_ok: "Снятие подписи закончено успешно",
    verify_sign_ok: "Проверка подписей прошла успешно",
    verify_sign_founds_errors: "При проверке подписи обнаружены ошибки",
    verify_signercontent_founds_errors: "При проверке контента подписчика обнаружены ошибки",
    verify_sign_failed: "Не удалось проверить подпись",
    verify_signers_failed: "Не удалось проверить подписчиков",
    verify_get_content_failed: "Исходный файл не найден",
    set_content_failed: "Ошибка установки исходного контента",
    build_chain_failed: "Не удалось построить цепочку",
    sign_info: "Информация о подписи",
    sign_content_file: "Выбор исходного файла для подписи: ",
    sign_detached: "Сохранить подпись отдельно",
    sign_time: "Добавить время подписи",
    sign_setting: "Настройки подписи",
    sign_ok: "Подпись действительна",
    sign_error: "Подпись недействительна",
    key_not_found: "Не удалось найти ключ",
    signercert_not_found: "Не удалось найти сертификат подписчика",
    signingTime: "Время подписи",
    status: "Статус",
    alg: "Алгоритм подписи",
    digest_alg: "Алгоритм хэширования",
  },
  Settings: {
    settings: "Настройки",
    encoding: "Кодировка",
    directory_file_save: "Директория для сохранения файла",
    failed_find_directory: "Указанная директория не существует",
    DER: "DER",
    BASE: "BASE-64",
    add_files: "Добавить файлы",
    selected_all: "Выделить все",
    remove_selected: "Сбросить выделение",
    remove_all_files: "Удалить все из списка",
    drag_drop: "Перетащите в это поле мышкой",
    open_file: "Открыть файл",
    go_to_file: "Перейти к файлу",
    delete_file: "Удалить из списка",
    write_file_failed: "Ошибка записи в файл",
    write_file_ok: "Настройки сохранены",
    setting_file: "settings.json",
    field_empty: "Поле не может быть пустым",
    email_error: "Некорректный e-mail",
    choose_files: "Выбрать файлы",
    choose: "Выбрать",
    remove_list: "Очистить список",
    print: "Печать",
    Control: "УПРАВЛЕНИЕ",
    Datas: "ДАННЫХ",
    Digital: "ЭЛЕКТРОННАЯ",
    pass_enter: "Ввод пароля",
    password: "Пароль",
    password_confirm: "Подтверждение пароля",
    wait: "Пожалуйста, подождите...",
    pattern_failed: "Только латинские буквы, цифры и специальные символы",
  },
  Help: {
    help: "Справка",
    Help: "СПРАВКА",
    Important: "Важно!",
    Header1: "СПРАВОЧНАЯ ПОМОЩЬ ПО ПРОГРАММЕ КРИПТОАРМ ГОСТ",
    Paragraf_1_1: "Данная справочная помощь является кратким справочником по интерфейсу приложения КриптоАРМ ГОСТ и не охватывает всех особенностей установки, настройки и работы с ним.",
    Paragraf_1_2a: "Полную версию документации на программный продукт можно получить по ссылке",
    Paragraf_1_2b: "КриптоАРМ ГОСТ Руководство пользователя.pdf",
    Paragraf_1_3a: "Приложение КриптоАРМ ГОСТ является коммерческим продуктом и для его полноценной работы необходимо приобретение лицензии. С условиями приобретения лицензии можно ознакомиться в интернет-магазине ",
    Paragraf_1_3b: "КриптоАРМ.RU",
    Header2: "СОДЕРЖАНИЕ СПРАВОЧНОЙ ПОМОЩИ",
    Paragraf_2_1: "1. Начало работы с приложением. Интерфейс главного окна",
    Paragraf_2_2: "2. Мастер установки лицензии",
    Paragraf_2_3: "3. Мастер создания / проверки электронной подписи",
    Paragraf_2_4: "4. Мастер шифрования / расшифрования файлов",
    Paragraf_2_5: "5. Мастер управления сертификатами",
    Header3: "1. НАЧАЛО РАБОТЫ С ПРИЛОЖЕНИЕМ. ИНТЕРФЕЙС ГЛАВНОГО ОКНА",
    Paragraf_3_1: "При запуске приложения КриптоАРМ ГОСТ появляется главное окно приложения, представленное на рисунке ниже. На главном окне расположены кнопки перехода к основным мастерам приложения: мастеру создания/проверки электронной подписи, мастеру шифрования/расшифрования файлов, мастеру управления сертификатами подключенных хранилищ.",
    Paragraf_3_2: "В заголовке окна приложения расположена кнопка вызова бокового меню (меню изображено на рисунке справа) и кнопка переключения языка интерфейса. С помощью меню приложения выполняется переход к основным мастерам и дополнительно можно получить доступ к странице со сведениями о программе, мастеру установки лицензии и краткой справочной помощи.",
    Paragraf_3_3: "Главное окно приложения имеет фиксированный размер без возможности его изменения. Приложение сохраняет все глобальные настройки, которые были внесены пользователем. Сохранение происходит при закрытии приложения. В процессе работы с приложением сохраняются также сохраняются действия пользователя, выполненние им в мастерах (выбор сертификатов, выбор файлов и т.д). При переходе на другой мастер (страницу приложения) и возврате обратно не придется заново выполнять те же самые операции.",
    Header4: "2. МАСТЕР УСТАНОВКИ ЛИЦЕНЗИИ",
    Paragraf_4_1: "Для корректной работы приложения необходимо установить лицензию на данный программный продукт. Если при запуске приложения появляются всплывающие сообщения об отсутствии лицензии, истекшем сроке лицензии, невозможности прочитать файл лицензии, то это говорит о том что в данном приложении будут некорректно выполняться операции подписи и расшифрования файлов. Наличию действительной лицензии для приложения следует уделить особое внимание.",
    Paragraf_4_2: "Для установки лицензии и получения сведений о ней в приложении имеется специальный мастер (изображенный на рисунке ниже), который позволяет установить лицензию из файла или буфера обмена. В том и другом случае лицензия зависывается в файл license.lic с размещением его в каталоге пользователя.",
    Paragraf_4_3a: "После успешной установки лицензии требуется выполнить перезагрузку программы. Если при вводе лицензии на программный продукт выдаются сообщения вида: неккоректный лицензионный ключ, лицензия не подходит для данной программы, срок действия лицензии истек, то следует обратиться в службу технической поддержки компании-разработчика (",
    Paragraf_4_3b: ").",
    Header5: "3. МАСТЕР СОЗДАНИЯ / ПРОВЕРКИ ЭЛЕКТРОННОЙ ПОДПИСИ",
    Paragraf_5_1: "В приложении КриптоАРМ ГОСТ имеется мастер, в котором выполняются операции создания электронной подписи для одного или множества файлов. В том же самом мастере реализовано выполнение операций по созданию соподписи файлов и проверки подписанных файлов. Страница мастера представлена на рисунке ниже.",
    Paragraf_5_2: "Страница мастера поделена на три области. Слева находится область выбора сертификата подписчика. Сертификат выбирается из диалога с отображением сертификатов из подлюченных хранилищ.",
    Paragraf_5_3: "В диалоге выбора сертификата подписчика отображаются только сертификаты из раздела Личные сертификаты у которых имеется привязка к закрытому ключу. Другие сертификаты не отображаются и недоступны для использования в данном мастере.",
    Paragraf_5_4: "Для проверки подписи достаточно выбрать проверяемые файлы - файлы с расширением .sig, которые содержат электронную подпись и нажать на кнопку Проверить. Никаких дополнительных манипуляций при проверке подписи производить не нужно.",
    Paragraf_5_5: "Если при проверке отделенной от подписываемого файла подписи исходный файл не будет найден автоматически, будет предложен его выбор. Результат проверка подписей отображается в виде сообщения.",
    Paragraf_5_6: "Для просмотра файлов перед созданием подписи можно воспользоваться контекстным меню (см. рисунок ниже). Проверка подписи производится для выделенных файлов. На рисунке показан результат проверки подписи одного из файлов. Дополнительно с подписанных файлов можно снять подпись. В этом случае сохраняется исходный файл, а подпись удаляется.",
    Header6: "4. МАСТЕР ШИФРОВАНИЯ / РАСШИФРОВАНИЯ ФАЙЛОВ",
    Paragraf_6_1: "В приложении КриптоАРМ ГОСТ имеется мастер, в котором выполняются операции шифрования и расшифрования файлов. Для выполнения операции шифрования используется указание получателей шифрованных файлов в виде списка сертификатов. Те пользователи приложения у которых имеется закрытый ключ, связанный с одним из сертификатов получателей сможет расшифровать файлы.",
    Paragraf_6_2: "Мастер шифрования / расшифрования файлов показан на рисунке ниже. Страница мастера разделена на три области: слева находится область выбора сертификатов получателей, ниже расположены настройки выполнения операций и справа находится область выбора исходных файлов и отображения результата.",
    Paragraf_6_3: "При выборе режима удаления файлов после шифрования, обратите внимание на обеспечение доступа к шифрованным файлам. Для этого в список получателей можно добавить личный сертификат с привязкой к закрытому ключу.",
    Paragraf_6_4: "На рисунке справа представлен диалог выбора сертификатов получателей. В списке доступных сертификатов отображаются все сертификаты из подключенных хранилищ. Сертификаты сгруппированы по вкладкам. В диалоге доступна операция поиска сертификатов.",
    Paragraf_6_5: "В мастере допускается изменение списка получателей и файлов путем их добавления. Операция шифрования производится только над множеством выделенных файлов. Для просмотра файлов перед шифрованием можно воспользоваться контекстным меню (см. рисунок ниже).",
    Paragraf_6_6: "Расшифрование файлов осуществляется по нажатии на кнопку Расшифровать. Для успешного выполнения операции в одном из подключенных хранилищ должен находится закрытый ключ с привязкой к сертификату получателя. В противном случае будет выдана ошибка.",
    Paragraf_6_7: "При успешном расшифровании файлов результат отображается в том же мастере а сами файлы сохраняются либо рядом с зашифрованнными, либо в указанном в настройках каталоге.",
    Header7: "5. МАСТЕР УПРАВЛЕНИЯ СЕРТИФИКАТАМИ И КЛЮЧАМИ",
    Paragraf_7_1: "Для управления сертификатами и ключами в приложение добавлен отдельный мастер. На странице этого мастера отображаются вкладки с сгруппированными в них сертификатами. При первом запуске приложения во вкладке Личные сертификаты должен присутствовать тестовый сертификат и привязанный к нему ключ.",
    Paragraf_7_2: "Для того, чтобы выполнить импорт нового сертификата в хранилище можно воспользоваться контекстным меню - выбрать операцию Импортировать сертификат. В появившемся диалоговом окне нужно выбрать сертификат (поддерживааются кодировки BASE64 и DER) и сертификат помещается в хранилище. ",
    Paragraf_7_3: "Импорт сертификатов из хранилищ поддерживаемых провайдеров осуществляется на уровне использования дополнительных утилит. Наиболее часто встречающиеся ситуации разобраны в Руководстве пользователя.",
    link_user_guide: "https://cryptoarm.ru/upload/docs/userguide-cryptoarm-gost.pdf",
    link_user_guide_name: " КриптоАРМ ГОСТ Руководство пользователя.pdf",
    link_shop: "https://cryptoarm.ru/shop/cryptoarm-gost",
    link_shop_name: " КриптоАРМ.RU",
    Work_App: "РАБОТА С ПРИЛОЖЕНИЕМ В ДЕТАЛЯХ",
    video: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Typing_example.ogv",
        title: "СОЗДАНИЕ ПОДПИСИ",
      },
      {
        src: "http://www.youtubeinmp4.com/redirect.php?video=6Dc1C77nra4",
        title: "ШИФРОВАНИЕ",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/65/Examplevideo.ogv",
        title: "ОПЕРАЦИИ С СЕРТИФИКАТАМИ",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/transcoded/1/14/Xacti-AC8EX-Sample_video-001.ogg/Xacti-AC8EX-Sample_video-001.ogg.360p.ogv",
        title: "ПРОВЕРКА ПОДПИСИ",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/en/6/6e/Terminator.ogg",
        title: "РАСШИФРОВАНИЕ",
      },
      {
        src: "http://html5videoformatconverter.com/data/images/happyfit2.mp4",
        title: "РАБОТА С СЕРВИСОМ TRUSTED NET",
      },
    ],
    video_failed: "Невозможно воспроизвести данное видео... Проверьте соединение с интернетом.",
  },
  About: {
    about: "О программе",
    About: "О ПРОГРАММЕ",
    message_send: "Сообщение отправлено",
    error_message_send: "Ошибка при отправке сообщения",
    version_full: "Версия продукта: 1.3.0",
    version: "1.3.0",
    version_app: "Версия приложения",
    build_number: "Номер сборки",
    product_NAME: "КриптоАРМ ГОСТ",
    product_name: "КриптоАРМ ГОСТ",
    FeedBack: "ОБРАТНАЯ СВЯЗЬ",
    feedback_description: "Сообщить разработчикам об обнаруженных проблемах или предложить идеи по улучшению программы",
    username: "Имя",
    email: "Email",
    message: "Сообщение",
    send: "Отправить",
    Contacts: "КОНТАКТЫ",
    developer: "Компания-разработчик",
    company_name: "ООО Цифровые технологии",
    copyright: "Copyright 2016-2018",
    address: "424033, РМЭ, г.Йошкар-Ола, ул.Петрова, д.1, а/я 67",
    phone: {
      number_one: "8 (8362) 33-70-50",
      number_two: "8 (499) 705-91-10",
      number_three: "8 (800) 555-65-81",
    },
    Info: "Информация",
    info: "info@trusted.ru",
    about_programm: "Приложение КриптоАРМ ГОСТ предназначено для создания электронной подписи и шифрования файлов с применением цифровых сертификатов и криптографических алгоритмов",
    info_about_product: "Приложение КриптоАРМ ГОСТ предназначено для создания электронной подписи и шифрования файлов с применением цифровых сертификатов и криптографических алгоритмов",
    info_about_sign: "Операции с электронной подписью для любых типов документов и произвольного контента",
    info_about_encrypt: "Защита пакетов документов и произвольного контента с помощью шифрования в адрес одного или нескольких получателей",
    info_about_certificate: "Централизованное управление локальными и облачными хранилищами сертификатов",
    link_facebook: "https://www.facebook.com/cryptoarm/",
    link_vk: "http://vk.com/cryptoarm",
    link_twitter: "https://twitter.com/cryptoarm",
    link_trusred: "http://www.trusted.ru/",
    AppVersion: "Версия",
    CspVersion: "Криптопровайдеры",
    AppCoreVersion: "Версия ядра приложения:",
    Compatible: "(совместимость с Electron 1.6.6, OpenSSL 1.0.2k)",
    CSPVersion: "КриптоПро CSP:",
  },
  License: {
    license: "Лицензия",
    License: "ЛИЦЕНЗИЯ",
    About_License: "СВЕДЕНИЯ О ЛИЦЕНЗИИ КРИПТОАРМ ГОСТ",
    About_License_CSP: "СВЕДЕНИЯ О ЛИЦЕНЗИИ КРИПТОПРО CSP",
    license_key: "Лицензионный ключ",
    Enter_Key: "ВВЕСТИ КЛЮЧ",
    Buy_license: "КУПИТЬ ЛИЦЕНЗИЮ",
    link_buy_license: "https://cryptoarm.ru/shop/cryptoarm-gost",
    entered_the_key: "Выполните ввод ключа",
    key_file_name: "desktopkey.lic",
    failed_key_find: "Лицензионный ключ отсутствует",
    failed_validity_key: "Срок действия лицензионного ключа истёк",
    failed_match_key: "Лицензионный ключ не подходит для данного продукта",
    failed_key: "Неверный ключ",
    key: "Ключ",
    Entered: "ВВЕСТИ",
    Сlose: "ЗАКРЫТЬ",
    enter_key: "Ввод лицензиии",
    get_overtimes_license: "Получение временной лицензиии",
    Enter_license: "УСТАНОВИТЬ ЛИЦЕНЗИЮ",
    license_request: "Запрос на выдачу временной лицензии",
    License_reques_send: "ОТПРАВИТЬ ЗАПРОС",
    License_request: "ПОЛУЧИТЬ ВРЕМЕННУЮ ЛИЦЕНЗИЮ",
    License_overtimes: "ВРЕМЕННАЯ ЛИЦЕНЗИЯ",
    overtimes_license_confirm: "Для отправки запроса на получение временной лицензии на продукт КриптоАРМ ГОСТ, сроком на 14 дней, заполните полу формы. Временная лицензия выдается один раз на одно рабочее место для знакомства со всеми возможностями программного продукта.",
    overtimes_license: "При отсутствии постоянной лицензии, Вы можете сделать запрос на получение временной лицензии. Временная лицензия выдается сроком на 14 дней и обеспечивает полноценную работу с приложением.",
    overtimes_license_ok: "Временная лицензия на использование продукта КриптоАРМ ГОСТ получена. Вы можете установить ее на рабочее место. После установки лицензии требуется выполнить перезагрузку приложения.",
    overtimes_license_error: "Запрос на получение временной лицензии на продукт КриптоАРМ ГОСТ был отклонен. Возможно, для указанного Вами email адреса уже выдавалась лицензия. Для решения данного вопроса обратитесь в службу технической поддержки info@trusted.ru.",
    lic_file_not_found: "Файл лицензии не найден",
    lic_file_uncorrect: "Некорректный лицензинный файл",
    lic_key_uncorrect: "Некорректный лицензионный ключ",
    lic_key_correct: "Действительна (Осталось дней: ",
    lic_key_correct_unlimited: "Действительна ( Бессрочная )",
    lic_key_correct_days: "Срок действия лицензии истечет через: ",
    lic_key_setup: "Лицензионный ключ успешно установлен",
    lic_file_choose: "Выберите файл лицензии",
    lic_status: "Статус лицензии",
    lic_notbefore: "Дата выдачи",
    lic_notafter: "Дата истечения",
    lic_unlimited: "Бессрочная",
    jwtErrorInternal: "Ошибка проверки лицензии",
    jwtErrorLoad: "Ошибка чтения лицензии",
    jwtErrorTokenFormat: "Неверный формат лицензии",
    jwtErrorSign: "Ошибка проверки подписи лицензии",
    jwtErrorParsing: "Ошибка парсинга лицензии",
    jwtErrorStructure: "Ошибка в структуре лицензии",
    jwtErrorProduct: "Лицензия не подходит для данной программы",
    jwtErrorExpired: "Срок действия лицензии истек",
    jwtErrorStarted: "Срок действия лицензии не наступил",
    jwtErrorOperation: "Неизвестная операция",
    jwtErrorNoLicenseInStore: "Не найдена лицензия для данной операции",
    jwtErrorStoreIsLocked: "Чтение лицензии заблокировано",
    jwtErrorCode: "Неизвестный код ошибки",
    jwtGetLicense: "Для приобретения лицензии перейдите на сайт:",
    license_correct: "Действительна",
    license_incorrect: "Недействительна",
    license_overtimes_expired: "Срок действия временной лицензии истек",
    serial_number: "Серийный номер",
  },
  Кegistration: {
    LoginAndPass: "АВТОРИЗАЦИЯ ПО ЛОГИНУ И ПАРОЛЮ",
    Social: "АВТОРИЗАЦИЯ ЧЕРЕЗ СОЦИАЛЬНЫЕ СЕТИ",
    Cert: "АВТОРИЗАЦИЯ ПО СЕРТИФИКАТУ",
    RLoginAndPass: "ПО ЛОГИНУ И ПАРОЛЮ",
    RSocial: "ЧЕРЕЗ СОЦ.СЕТИ",
    RCert: "ПО СЕРТИФИКАТУ",
    login: "Логин",
    enter: "Войти",
    sign_up: "Зарегистрироваться",
    choose_reg: "ВЫБЕРИТЕ СПОСОБ АВТОРИЗАЦИИ НА СЕРВИСЕ TRUSTED NET",
    enter_service: "Войти на сервис",
    App_Functions: "НЕСКОЛЬКО ПОЛЕЗНЫХ ФУНКЦИИ ПРИЛОЖЕНИЯ",
    Empowerment: "РАСШИРЕНИЕ ВОЗМОЖНОСТЕЙ С ПОДКЛЮЧЕНИЕМ К СЕРВИСУ TRUSTED NET",
  },
  Common: {
    yes: "Да",
    no: "Нет",
    add_files: "Добавление файлов",
    add_all_files: "Добавить файлы из всех подкаталогов?",
    ru: "Русский",
    en: "Английский",
    read_file_error: "Ошибка при чтении из файла",
    write_file_error: "Ошибка при записи в файл",
    or: "или",
    subject: "Владелец",
    product: "Продукт",
    files_not_found: "Файлы не найдены (Возможно они были удалены или переименованы)",
    Back: "НАЗАД",
    back: "Назад",
    next: "Далее",
    error: "ОШИБКА",
    update: "Обновить",
    delete: "Удалить",
    exit: "ВЫХОД",
    goOver: "Перейти",
    cancel: "Отмена",
    ready: "Готово",
  },
  Csp: {
    cpcspPKZIVersion: "Версия КриптоПро CSP",
    cpcspSKZIVersion: "Версия ядра СКЗИ",
    cspErr: "Ошибка при проверке параметров криптопровайдера",
    libcapi: "Не установлен необходимый для работы приложения крипровайдер КриптоПРО CSP.  ",
    noCPLicense: "Не обнаружена действующая лицензия на КриптоПро CSP",
    noProvider2001: "Не обнаружен провайдер для работы с ГОСТ 2001",
    noProvider2012: "Не обнаружен провайдер для работы с ГОСТ 2012",
  },
  Diagnostic: {
    header: "Диагностика приложения",
    problem_header: "Обнаруженные проблемы",
    resolve_header: "Способы решения",
    close: "Закрыть",
  },
  Problems: {
    problem_1: "Отсутствует СКЗИ КриптоПро CSP",
    resolve_1_1: "В системе отсутствует установленный криптопровайдер КриптоПро CSP. Дальнейшая работа приложения невозможна и приложение будет закрыто.",
    resolve_1_2: "Для решения данной проблемы установите СКЗИ КриптоПро CSP версии 5.0 и снова запустите приложение.",
    resolve_1_3: "Дистрибутив СКЗИ КриптоПро CSP можно скачать по ссылке c официального сайта компании КриптоПро ",
    resolve_1_4: "Подробные инструкции по установке  СКЗИ КриптоПро CSP на различные платформы можно найти в документации по продукту, которая доступна по ссылке ",
    problem_2: "Отсутствует лицензия на СКЗИ КриптоПро CSP",
    resolve_2_1: "В системе отсутствует корректная лицензия на СКЗИ КриптоПро CSP, необходимая для полнофункциональной работы приложения.",
    resolve_2_2: "Для решения данной проблемы можно приобрести лицензию на продукт в электронном магазине, доступном по ссылке ",
    resolve_2_3: "Далее потребуется установить лицензию по шагам, описанным в документации по продукту, которая доступна по ссылке ",
    problem_3: "Отсутствует лицензия на КриптоАРМ ГОСТ",
    resolve_3_1: "В приложении отсутствует установленная лицензия на программный продукт КриптоАРМ ГОСТ.",
    resolve_3_2: "Без наличия лицензии операции, связанные с доступом к ключевому носителю, не будут выполняться. Например, операции подписи и расшифрования файлов. Эта проблема не является критичной и приложение является работоспособным с ограниченным функционалом.",
    resolve_3_3: "Для решения данной проблемы можно получить временную лицензию на 14 дней или приобрести постоянную лицензию на продукт в электронном магазине, доступном по ссылке ",
    resolve_3_4: "После приобретения лицензии вы можете установить ее через интерфейс приложения ",
    problem_4: "Не удалось проверить параметры СКЗИ КриптоПро CSP",
    resolve_4_1: "При запуске приложения возникли проблемы с чтением параметров обнаруженного СКЗИ КриптоПро. Дальнейшая работа приложения невозможна и приложение будет закрыто.",
    resolve_4_2: "Для решения данной проблемы необходимо установить требуемую версию криптопровайдера КриптоПро CSP и запустить приложение снова.",
    resolve_4_3: "Процедура установки СКЗИ КриптоПро описана в документации по продукту, которая доступна по ссылке ",
    problem_5: "Не обнаружены сертификаты с привязкой к ключевому контейнеру",
    resolve_5_1: "В приложении отсутствуют сертификаты с привязкой к ключевому контейнеру, кроме тестового. Для полноценной работы в режиме подписи и расшифрования файлов, понадобиться установка сертификатов.",
    resolve_5_2: "Для решения данной проблемы выполните установку личных сертификатов по шагам, описанным в документации по продукту, которая доступна по ссылке ",
    resolve_5_3: "Если у вас есть сертификаты на токене их можно установить с привязкой к ключевому контейнеру на странице Контейнеры ",
    problem_6: "Не загружен модуль Trusted Crypto",
    resolve_6_1: "При запуске КриптоАРМ ГОСТ не загрузился необходимый для работы приложения модуль Trusted Crypto.",
    resolve_6_2: "Для решения данной проблемы откройте панель управления приложения и перешлите сообщения об ошибках, выведенных на вкладке Консоль, в службу технической поддержки.",
    resolve_6_3: "Подробные инструкции по открытию панели управления под требуемой платформой можно найти в документации по продукту, которая доступна по ссылке ",
  },
  Algorithm: {
    id_tc26_signwithdigest_gost3410_12_256: "ГОСТ Р 34.11-2012/34.10-2012 256 бит",
    id_tc26_signwithdigest_gost3410_12_512: "ГОСТ Р 34.11-2012/34.10-2012 512 бит",
    id_tc26_gost3410_12_256 : "ГОСТ Р 34.10-2012 256 бит",
    id_tc26_gost3410_12_512 : "ГОСТ Р 34.10-2012 512 бит",
    id_GostR3411_94_with_GostR3410_2001: "ГОСТ Р 34.11/34.10-2001",
    id_GostR3411_94_with_GostR3410_94: "ГОСТ Р 34.11/34.10-94",
    id_GostR3411_94: "ГОСТ Р 34.11-94",
    id_tc26_gost3411_12_256: "ГОСТ Р 34.11-2012 256 бит",
    id_tc26_gost3411_12_512: "ГОСТ Р 34.11-2012 512 бит",
    id_GostR3410_2001: "ГОСТ Р 34.10-2001",
    id_GostR3410_94: "ГОСТ Р 34.10-94",
    id_Gost28147_89: "ГОСТ 28147-89",
  },
};
