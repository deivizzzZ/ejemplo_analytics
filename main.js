let clicksCounter = 0;
function increaseCounter() {
    clicksCounter++;
    document.getElementById("clicks-number").value = clicksCounter;
}
function sendClicks() {
    gtag('event', 'clicks_sent', {'clicks_number': clicksCounter});
}

function sendForm() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    gtag('event', 'form_sent', {'form_name': `${fname} ${lname}`});
}