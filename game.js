function checkOrientation() {
    const game = document.getElementById('game');
    const warning = document.getElementById('orientation-warning');

    if (window.innerWidth < window.innerHeight) {
        game.style.display = 'none';
        warning.style.display = 'flex';
    } else {
        game.style.display = 'flex';
        warning.style.display = 'none';
    }
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);
document.addEventListener('DOMContentLoaded', checkOrientation);

console.log('Digestion game initialized');
