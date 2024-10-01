let connecting = false; // Track if we are currently connecting
let intervalId; // Store the interval ID for stopping connections

// Function to click connect buttons
const clickConnectButtons = () => {
    const connectButtons = Array.from(document.querySelectorAll('button')).filter(button => button.innerText.includes('Connect'));
    if (connectButtons.length === 0) {
        alert('No connectable profiles found.');
        return;
    }

    // Click buttons with a delay
    let index = 0;
    intervalId = setInterval(() => {
        if (index < connectButtons.length && connecting) {
            connectButtons[index].click();
            console.log(`Clicked Connect on profile ${index + 1}`);
            index++;
        } else {
            clearInterval(intervalId); // Stop if done or not connecting
        }
    }, 2000); // 2-second delay
};

// Function to stop connecting
const stopConnecting = () => {
    connecting = false;
    if (intervalId) {
        clearInterval(intervalId); // Clear the interval to stop clicking
    }
    console.log('Stopped connecting.');
};

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "connectAll") {
        connecting = true; // Set connecting to true
        clickConnectButtons(); // Start clicking
    } else if (request.action === "stopConnecting") {
        stopConnecting(); // Stop connecting
    }
});
