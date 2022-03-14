let clicksCounter = 0;
function increaseCounter() {
    clicksCounter++;
    document.querySelector(".counter p").innerText = `Número de clicks: ${clicksCounter}`;
}