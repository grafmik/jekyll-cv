let clickCount = 0;
const requiredClicks = 7;

document.addEventListener('DOMContentLoaded', () => {
    const duckButton = document.getElementById('duck-button');
    duckButton.addEventListener('click', () => {
        clickCount++;
        duckButton.classList.add('pulse');
        setTimeout(() => {
            duckButton.classList.remove('pulse');
        }, 500);
        if (clickCount >= requiredClicks) {
            showDuck();
            window.setTimeout(() => {
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                });
            }, 500);
        }
    });
});

function showDuck() {
    const duckImage = document.createElement('img');
    duckImage.src = '/assets/media/fullstack-duck.jpg';
    const duckButton = document.getElementById('duck-button');
    duckButton.replaceWith(duckImage);
}