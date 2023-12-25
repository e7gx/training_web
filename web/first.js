function updateClock() {
    const now = new Date();
    const clockElement = document.getElementById('clock');
    clockElement.textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000); // Update every second

function changeText() {
    const aboutText = document.getElementById('about-text');
    if (aboutText.textContent === "I'm a Mobile Dev and this is my first time trying web Dev and it looks easy") {
        aboutText.textContent = "Exploring new technologies and expanding my skills!";
    } else {
        aboutText.textContent = "I'm a Mobile Dev and this is my first time trying web Dev and it looks easy";
    }
}

setInterval(changeText, 3000); // Change text every 3 seconds

updateClock(); // Initial clock update
changeText(); // Initial text update
