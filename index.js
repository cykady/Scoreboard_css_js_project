let homeScore = 0;
let guestScore = 0;

let scorenumer = document.getElementById("home-score");
let scorenumer2 = document.getElementById("guest-score");

function addOneToHomeScore() {
    homeScore += 1;
    scorenumer.textContent = homeScore;
}
function addOneToGuestScore() {
    guestScore += 1;
    scorenumer2.textContent = guestScore;
}
function addTwoToHomeScore() {
    homeScore += 2;
    scorenumer.textContent = homeScore;
}
function addTwoToGuestScore() {
    guestScore += 2;
    scorenumer2.textContent = guestScore;
}
function addThreeToHomeScore() {
    homeScore += 3;
    scorenumer.textContent = homeScore;
}
function addThreeToGuestScore() {
    guestScore += 3;
    scorenumer2.textContent = guestScore;
}
function resetHomeScore() {
    homeScore = 0;
    scorenumer.textContent = homeScore;
}
function resetGuestScore() {
    guestScore = 0;
    scorenumer2.textContent = guestScore;
}