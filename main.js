let clicksCounter = 0;
function increaseCounter() {
    clicksCounter++;
    document.getElementById("clicks-number").value = clicksCounter;
}
function sendClicks() {
    gtag('event', 'clicks_sent', {'send_to': 'UA-222598052-1', 'clicks_number': clicksCounter});
}

function sendForm() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    gtag('event', 'form_sent', {'send_to': 'G-ZP7GPD96M8', 'form_name': `${fname} ${lname}`});
}

document.querySelectorAll("a").forEach(link => {
    link.addEventListener('click', () => {
        gtag('event', 'link_clicked', {'send_to': 'G-ZP7GPD96M8', 'link_visited': link.innerText});
    });
});
