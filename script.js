window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    const profiles = document.getElementById('profiles');
    const searchInput = document.getElementById('search-input'); // Seleccionar el input de búsqueda
    const profileElements = document.querySelectorAll('.profile');

    // Ocultar el loader
    loader.style.display = 'none';
    profiles.style.display = 'flex';

    // Función para filtrar los perfiles según la búsqueda
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase(); // Convertir el texto ingresado a minúsculas
        profileElements.forEach(profile => {
            const profileName = profile.querySelector('.profile-name').innerText.toLowerCase();
            const profileCategories = profile.getAttribute('data-categories').toLowerCase();

            // Mostrar u ocultar el perfil según el término de búsqueda
            if (profileName.includes(searchTerm) || profileCategories.includes(searchTerm)) {
                profile.style.display = 'block';
            } else {
                profile.style.display = 'none';
            }
        });
    });

    // Resto del código para manejar el modal (ya incluido en tu script)
});
