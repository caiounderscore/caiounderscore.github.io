document.addEventListener("DOMContentLoaded", function() {
    const phrases = [
        "caio",
        "caiounderscore",
        "caiobigode",
    ];
    let currentPhraseIndex = 0;
    const blinkingText = document.getElementById('blinking-text');
    
    function changeText() {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        blinkingText.textContent = phrases[currentPhraseIndex];
    }

    setInterval(() => {
        // Remove text content before changing to the next phrase
        blinkingText.style.opacity = '0';
        setTimeout(() => {
            changeText();
            blinkingText.style.opacity = '1';
        }, 1000); // Match the timing of the CSS animation
    }, 2000); // Total duration of the blink animation (2s)
});
