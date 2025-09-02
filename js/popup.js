const modal = document.getElementById('game-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.querySelector('.modal-body');
const modalClose = document.querySelector('.modal .close');

document.querySelectorAll('.card .btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault(); // evita que el scroll se vaya arriba
        
        const card = btn.closest('.card');
        
        // Tomar datos de la tarjeta
        const title = card.dataset.title;
        const description = card.dataset.description;
        const screenshots = card.dataset.screenshots ? card.dataset.screenshots.split(',') : [];
        
        // Poner título
        modalTitle.textContent = title;
        
        // Construir contenido dinámicamente
        modalBody.innerHTML = `
        <div class="left">
            ${screenshots.map(s => `<img src="${s}" alt="Screenshot">`).join('')}
        </div>
        <div class="right">
            <div class="desc"><p>${description}</p></div>
            <div class="platforms">🖥️ 🎮</div>
            <div class="buttons">
            <a href="#" class="btn">Jugar</a>
            <a href="#" class="btn">Steam</a>
            </div>
        </div>
        `;
        
        modal.style.display = 'flex';
    });
});

// Cerrar modal
modalClose.addEventListener('click', () => { modal.style.display = 'none'; });
window.addEventListener('click', e => { if(e.target === modal) modal.style.display = 'none'; });
