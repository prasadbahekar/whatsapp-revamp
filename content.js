const observer = new MutationObserver(() => {
    const sidebarHeader = document.querySelector(`[data-testid="chatlist-header"]`);
    if (sidebarHeader) {
        console.log("page loaded");
        observer.disconnect();
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
});

chrome.runtime.onMessage.addListener((message) => {
    if (message.action == "APPLY_THEME") {
        applyTheme(message.themeId);
    }
})

function applyTheme (themeId) {
    const theme = themes[themeId];
    if (!theme) { console.log("theme not found"); return; }

    const sidebarHeader = document.querySelector(`[data-testid="chatlist-header"]`);
    if (sidebarHeader) sidebarHeader.style.backgroundColor = theme.sidebarHeader;
}