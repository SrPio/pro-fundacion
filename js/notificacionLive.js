// Solicitar permiso para enviar notificaciones
if (Notification.permission !== "granted") {
    Notification.requestPermission();
}

// Función para enviar la notificación
function enviarNotificacion() {
    // Obtener la hora actual en Colombia


    // Crear la notificación
    var notificacion = new Notification("¿Por qué PROtalento? ¿Aún tienes dudas?", {
        body: "¡No te preocupes! Conéctate ya mismo en nuestro IG Live CampusPRO",
        icon: "https://res.cloudinary.com/protalento/image/upload/v1676757681/Website/PROtalento/Generales/protalentolatam-20221221-0001_uel4jb.jpg"
    });

    // Redirigir al usuario al hacer clic en la notificación
    notificacion.onclick = function (event) {
        event.preventDefault();
        window.open("https://www.instagram.com/protalentolatam/?hl=es");
    }
}

// Ejecutar la función cada minuto
enviarNotificacion();
