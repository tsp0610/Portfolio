function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

const texts = [
    "DEVELOPER",
    "YOUTUBER",
    "PROGRAMMER",
    "TECHNICAL LOVER",
    "GAMER"
];

let speed = 100; 
const textElement = document.querySelector(".typewriters");

let textIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeWriter() {
    if (!textElement) return;

    let currentText = texts[textIndex];
    if (isDeleting) {
        textElement.innerHTML = currentText.substring(0, characterIndex);
        characterIndex--;
    } else {
        textElement.innerHTML = currentText.substring(0, characterIndex);
        characterIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && characterIndex === currentText.length) {
        setTimeout(() => (isDeleting = true), 1000);
    } else if (isDeleting && characterIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(typeWriter, typeSpeed);
}

window.onload = () => {
    setTimeout(typeWriter, 100);
};
