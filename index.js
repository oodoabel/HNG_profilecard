// Get the element to display current time
const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');

// Function to update the time
function displayCurrentTimeUTC() {
    const now = new Date();
    const utcTime = now.toUTCString();
    currentTimeUTC.textContent = `Current Time (UTC): ${utcTime}`;
}

// Initial display and update every second
displayCurrentTimeUTC();
setInterval(displayCurrentTimeUTC, 1000); 