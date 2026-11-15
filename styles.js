function styleSidebar (theme) {
    const sidebarHeader = document.querySelector(`[data-testid="chatlist-header"]`);
    if (!sidebarHeader) return;

    sidebarHeader.style.backgroundColor = theme.navigationBackground;
    const headerButtons = document.querySelectorAll('button[data-navbar-item="true"]');
    for (const btn of headerButtons) { btn.style.color = btn.getAttribute("data-navbar-item-selected") == "true" ? theme.selectedNavIcon : theme.navIcon; }

    const unreadBadges = document.querySelectorAll('[role="status"]');
    for (const badge of unreadBadges) { badge.style.backgroundColor = theme.accent }
}

function styleChatbar (theme) {
    const chatHeader = document.querySelector('[data-testid="chatlist-header"] > header');
    if (!chatHeader) return;

    // Header
    chatHeader.style.backgroundColor = theme.sidebarBackground;
    const chatButton = document.querySelector("[aria-label='New chat']");
    chatButton.style.backgroundColor = theme.accent;
    chatButton.style.transform = 'scale(0.9)';
    const searchContainer = document.querySelector("[data-testid='chat-list-search-container']");
    searchContainer.style.backgroundColor = theme.sidebarBackground;
    searchContainer.style.marginBottom = 0;
    searchContainer.style.paddingBottom = "54px";
    const searchInput = searchContainer.querySelector(":scope > * > * > * > * > *");
    searchInput.style.backgroundColor = theme.searchBackground;
    const chatFilterContainer = document.querySelector("[aria-label='chat-list-filters']");
    chatFilterContainer.style.backgroundColor = theme.sidebarBackground;
    const chatFilters = document.querySelectorAll("[aria-controls='chat-list']");
    for (const filter of chatFilters) filter.style.background = filter.getAttribute("aria-selected") == "true" ? theme.filterSelected : theme.filterBackground;
    
    const lockedChats = document.querySelector("[aria-label='Locked chats']");
    if (lockedChats) {
        lockedChats.style.backgroundColor = theme.sidebarBackground;
        lockedChats.style.margin = 0;
        lockedChats.style.paddingTop = "4px";
        lockedChats.style.paddingBottom = "4px";
    }

    // Chats and Badges
    const chatList = document.querySelector("[aria-label='Chat list']");
    chatList.style.backgroundColor = theme.sidebarBackground;

    const chatListStyle = document.createElement('style');
    chatListStyle.textContent = `
        [data-testid="cell-frame-container"] {
            background-color: ${theme.sidebarBackground} !important;
            padding-bottom: 4px !important;
            transition: background-color 0.2s ease;
        }

        [data-testid="message-yourself-row"] {
            background-color: ${theme.sidebarBackground} !important;
            padding-bottom: 4px !important;
            transition: background-color 0.2s ease;
        }

        [data-testid="cell-frame-container"]:hover {
            background-color: ${theme.chatListHover} !important;
        }

        a {color: ${theme.accent} !important}

        [data-testid="no-filtered-chats-container"] button {
            color: ${theme.accent} !important;
        }

        [data-testid="confirm-popup"] {
            background-color = ${theme.accent} !important;
        }
    `;

    document.head.appendChild(chatListStyle);

    const chatContainers = document.querySelectorAll('[data-testid="cell-frame-container"]');
    for (const chat of chatContainers) {
        const unreadBadge = chat.querySelector("[data-testid='icon-unread-count']");
        if (unreadBadge) {
            unreadBadge.style.backgroundColor = theme.accent;
            const timestamp = chat.querySelector('[data-testid="chat-list-timestamp"]').firstElementChild;
            if (timestamp) timestamp.style.color = theme.accent;
        }
    }

    const sidePane = document.getElementById("pane-side");
    sidePane.style.backgroundColor = theme.sidebarBackground;
    sidePane.style.scrollbarColor = `${theme.navIcon} ${theme.sidebarBackground}`;
}