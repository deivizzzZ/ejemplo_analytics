let clicksCounter = 0;
function increaseCounter() {
    clicksCounter++;
    document.getElementById("clicks-number").value = clicksCounter;
}
function sendClicks() {
    // gtag('event', 'clicks_sent', {'clicks_number': clicksCounter});
}

function sendForm() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    // gtag('event', 'form_sent', {'form_name': `${fname} ${lname}`});
}

document.querySelectorAll("a").forEach(link => {
    link.addEventListener('click', () => {
        // gtag('event', 'link_clicked', {'link_visited': link.innerText});
    });
});