document.addEventListener('DOMContentLoaded', () => {
    
    // Luxury Cards Dynamic Perspective Interaction Shift
    const creativeCards = document.querySelectorAll('.card');

    creativeCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x coordinate inside the element.
            const y = e.clientY - rect.top;  // y coordinate inside the element.

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Calculate subtle tilting angles
            const rotateX = (centerY - y) / 25; 
            const rotateY = (x - centerX) / 25;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
            card.style.boxShadow = `0 15px 35px rgba(245, 158, 11, 0.08)`;
        });

        card.addEventListener('mouseleave', () => {
            // Restore smooth initial structural identity values
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
            card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.01)';
        });
    });
});