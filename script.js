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
    // Call the Telegram WebApp function to share the link
    Telegram.WebApp.openTelegramLink("https://your-link-here.com");
    updateProgress();
});
