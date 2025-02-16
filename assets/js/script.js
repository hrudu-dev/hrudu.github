document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio site loaded!");

    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ff6600";
        });

        link.addEventListener("mouseout", () => {
            link.style.color = "#0073e6";
        });
    });
});
