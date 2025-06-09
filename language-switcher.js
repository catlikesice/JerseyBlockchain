document.addEventListener('DOMContentLoaded', function () {
    const buttons = {
        en: document.getElementById('lang-en'),
        ka: document.getElementById('lang-ka'),
        de: document.getElementById('lang-de')
    };
    function switchLanguage(lang) {
        document.querySelectorAll('[data-' + lang + ']').forEach(el => {
            el.innerHTML = el.getAttribute('data-' + lang);
        });
        document.querySelector('.language-selection').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }
    if (buttons.en) buttons.en.addEventListener('click', () => switchLanguage('en'));
    if (buttons.ka) buttons.ka.addEventListener('click', () => switchLanguage('ka'));
    if (buttons.de) buttons.de.addEventListener('click', () => switchLanguage('de'));
});
