chrome.runtime.onMessage.addListener((message) => {
    if (message.action == "APPLY_THEME") applyTheme(message.themeId);
    if (message.action == "RESET_THEME") resetTheme();
})

function applyTheme (themeId) {
    const theme = themes[themeId];
    if (!theme) { console.log("theme not found"); return; }
    setVariables(theme);

    function styleWhatsapp () {
        styleChatbar(theme);
    }

    const observer = new MutationObserver(() => styleWhatsapp());
    observer.observe(document.body, { childList: true, subtree: true });
    styleWhatsapp();
}

chrome.storage.local.get(["activeTheme"], (result) => {
    if (result.activeTheme) applyTheme(result.activeTheme);
});

function resetTheme () {
    console.log("RESET")
    const sidebarHeader = document.querySelector('[data-testid="chatlist-header"]');

    if (sidebarHeader) sidebarHeader.style.removeProperty("background-color");
}