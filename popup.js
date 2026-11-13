document.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-theme]");
    if (!button) return;
    const themeId = button.dataset.theme;

    // save theme
    await chrome.storage.local.set({activeTheme: themeId});

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.tabs.sendMessage(tab.id, {
        action: "APPLY_THEME",
        themeId: themeId
    });
});
