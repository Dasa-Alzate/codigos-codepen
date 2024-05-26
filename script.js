const links = document.querySelectorAll('.list a');
const title = document.querySelector('.title');
const gradientContainer = document.querySelector('.gradient-container');
const bgContainer = document.querySelector('.bg-container');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const bgImage = link.getAttribute('data-bg');
        gradientContainer.style.opacity = 0.8;
        gradientContainer.style.mixBlendMode = 'hard-light';
        title.style.opacity = 0;
        bgContainer.style.opacity = 0.8;
        bgContainer.style.setProperty('background-image', `url(${bgImage})`);
    });

    link.addEventListener('mouseleave', () => {
        gradientContainer.style.opacity = 1;
        gradientContainer.style.mixBlendMode = 'normal';
        title.style.opacity = 1;
    });
});
