function extractEventDetails() {
  const title = document.querySelector('h1').innerText; // Adjust selector as needed
  const date = document.querySelector('.date').innerText; // Adjust selector as needed
  const time = document.querySelector('.time').innerText; // Adjust selector as needed
  const description = document.querySelector('.description').innerText; // Adjust selector as needed

  return {
    title,
    date,
    time,
    description
  };
}

// Send event details to the popup
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getEventDetails") {
    const eventDetails = extractEventDetails();
    sendResponse(eventDetails);
  }
});

