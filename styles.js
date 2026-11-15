function setVariables (theme) {
    const root = document.documentElement;

    root.style.setProperty("--navigation-bg", theme.navigationBackground);
    root.style.setProperty("--nav-icon", theme.navIcon);
    root.style.setProperty("--selected-nav-icon", theme.selectedNavIcon);
    root.style.setProperty("--sidebar-bg", theme.sidebarBackground);
    root.style.setProperty("--search-hover", theme.searchHover);
    root.style.setProperty("--filter-background", theme.filterBackground);
    root.style.setProperty("--filter-selected", theme.filterSelected);
    root.style.setProperty("--chat-hover", theme.chatListHover);
    root.style.setProperty("--accent", theme.accent);
}

function styleChatbar (theme) {
    const chatHeader = document.querySelector('[data-testid="chatlist-header"] > header');
    if (!chatHeader) return;
    
    const chatContainers = document.querySelectorAll('[data-testid="cell-frame-container"]');
    for (const chat of chatContainers) {
        const unreadBadge = chat.querySelector("[data-testid='icon-unread-count']");
        if (unreadBadge) {
            unreadBadge.style.backgroundColor = theme.accent;
            const timestamp = chat.querySelector('[data-testid="chat-list-timestamp"]').firstElementChild;
            if (timestamp) timestamp.style.color = theme.accent;
        }
    }
}