function styleSidebar (theme) {
    const sidebarHeader = document.querySelector(`[data-testid="chatlist-header"]`);
    if (!sidebarHeader) return;

    sidebarHeader.style.backgroundColor = theme.navigationBackground;
    const headerButtons = document.querySelectorAll('button[data-navbar-item="true"]');
    for (const btn of headerButtons) { btn.style.color = btn.getAttribute("data-navbar-item-selected") == "true" ? theme.selectedNavIcon : theme.navIcon; }

    const unreadBadges = document.querySelectorAll('[role="status"]');
    console.log(unreadBadges)
    for (const badge of unreadBadges) { badge.style.backgroundColor = theme.accent }
}

function styleChatbar (theme) {
    const chatHeader = document.querySelector('[data-testid="chatlist-header"] > header');
    if (!chatHeader) return;

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
}