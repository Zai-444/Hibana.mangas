
document.addEventListener('DOMContentLoaded', () => {
    const registroForm = document.querySelector('.wrapper form'); 
    if (registroForm) {
        registroForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const inputs = registroForm.querySelectorAll('input');
            const usuario = {
                nombre: inputs[0].value,
                edad: inputs[1].value,
                correo: inputs[2].value,
                contraseña: inputs[3].value,
                genero: inputs[4].value,
            };

         
            localStorage.setItem('usuario', JSON.stringify(usuario));

        
            alert('¡Registro exitoso! Ahora puedes iniciar sesión.');

            window.location.href = 'IniciarSesión.html';
        });
    }

    const loginForm = document.querySelector('.wrapper form'); 
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); 

            const correoInput = loginForm.querySelector('input[type="text"]');
            const contraseñaInput = loginForm.querySelector('input[type="password"]');

            const usuario = JSON.parse(localStorage.getItem('usuario'));

            if (usuario && usuario.correo === correoInput.value && usuario.contraseña === contraseñaInput.value) {
           
                alert(`¡Bienvenido/a, ${usuario.nombre}!`);
                
                window.location.href = '../index.html';
            } else {
                alert('Correo o contraseña incorrectos. Inténtalo nuevamente.');
            }
        });
    }
});
