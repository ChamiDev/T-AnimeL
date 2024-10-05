// Esperar a que la página se cargue completamente
window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    const profiles = document.getElementById('profiles');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalTags = document.getElementById('modal-tags');
    const closeModalButtons = document.querySelectorAll('.close');
    const searchInput = document.getElementById('search-input');

    // Ocultar el loader
    loader.style.display = 'none';

    // Mostrar el contenido
    profiles.style.display = 'flex';

    // Función para abrir el modal
    function openModal(profile) {
        modalTitle.textContent = profile.querySelector('.profile-name').textContent;
        modalImage.src = profile.querySelector('.profile-pic-image').src;
        modalDescription.textContent = "Descripción del anime"; // Cambiar según sea necesario
        modalTags.innerHTML = ''; // Limpiar las etiquetas anteriores

        // Añadir etiquetas
        const categories = profile.dataset.categories.split(' ');
        categories.forEach(category => {
            const tag = document.createElement('span');
            tag.className = 'tag';
            tag.textContent = category;
            modalTags.appendChild(tag);
        });

        modal.style.display = 'block'; // Mostrar el modal
    }

    // Añadir evento click a cada perfil
    document.querySelectorAll('.profile').forEach(profile => {
        profile.addEventListener('click', () => {
            openModal(profile); // Abrir modal con los datos del perfil
        });
    });

    // Cerrar el modal al hacer clic en la X o en el botón de cerrar
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'none'; // Ocultar el modal
        });
    });

    // Buscar por nombre o categoría
    searchInput.addEventListener('input', function () {
        const searchValue = this.value.toLowerCase();
        document.querySelectorAll('.profile').forEach(profile => {
            const name = profile.querySelector('.profile-name').textContent.toLowerCase();
            const categories = profile.dataset.categories.toLowerCase();

            if (name.includes(searchValue) || categories.includes(searchValue)) {
                profile.style.display = 'flex'; // Mostrar el perfil
            } else {
                profile.style.display = 'none'; // Ocultar el perfil
            }
        });
    });
});