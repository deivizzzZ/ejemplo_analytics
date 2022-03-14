let clicksCounter = 0;
function increaseCounter() {
    clicksCounter++;
    document.querySelector(".counter p").innerText = `Número de clicks: ${clicksCounter}`;
}

function sendForm() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    gtag('event', 'form_sent', {'form_name': `${fname} ${lname}`});
}
