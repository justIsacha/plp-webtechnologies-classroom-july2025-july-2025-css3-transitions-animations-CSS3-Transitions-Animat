// ----------------------
// Animate Box
// ----------------------
const box = document.querySelector('.animated-box');
const animateBtn = document.getElementById('animateBtn');

animateBtn.addEventListener('click', () => {
    box.classList.toggle('active');
});

// ----------------------
// Modal
// ----------------------
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.querySelector('.close');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// ----------------------
// Flip Card with Dynamic Colors
// ----------------------
const card = document.querySelector('.card');
const back = document.querySelector('.card .back');

// Gradient color sets
const gradients = [
    "linear-gradient(135deg, #ff6b6b, #feca57, #48dbfb, #1dd1a1, #5f27cd)",
    "linear-gradient(135deg, #ff9ff3, #f368e0, #00d2d3, #54a0ff, #5f27cd)",
    "linear-gradient(135deg, #ee5253, #ff9f43, #10ac84, #2e86de, #341f97)",
    "linear-gradient(135deg, #ff6b81, #ffa502, #7bed9f, #1e90ff, #5352ed)"
];

let flipped = false;

card.addEventListener('click', () => {
    flipped = !flipped;
    if (flipped) {
        // Pick a random gradient for the back
        const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
        back.style.background = randomGradient;
        back.style.backgroundSize = "400% 400%";
        back.style.animation = "gradientShift 5s ease infinite";

        card.style.transform = "rotateY(180deg)";
    } else {
        card.style.transform = "rotateY(0deg)";
    }
});
