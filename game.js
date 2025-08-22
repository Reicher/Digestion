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

const iconMap = {
    'Almonds': '🌰',
    'Wild Berries': '🍓',
    'Rabbit Meat': '🐇',
    'Bison Steak': '🥩',
    'Wild Salmon': '🐟',
    'Sweet Potato': '🍠',
    'Wild Honey': '🍯',
    'Chestnuts': '🌰',
    'Porcini Mushroom': '🍄',
    'Wild Carrot': '🥕'
};

function createCard(consumable) {
    const card = document.createElement('div');
    card.className = 'card';

    const icon = document.createElement('div');
    icon.className = 'icon';
    icon.textContent = iconMap[consumable.name] || '❓';

    const name = document.createElement('div');
    name.className = 'name';
    name.textContent = consumable.name;

    const list = document.createElement('ul');
    list.className = 'components';
    Object.entries(consumable.components).forEach(([key, value]) => {
        const li = document.createElement('li');
        li.textContent = `${key}: ${value}`;
        list.appendChild(li);
    });

    card.appendChild(icon);
    card.appendChild(name);
    card.appendChild(list);

    return card;
}

function loadConsumables() {
    fetch('consumables.json')
        .then(response => response.json())
        .then(data => {
            const shuffled = data.sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 4);
            const slots = document.querySelectorAll('.card-slot');
            selected.forEach((item, index) => {
                const card = createCard(item);
                slots[index].appendChild(card);
            });
        })
        .catch(err => console.error('Failed to load consumables', err));
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);
document.addEventListener('DOMContentLoaded', () => {
    checkOrientation();
    loadConsumables();
});

console.log('Digestion game initialized');
