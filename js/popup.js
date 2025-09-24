const modal = document.getElementById('game-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.querySelector('.modal-body');
const modalClose = document.querySelector('.modal .close');

const cards = {
    "batalla-elemental": {
        title: "Batalla Elemental",
        description: "Aplicación de soporte para el juego de cartas coleccionables Batalla Elemental, basado en el universo de Las Crónicas de Reaper. Fusiona ⚔️ elementos estratégicos clásicos con la ⭐ evolución de personajes en estilos modernos.",
        screenshots: "batalla-elemental1.png,batalla-elemental2.png,batalla-elemental3.png",
        links: [
            {
                label: "itch.io",
                img: "logos/itchio.svg",
                url: "https://cactusbytestudio.itch.io/batalla-elemental",
            },
        ],
    },
};

document.querySelectorAll('.card .btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault(); // evita que el scroll se vaya arriba
        
        const card = btn.closest('.card');
        
        // Tomar datos de la tarjeta
        const id = card.dataset.id;
        const cardData = cards[id];
        const screenshots = cardData.screenshots ? cardData.screenshots.split(',') : [];
        const links = cardData.links ? cardData.links : [];
        
        // Poner título
        modalTitle.textContent = cardData.title;
        
        // Construir contenido dinámicamente
        let innerHTML = "";
        innerHTML = `
        <div class="left">
            ${screenshots.map(s => `<img class="screenshot" src="images/screenshots/${s}" alt="Screenshot">`).join('')}
        </div>
        <div class="right">
            <div class="desc">
                <p>${cardData.description}</p>
            </div>
            <div class="buttons">
        `;
        links.forEach(element => {
            innerHTML += `
            <a href="${element.url}" target="_blank" class="btn">
                <img class="logo" src="images/${element.img}" alt="${element.label}"> ${element.label}
            </a>`;
        });
        innerHTML += `
            </div>
        </div>
        `;

        modalBody.innerHTML = innerHTML;
        
        modal.style.display = 'flex';
    });
});

// Cerrar modal
modalClose.addEventListener('click', () => { modal.style.display = 'none'; });
window.addEventListener('click', e => { if(e.target === modal) modal.style.display = 'none'; });
