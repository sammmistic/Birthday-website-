function changeScreen(current, next) {
    const currentScreen = document.getElementById(current);
    const nextScreen = document.getElementById(next);

    currentScreen.classList.add("screen-exit");

    setTimeout(() => {
        currentScreen.classList.add("hidden");
        currentScreen.classList.remove("screen-exit");

        nextScreen.classList.remove("hidden");
        nextScreen.classList.add("screen-enter");

        setTimeout(() => {
            nextScreen.classList.remove("screen-enter");
        }, 700);

    }, 350);
}

function openSurprise() {
    changeScreen("welcome", "birthday");
}

function showMemories() {
    changeScreen("birthday", "memories");
}

function showMessage() {
    changeScreen("memories", "final");

    setTimeout(() => {
        startConfetti();
    }, 400);
}

function startConfetti() {
    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement("div");

        confetti.classList.add("confetti");
        confetti.innerHTML = "🎉";

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 6000);
    }
}