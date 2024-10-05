// Esperar a que la página se cargue completamente
window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    const profiles = document.getElementById('profiles');

    // Ocultar el loader
    loader.style.display = 'none';

    // Mostrar el contenido
    profiles.style.display = 'flex';

    // Obtener todos los perfiles
    const profileElements = document.querySelectorAll('.profile');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalTags = document.getElementById('modal-tags');
    const closeModal = document.querySelector('.close');
    const downloadButton = document.getElementById('download-button');

    // Función para abrir el modal con la información del perfil
    profileElements.forEach(profile => {
        profile.addEventListener('click', function () {
            const profileName = profile.querySelector('.profile-name').innerText;
            const profileImage = profile.querySelector('.profile-pic-image').src;
            const profileDescription = profile.getAttribute('data-description');
            const profileTags = profile.getAttribute('data-categories');
            const downloadLink = profile.getAttribute('data-download'); // Obtener el enlace de descarga

            // Asignar los valores en el modal
            modalTitle.innerText = profileName;
            modalImage.src = profileImage;
            modalDescription.innerText = profileDescription;

            // Añadir etiquetas
            modalTags.innerHTML = ''; // Limpiar etiquetas anteriores
            profileTags.split(' ').forEach(tag => {
                const span = document.createElement('span');
                span.classList.add('tag');
                span.innerText = tag;
                modalTags.appendChild(span);
            });

            // Asignar el enlace de descarga al botón
            downloadButton.setAttribute('href', downloadLink);
            downloadButton.setAttribute('download', ''); // Esto fuerza la descarga del archivo

            // Mostrar el modal
            modal.style.display = 'block';
        });
    });

    // Cerrar el modal al hacer clic en el botón de cerrar
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
