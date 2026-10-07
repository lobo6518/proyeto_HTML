document.addEventListener('DOMContentLoaded', () => {
    
    /* Menú móvil desplegable */
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Cerrar menú al hacer clic en un enlace (móvil)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    /* Filtrado interactivo de la Carta / Menú */
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover clase active del botón actual
            document.querySelector('.tab-btn.active').classList.remove('active');
            // Agregar al botón presionado
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            menuItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filterValue === 'todos' || category === filterValue) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    /* Validación y manejo del Formulario de Reservas */
    const reservationForm = document.getElementById('reservationForm');
    const formMessage = document.getElementById('formMessage');

    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Obtener valores
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const fecha = document.getElementById('fecha').value;
            const hora = document.getElementById('hora').value;
            const personas = document.getElementById('personas').value;

            // Validación simple
            if (!nombre || !email || !telefono || !fecha || !hora || !personas) {
                formMessage.textContent = 'Por favor, completa todos los campos.';
                formMessage.className = 'form-message error';
                return;
            }

            // Simulación de éxito de envío
            formMessage.textContent = `¡Gracias, ${nombre}! Tu reserva para ${personas} persona(s) el ${fecha} a las ${hora} ha sido registrada con éxito. Nos comunicaremos contigo para confirmar.`;
            formMessage.className = 'form-message success';

            // Limpiar formulario
            reservationForm.reset();

            // Ocultar mensaje después de 6 segundos
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.className = 'form-message';
            }, 6000);
        });
    }

});