let time = 0
const timerElement = document.getElementById("timer")

setInterval(() => {
    timerElement.innerText = time++
}, 1000)

function startVibrationAnimation() {
    const button = document.querySelector('.hire-me button');
    button.style.animation = 'vibrate 0.5s ease-in-out';
  
    // Réinitialisez l'animation après 5 secondes
    setTimeout(() => {
      button.style.animation = 'none';
      // Ajoutez un délai avant de réappliquer l'animation pour éviter une transition brusque
      setTimeout(() => {
        button.style.animation = 'vibrate 0.5s ease-in-out';
      }, 100);
    }, 5000);
  }
  
  // Lancez l'animation au chargement de la page
  window.addEventListener('load', () => {
    startVibrationAnimation();
  
    // Démarrez l'animation toutes les 5 secondes
    setInterval(() => {
      startVibrationAnimation();
    }, 5000);
  });
  