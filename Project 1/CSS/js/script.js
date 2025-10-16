// Script for typing animation in the main input placeholder
const input = document.querySelector("main input");
const phrases = [
    "Search for restaurant...",
    "Search for cuisine...",
    "Search for a dish..."
];
let phraseIndex = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
    if (typing) {
        if (charIndex < phrases[phraseIndex].length) {
            input.setAttribute("placeholder", phrases[phraseIndex].substring(0, charIndex + 1));
            charIndex++;
            setTimeout(typeEffect, 100);
        } else {
            typing = false;
            setTimeout(typeEffect, 1500);
        }
    } else {
        if (charIndex > 0) {
            input.setAttribute("placeholder", phrases[phraseIndex].substring(0, charIndex - 1));
            charIndex--;
            setTimeout(typeEffect, 50);
        } else {
            typing = true;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(typeEffect, 300);
        }
    }
}

typeEffect();
