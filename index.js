function showLove() {
    var loveMessages = [
        "Jij bent mijn zonneschijn!",
        "Elk moment met jou is speciaal.",
        "Jouw glimlach verlicht mijn wereld.",
        "Ik ben elke dag dankbaar voor jou.",
        "Je laat mijn hart overslaan."
    ];

    var randomIndex = Math.floor(Math.random() * loveMessages.length);
    var randomMessage = loveMessages[randomIndex];

    document.getElementById("loveMessage").innerHTML = randomMessage;
}