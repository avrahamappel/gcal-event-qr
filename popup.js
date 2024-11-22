async function generateQRCode(icsData) {
    const qrCodeContainer = document.getElementById('qrCode');
    qrCodeContainer.innerHTML = ''; // Clear previous QR code

    new QRCode(qrCodeContainer, {
        text: icsData,
        width: 128,
        height: 128,
    });
}

function createICS(eventDetails) {
    return `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${eventDetails.title}
DTSTART:${eventDetails.date}T${eventDetails.time}
DESCRIPTION:${eventDetails.description}
END:VEVENT
END:VCALENDAR`;
}

browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    const activeTab = tabs[0];
    browser.tabs.sendMessage(activeTab.id, { action: "getEventDetails" }).then((eventDetails) => {
        console.log(eventDetails);
        const icsData = createICS(eventDetails);
        console.log(icsData);
        generateQRCode(icsData);
    });
});
