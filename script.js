// Espera a que todo el HTML se haya cargado
document.addEventListener('DOMContentLoaded', () => {
    const cigarro = document.getElementById('cigarro');
    const cartaContenedor = document.getElementById('carta-contenedor');
    const carta = document.getElementById('carta');
    const poema = document.getElementById('poema');
    const corazonesDiv = document.getElementById('corazones');

    cigarro.addEventListener('click', () => {
        cigarro.style.display = 'none';
        cartaContenedor.style.display = 'flex';
    });

    carta.addEventListener('click', () => {
        cartaContenedor.style.display = 'none';
        poema.style.display = 'block';

        // Crea corazones animados
        for (let i = 0; i < 20; i++) {
            const corazon = document.createElement('span');
            corazon.innerHTML = '💖';
            corazon.className = 'corazon-animado';
            corazon.style.left = Math.random() * 90 + '%';
            corazon.style.animationDelay = (Math.random() * 1) + 's';
            corazonesDiv.appendChild(corazon);

            setTimeout(() => {
                corazon.remove();
            }, 2000);
        }
    });
});
