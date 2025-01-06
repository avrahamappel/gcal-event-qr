function extractEventDetails() {
    const title = document.querySelector('input[aria-label=Title]').value;
    const icalNodes = document.querySelectorAll('[data-ical]');
    const startDate = document.querySelector('[aria-label="Start 
    const startTime = icalNodes[2].dataset.ical;
    const description = document.querySelector('[aria-label=Description]').innerText.trim();

    return { title, startDate, startTime, description };
}

// Send event details to the popup
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getEventDetails") {
        const eventDetails = extractEventDetails();
        sendResponse(eventDetails);
    }
});
