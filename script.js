let score = 0;

function toggleText() {
    document.getElementById("extra").classList.toggle("hidden");
}

function answer(btn, isCorrect) {
    const parent = btn.parentElement;

    if (parent.classList.contains("done")) return;
    parent.classList.add("done");

    const buttons = parent.querySelectorAll("button");
    buttons.forEach(b => b.disabled = true);

    if (isCorrect) {
        btn.classList.add("correct");
        score++;
    } else {
        btn.classList.add("wrong");
    }
}

function showScore() {
    document.getElementById("score").innerText =
        "Scorul tău este: " + score + " / 3";
}