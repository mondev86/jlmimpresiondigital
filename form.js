
document.getElementById('contacto-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Protección anti‑bots (honeypot)
    if (document.getElementById('empresa').value !== "") {
        return; // Bot detectado, no hacemos nada
    }

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Validación extra
    if (nombre.length < 3) {
        alert("El nombre es demasiado corto");
        return;
    }

    if (mensaje.length < 10) {
        alert("El mensaje es demasiado corto");
        return;
    }

    // Construir mailto
    const mailto = `mailto:produccion@jlmimpresiondigital.es
?subject=Mensaje de ${encodeURIComponent(nombre)}
&body=Nombre: ${encodeURIComponent(nombre)}
%0AEmail: ${encodeURIComponent(email)}
%0AMensaje:%0A${encodeURIComponent(mensaje)}`;

    // Abrir cliente de correo
    window.location.href = mailto;
});

