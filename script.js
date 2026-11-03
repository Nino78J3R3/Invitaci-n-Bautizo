// Cuenta regresiva para el sábado 19 de diciembre de 2026.
// Se usa la hora local del dispositivo de quien visita la invitación.
const eventDate = new Date(2026, 11, 19, 0, 0, 0);

const elements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
  message: document.getElementById("countdown-message")
};

function updateCountdown() {
  const now = new Date();
  const difference = eventDate.getTime() - now.getTime();

  if (difference <= 0) {
    elements.days.textContent = "0";
    elements.hours.textContent = "0";
    elements.minutes.textContent = "0";
    elements.seconds.textContent = "0";
    elements.message.textContent = "¡Hoy es el gran día! Gracias por celebrar con nosotros.";
    return;
  }

  const totalSeconds = Math.floor(difference / 1000);
  elements.days.textContent = Math.floor(totalSeconds / 86400);
  elements.hours.textContent = Math.floor((totalSeconds % 86400) / 3600);
  elements.minutes.textContent = Math.floor((totalSeconds % 3600) / 60);
  elements.seconds.textContent = totalSeconds % 60;
}
updateCountdown();
setInterval(updateCountdown, 1000);
