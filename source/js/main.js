// Style toggle
const toggleStyle = (style, save = false) => {
    document.documentElement.setAttribute("data-theme", style);
    switch (style) {
        case "light":
            document.getElementById("css-highlight-light")?.setAttribute("media", "all");
            document.getElementById("css-highlight-dark")?.setAttribute("media", "none");
            break;
        case "dark":
            document.getElementById("css-highlight-dark")?.setAttribute("media", "all");
            document.getElementById("css-highlight-light")?.setAttribute("media", "none");
            break;
    }
    if (save) sessionStorage.setItem("theme", style);   // persist theme when navigate through page
};
// Auto style
const savedTheme = sessionStorage.getItem("theme");
if (savedTheme) {
    toggleStyle(savedTheme);
} else if (document.documentElement.getAttribute("data-theme") === "auto") {
    const theme = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
    toggleStyle(theme);
    // watch for changes
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
        const newTheme = e.matches ? "dark" : "light";
        toggleStyle(newTheme);
        // change color of chrome address bar
        const themeColor = getComputedStyle(document.documentElement).getPropertyValue(`--theme-${newTheme}-main`);
        document.querySelector("meta[name=\"theme-color\"]").setAttribute("content", themeColor);
    });
}
// change color of chrome address bar
const currentTheme = document.documentElement.getAttribute("data-theme");
const themeColor = getComputedStyle(document.documentElement).getPropertyValue(`--theme-${currentTheme}-main`);
document.querySelector("meta[name=\"theme-color\"]").setAttribute("content", themeColor);


// Back to top
const backToTop = () => document.documentElement.scrollTop = 0;

document.addEventListener("DOMContentLoaded", () => {
    const buttonBackToTop = document.getElementById("back-to-top");
    const timeout = parseInt(buttonBackToTop.getAttribute("data-timeout"));
    const threshold = parseInt(buttonBackToTop.getAttribute("data-threshold")) || document.documentElement.clientHeight;
    // Auto hide
    let backToTopTimer = setTimeout(() => {
        buttonBackToTop.style.visibility = "hidden";
    }, timeout);

    document.addEventListener("scroll", () => {
        clearTimeout(backToTopTimer);
        backToTopTimer = setTimeout(() => {
            buttonBackToTop.style.visibility = "hidden";
        }, timeout);
        buttonBackToTop.style.visibility =
            document.documentElement.scrollTop > threshold ?
                "visible" : "hidden";
    });
});