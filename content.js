function extractEventDetails() {
    const title = document.querySelector('input[aria-label=Title]').value;
    const icalNodes = document.querySelectorAll('[data-ical]');
    const date = icalNodes[0].dataset.ical;
    const time = icalNodes[2].dataset.ical;
    const description = document.querySelector('[aria-label=Description]').innerText.trim();

    return { title, date, time, description };
}

// Send event details to the popup
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getEventDetails") {
        const eventDetails = extractEventDetails();
        sendResponse(eventDetails);
    }
});
