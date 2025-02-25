document.addEventListener('DOMContentLoaded', function() {
    // Animation pour le titre
    const companyName = document.querySelector('.company-name');
    const tagline = document.querySelector('.tagline');
    
    companyName.style.opacity = '0';
    tagline.style.opacity = '0';
    companyName.style.transform = 'translateX(50px)';
    tagline.style.transform = 'translateX(50px)';
    
    setTimeout(() => {
        companyName.style.transition = 'all 1s ease';
        companyName.style.opacity = '1';
        companyName.style.transform = 'translateX(0)';
    }, 300);

    setTimeout(() => {
        tagline.style.transition = 'all 1s ease';
        tagline.style.opacity = '1';
        tagline.style.transform = 'translateX(0)';
    }, 600);

    // Animation pour la section gauche
    const leftSection = document.querySelector('.left-section');
    leftSection.style.opacity = '0';
    leftSection.style.transform = 'translateX(-50px)';

    setTimeout(() => {
        leftSection.style.transition = 'all 1s ease';
        leftSection.style.opacity = '1';
        leftSection.style.transform = 'translateX(0)';
    }, 900);

    // Animation pour les éléments de contact
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.8s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 500 + (index * 200));
    });
}); 