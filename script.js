const textElement = document.getElementById('typewriter-text');
const phrase = "Junior Data Scientist & Machine Learning."; 
let index = 0;

function type() {
    if (index < phrase.length) {
        textElement.innerHTML += phrase.charAt(index);
        index++;
        setTimeout(type, 70);
    }
}

document.addEventListener('DOMContentLoaded', type);


const sections = document.querySelectorAll('.page');
const dots = document.querySelectorAll('.dot');

window.onscroll = () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    dots.forEach(dot => {
        dot.classList.remove('active');
        if (dot.getAttribute('href').includes(current)) {
            dot.classList.add('active');
        }
    });
};