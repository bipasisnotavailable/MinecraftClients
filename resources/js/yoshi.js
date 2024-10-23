document.addEventListener('DOMContentLoaded', () => {
    const yoshi = document.getElementById('yoshi');
    let direction = 1;
    let position = 0;
    const speed = 4;

    function walkYoshi() {
        position += direction * speed;
        
        yoshi.style.left = position + 'px';

        if (position > window.innerWidth - yoshi.width || position < 0) {
            direction *= -1;
            
            if (direction === -1) {
                yoshi.style.transform = 'scaleX(-1)';
            } else {
                yoshi.style.transform = 'scaleX(1)';
            }
        }

        requestAnimationFrame(walkYoshi);
    }

    walkYoshi();
});
