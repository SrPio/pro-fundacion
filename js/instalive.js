// Función para validar si es martes o miércoles a las 19:00 en Colombia
function checkLiveButton(day, hour) {
    if ((day === 2 || day === 3) && hour === 19) {
        return true;
    }
    return false;
}

// Función para mostrar o ocultar el botón de transmisión en vivo
function showLiveButton() {
    // Obtener la hora actual
    var currentTime = new Date();

    // Ajustar la hora actual a la zona horaria de Colombia
    var colombiaTime = new Date(currentTime.getTime() - (5 * 60 * 60 * 1000));

    // Obtener el día de la semana (0 = domingo, 1 = lunes, etc.)
    var colombiaDay = colombiaTime.getUTCDay();

    // Obtener la hora
    var colombiaHour = colombiaTime.getUTCHours();

    // Verifica si se cumplen las condiciones para mostrar el botón en Colombia
    if (checkLiveButton(colombiaDay, colombiaHour)) {
        document.getElementById("btn-Live").style.display = "flex";
    } else {
        document.getElementById("btn-Live").style.display = "none";
    }
}

// Ejecutar la función al cargar la página
showLiveButton();

// Ejecutar la función cada minuto para actualizar el estado del botón
setInterval(showLiveButton, 60000);
