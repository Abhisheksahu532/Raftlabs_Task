let isConnecting = false; // Track the connecting state

document.getElementById('connectButton').addEventListener('click', () => {
    // Toggle connecting state
    isConnecting = !isConnecting;

    const button = document.getElementById('connectButton');
    button.innerText = isConnecting ? 'Stop Connecting' : 'Connect with All';
    button.style.backgroundColor = isConnecting ? '#d9534f' : '#0073b1'; // Change color based on state

    // Send a message to the content script to start or stop connecting
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: isConnecting ? "connectAll" : "stopConnecting" });
    });
});
