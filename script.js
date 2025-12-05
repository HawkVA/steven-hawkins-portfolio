document.addEventListener('DOMContentLoaded', () => {
    const statusText = document.getElementById('status-text');
    const iceGrid = document.getElementById('ice-grid');

    // ICONS
    const icons = ['fa-music', 'fa-headphones', 'fa-microphone', 'fa-mug-hot', 'fa-fire', 'fa-tv', 'fa-star'];
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    const shuffledIcons = shuffle(icons);
    shuffledIcons.forEach((iconClass) => {
        const div = document.createElement('div');
        div.className = 'ice-cube';
        div.innerHTML = `<i class="fas ${iconClass}"></i>`;
        iceGrid.appendChild(div);
    });

    // TYPEWRITER (Updated with '!')
    const drinkOptions = ["Latte", "Affogato", "Macchiato", "Coffee", "Espresso", "Cortado", "Cold Brew"];
    const randomDrink = drinkOptions[Math.floor(Math.random() * drinkOptions.length)];
    const sentence = "Serving you a fresh " + randomDrink + "!";
    let i = 0;
    function typeWriter() {
        if (i < sentence.length) {
            statusText.innerHTML += sentence.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();

    // EMBERS
    const emberContainer = document.getElementById('embers');
    for(let j=0; j<30; j++) {
        let dot = document.createElement('div');
        dot.className = 'ember-dot';
        dot.style.left = Math.random() * 100 + '%';
        let size = Math.random() * 3 + 2; 
        dot.style.width = size + 'px';
        dot.style.height = size + 'px';
        dot.style.animationDuration = (Math.random() * 8 + 10) + 's'; 
        dot.style.animationDelay = Math.random() * 10 + 's';
        emberContainer.appendChild(dot);
    }
});
