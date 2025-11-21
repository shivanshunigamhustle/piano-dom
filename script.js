document.addEventListener("keydown", function(event) {
    let keyPressed = event.key.toUpperCase();

    let keyDiv = document.querySelector(`.key[data-key="${keyPressed}"]`);
    let sound = document.getElementById(keyPressed);

    if (sound) {
        sound.currentTime = 0; 
        sound.play();
        keyDiv.classList.add("active");

        setTimeout(() => {
            keyDiv.classList.remove("active");
        }, 200);
    }
});
