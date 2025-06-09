/**
 * Language Switcher Script for JerseyBlockchain Repository
 * 
 * This script enables dynamic language switching for elements with language data attributes.
 * Usage:
 *  1. Add language buttons to your HTML with IDs: 'lang-en', 'lang-ka', 'lang-de'.
 *  2. For each translatable element, add 'data-en', 'data-ka', and 'data-de' attributes with the correct HTML for that language.
 *  3. By default, the script hides the main content and shows a language selection UI.
 *  4. When a language is selected, it sets the innerHTML for all elements with the chosen language attribute,
 *     hides the language selection, and reveals the main content.
 *
 * Example of a translatable heading with a clickable link:
 * <h2
 *   data-en='<a href="WhyJersey.html">Why Jersey?</a>'
 *   data-ka='<a href="WhyJersey.html">რატომ ჯერსი?</a>'
 *   data-de='<a href="WhyJersey.html">Warum Jersey?</a>'>
 *   <a href="WhyJersey.html">Why Jersey?</a>
 * </h2>
 */

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Language button elements
    const buttons = {
        en: document.getElementById('lang-en'),
        ka: document.getElementById('lang-ka'),
        de: document.getElementById('lang-de')
    };

    /**
     * Switches all translatable elements to the selected language.
     * @param {string} lang - Language code ('en', 'ka', 'de')
     */
    function switchLanguage(lang) {
        // Update all elements with a corresponding data attribute
        document.querySelectorAll('[data-' + lang + ']').forEach(el => {
            el.innerHTML = el.getAttribute('data-' + lang);
        });

        // Hide language selection UI and show main content
        const langSel = document.querySelector('.language-selection');
        const content = document.getElementById('content');
        if (langSel) langSel.style.display = 'none';
        if (content) content.style.display = 'block';
    }

    // Attach event listeners to each button if present
    if (buttons.en) buttons.en.addEventListener('click', () => switchLanguage('en'));
    if (buttons.ka) buttons.ka.addEventListener('click', () => switchLanguage('ka'));
    if (buttons.de) buttons.de.addEventListener('click', () => switchLanguage('de'));
    const switchLanguage = (lang) => {
  document.querySelectorAll('[data-' + lang + ']').forEach(el => {
    el.innerHTML = el.getAttribute('data-' + lang);
  });
  document.querySelector('.language-selection').style.display = 'none';
  document.getElementById('content').style.display = 'block';
};
});
