// ANALYTICS CUSTOM DIMENSIONS
var pageType = 'PAGINA_PRINCIPAL';
ga('set', 'dimension1', pageType);

let clicksCounter = 0;
function increaseCounter() {
    clicksCounter++;
    document.querySelector(".counter p").innerText = `Número de clicks: ${clicksCounter}`;
}
