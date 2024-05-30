const meshGradientColors = [
    'lightcoral', 'lightsalmon', 'lightseagreen', 'lightpink', 'lightblue', 'mistyrose', 'palegoldenrod', 'paleturquoise', 'skyblue', 'thistle', 'wheat', 'peachpuff', 'aquamarine', 'powderblue', 'moccasin', 'navajowhite', 'cornflowerblue'
];
const links = document.querySelectorAll('.list a');
const title = document.querySelector('.title');
const gradientContainer = document.querySelector('.gradient-container');
const bgContainer = document.querySelector('.bg-container');
const gradients = document.querySelectorAll('.mesh-gradient div');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const bgImage = link.getAttribute('data-bg');
        gradientContainer.style.opacity = 0.85;
        gradientContainer.style.mixBlendMode = 'hard-light';
        title.style.opacity = 0;
        bgContainer.style.opacity = 0.8;
        bgContainer.style.setProperty('background-image', `url(${bgImage})`);
        gradients.forEach(grad => {
            grad.style.backgroundColor = "black"
        });
    });

    link.addEventListener('mouseleave', () => {
        gradientContainer.style.opacity = 1;
        gradientContainer.style.mixBlendMode = 'normal';
        title.style.opacity = 1;
        gradients.forEach(grad => {
            grad.style.backgroundColor = meshGradientColors[(Math.floor(
                Math.random() 
                * meshGradientColors.length 
                - 1
            ))]
        });
    });
});
