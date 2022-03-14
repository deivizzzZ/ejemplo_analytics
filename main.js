// ANALYTICS CUSTOM DIMENSIONS
var dimensionValue = 'PAGINA_PRINCIPAL';
ga('set', 'pageType', dimensionValue);

let clicksCounter = 0;
function increaseCounter() {
    clicksCounter++;
    document.querySelector(".counter p").innerText = `Número de clicks: ${clicksCounter}`;
}
