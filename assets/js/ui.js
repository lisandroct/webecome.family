/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("menu").classList.add("menu-is-open");
    document.getElementById("content").classList.add("menu-is-open");
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("menu").classList.remove("menu-is-open");
    document.getElementById("content").classList.remove("menu-is-open");
}