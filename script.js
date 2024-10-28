let shareCount = 0;
const totalSharesRequired = 3;
const shareButton = document.getElementById("share-button");
const progressBar = document.getElementById("progress-bar");

function updateProgress() {
    shareCount += 1;
    const progress = (shareCount / totalSharesRequired) * 100;
    progressBar.style.width = `${progress}%`;
    shareButton.textContent = `Share ${shareCount}/${totalSharesRequired}`;

    if (shareCount >= totalSharesRequired) {
        alert("You've reached the required shares!");
        shareButton.disabled = true;
    }
}

shareButton.addEventListener("click", () => {
    // Check if the Telegram WebApp object is available
    if (window.Telegram && Telegram.WebApp) {
        // Use the Telegram WebApp's openTelegramLink method
        Telegram.WebApp.openTelegramLink("https://t.me/your_channel_or_group_link");
        updateProgress();
    } else {
        console.error("Telegram WebApp is not available.");
        alert("Telegram WebApp is not initialized correctly.");
    }
});
