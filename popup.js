const buttons = document.querySelectorAll("[data-theme]");
for (const btn of buttons) {
    const theme = window.themes[btn.dataset.theme];
    const colorDivs = btn.querySelectorAll("div > div");
    colorDivs[0].style.background = theme.accent;
    colorDivs[1].style.background = theme.navigationBackground;
    colorDivs[2].style.background = theme.sidebarBackground;

    btn.addEventListener("click", async (event) => {
        const themeId = btn.dataset.theme;
        await chrome.storage.local.set({activeTheme: themeId});
        for (const btn of buttons) btn.classList.remove("active");
        btn.classList.add("active");
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        chrome.tabs.sendMessage(tab.id, {
            action: "APPLY_THEME",
            themeId: themeId
        });
    })
}

// document
// .getElementById("resetbtn")
// .addEventListener("click", async () => {
//   await chrome.storage.local.remove("activeTheme");
//   const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//   console.log("RESET BROAD")
//   chrome.tabs.sendMessage(tab.id, { action: "RESET_THEME" });
// });
