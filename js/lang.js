const langButton = document.getElementById('lang-toggle');
const elements = document.querySelectorAll('[data-lang]');

const flags = {
    en: `<svg width="24" height="16" viewBox="0 0 60 30">
            <rect width="60" height="30" fill="#012169"/>
            <path d="M0 0 L60 30 M60 0 L0 30" stroke="#fff" stroke-width="6"/>
            <path d="M0 0 L60 30 M60 0 L0 30" stroke="#C8102E" stroke-width="4"/>
            <path d="M30 0 V30 M0 15 H60" stroke="#fff" stroke-width="6"/>
            <path d="M30 0 V30 M0 15 H60" stroke="#C8102E" stroke-width="4"/>
        </svg>`,
    es: `<svg width="24" height="16" viewBox="0 0 60 30">
            <rect width="60" height="30" fill="#AA151B"/>
            <rect y="10" width="60" height="10" fill="#F1BF00"/>
        </svg>`
};

// Detectar idioma del navegador
let userLang = navigator.language || navigator.userLanguage;
let currentLang = 'en';
if(userLang.startsWith('es')) currentLang = 'es';

function updateLanguage(lang){
    currentLang = lang;
    elements.forEach(el => {
        el.style.display = (el.getAttribute('data-lang') === lang) ? 'block' : 'none';
    });
    langButton.innerHTML = flags[lang];
}

// Inicializar
updateLanguage(currentLang);

// Alternar al hacer click
langButton.addEventListener('click', () => {
    const newLang = (currentLang === 'en') ? 'es' : 'en';
    updateLanguage(newLang);
});
