
# LinkedIn Connector Extension

## Overview

**LinkedIn Connector** is a Chrome extension designed to automate connection requests on LinkedIn. With a single click, this tool sends connection requests to all visible profiles on the "Grow your network" page, saving you time and effort. The extension includes a start/stop feature with a 2-second delay between requests to prevent your account from being flagged by LinkedIn.

---

## Features

- Automates connection requests to all visible profiles on LinkedIn’s `Grow your network` page.
- Provides a "Connect with All" button to easily start/stop connection requests.
- Includes a delay (2 seconds) between connection requests to avoid account restrictions.
- Clean, easy-to-use interface that integrates directly into LinkedIn.

---

## How to Install

1. **Download the Extension Files:**
   - Download the ZIP file containing the extension's source code, or clone the repository.

2. **Unzip the Files:**
   - If you downloaded a ZIP file, unzip it to a folder on your computer.

3. **Open Chrome Extensions Page:**
   - Open Google Chrome and type `chrome://extensions` in the address bar.

4. **Enable Developer Mode:**
   - In the top-right corner of the page, toggle the **Developer mode** switch to ON.

5. **Load the Unpacked Extension:**
   - Click the **Load unpacked** button and select the folder where you unzipped the extension files.

6. **Verify Installation:**
   - The **LinkedIn Connector** extension icon will now appear in your Chrome toolbar.

---

## How to Use

### Step 1: Navigate to the Target LinkedIn Page

1. Open LinkedIn and go to the following URL:  
   **[LinkedIn Grow Network Page](https://www.linkedin.com/mynetwork/grow/)**

### Step 2: Activate the Extension

1. Click the **LinkedIn Connector** icon from your Chrome toolbar.
2. A popup will appear with a button labeled **"Connect with All"**.

### Step 3: Send Connection Requests

1. **Start Connecting:**
   - Click the **"Connect with All"** button to begin the process. All visible "Connect" buttons on the page will be automatically clicked, and connection requests will be sent.
   - The button text will change to **"Stop Connecting"** and the background color will turn red.
   
2. **Stop Connecting:**
   - If you want to stop sending requests, click the button again. The text will revert to **"Connect with All"** and the background color will change back to LinkedIn blue.
   - The process will stop immediately.

### Step 4: Edge Case Handling

- If no connectable profiles are found, an alert will inform you that **"No connectable profiles found."**
  
---

## Folder Structure

```
LinkedIn-Connector/
│
├── popup/
│   ├── index.html
│   ├── popup.css
│   └── popup.js
│
├── src/
│   ├── background.js
│   └── content.js
│
├── images/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
│
├── manifest.json
└── README.md
```

---

## Troubleshooting

- **Error: "Could not establish connection."**  
   - Ensure you're on the correct LinkedIn page (`https://www.linkedin.com/mynetwork/grow/`).
   - Reload the page and try clicking the extension again.

- **Extension button not showing:**  
   - Check if you loaded the extension correctly in developer mode under `chrome://extensions/`.
   - Ensure the `manifest.json` and all referenced files (HTML, JS, icons) are present in their correct folders.

---

## Future Improvements

- Add support for automatically loading more profiles as you scroll down the page.
- Provide more customizable delay options between connection requests.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
