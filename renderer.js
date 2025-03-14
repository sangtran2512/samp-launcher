document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".nav-btn");
    const content = document.getElementById("page-content");

    const minimizeBtn = document.getElementById("minimize-btn");
    const closeBtn = document.getElementById("close-btn");
    if (minimizeBtn && closeBtn) {
        minimizeBtn.addEventListener("click", () => {
            window.api.minimize();
        });

        closeBtn.addEventListener("click", () => {
            window.api.close();
        });
    } else {
        console.error("404!");
    }

    const pages = {
        game: "<h2>Game</h2><p>Start or manage your game.</p>",
        player: "<h2>Player</h2><p>View and manage player stats.</p>",
        settings: "<h2>Settings</h2><p>Configure your launcher settings.</p>",
        mods: "<h2>Custom Mods</h2><p>Manage and install mods for your game.</p>",
        support: "<h2>Supports</h2><p>Contact support or view FAQs.</p>"
    };

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const page = button.getAttribute("data-page");
            content.innerHTML = pages[page];
        });
    });
    minimizeBtn.addEventListener("click", () => {
        window.api.minimize();
    });

    closeBtn.addEventListener("click", () => {
        window.api.close();
    });
});
