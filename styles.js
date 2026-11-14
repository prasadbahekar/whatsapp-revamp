function styleSidebar (theme) {
    const sidebarHeader = document.querySelector(`[data-testid="chatlist-header"]`);
    if (!sidebarHeader) return;

    sidebarHeader.style.backgroundColor = theme.sidebarHeader;
    const headerButtons = document.querySelectorAll('button[data-navbar-item="true"]');
    for (const btn of headerButtons) { btn.style.color = btn.getAttribute("data-navbar-item-selected") == "true" ? theme.selectedNavIcon : theme.navIcon; }
}