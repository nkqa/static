(function () {
    const lang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    const root = document.documentElement;

    root.classList.remove(
        'lang-zh-hans',
        'lang-zh-hant',
        'lang-ja',
        'lang-ko',
        'lang-other'
    );

    if (
        lang === 'zh-cn' ||
        lang === 'zh-sg' ||
        lang.startsWith('zh-hans')
    ) {
        root.classList.add('lang-zh-hans');
    } else if (
        lang === 'zh-tw' ||
        lang === 'zh-hk' ||
        lang === 'zh-mo' ||
        lang.startsWith('zh-hant')
    ) {
        root.classList.add('lang-zh-hant');
    } else if (lang.startsWith('ja')) {
        root.classList.add('lang-ja');
    } else if (lang.startsWith('ko')) {
        root.classList.add('lang-ko');
    } else {
        root.classList.add('lang-other');
    }
})();
