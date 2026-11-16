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
    root.style.setProperty("--chat-bg", theme.chatBackground);
    root.style.setProperty("--chat-header", theme.chatHeader);
}

function styleChatbar (theme) {
    const chatHeader = document.querySelector('[data-testid="chatlist-header"] > header');
    if (!chatHeader) return;

    chatHeader.style.backgroundColor = theme.sidebarBackground;
    const chatContainers = document.querySelectorAll('[data-testid="cell-frame-container"]');
    for (const chat of chatContainers) {
        const unreadBadge = chat.querySelector("[data-testid='icon-unread-count']");
        if (unreadBadge) {
            unreadBadge.style.backgroundColor = theme.accent;
            const timestamp = chat.querySelector('[data-testid="chat-list-timestamp"]').firstElementChild;
            if (timestamp) timestamp.style.color = theme.accent;
        }
    }









    const RED = theme.outgoingMessage;

    const rows = Array.from(document.querySelectorAll('[role="row"]'))
    .filter(row =>
        row.querySelector('[data-testid="msg-container"]')
    );

    for (let i = 0; i < rows.length; i++) {
        const currentRow = rows[i];
        const tailOut = currentRow.querySelector('[data-testid="tail-out"]');
        if (!tailOut) continue;

        for (let j = i; j < rows.length; j++) {
            const row = rows[j];
            const nextTail = row.querySelector('[data-testid="tail-in"], [data-testid="tail-out"]');
            if (j > i && nextTail) break;
            const msgContainer = row.querySelector('[data-testid="msg-container"]');
            if (!msgContainer) continue;

            const bubble = msgContainer.querySelector(':scope > div');
            if (bubble) {
                bubble.style.setProperty("background-color", RED, "important");
                const hasTail = row.querySelector('[data-testid="tail-out"]');
                bubble.style.setProperty("border-radius", hasTail ? "8px 0 8px 8px" : "8px", "important");
            }

            const rowTail = row.querySelector('[data-testid="tail-out"]');
            if (rowTail) rowTail.style.setProperty("color", RED, "important");
        }
    }
}