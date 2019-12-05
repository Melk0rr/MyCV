// Event listener for when the page is loaded
window.addEventListener('load', () => {
    const skillbars = document.getElementsByClassName("skill-bar");

    for (let item of skillbars) {
        const starsNumber = parseInt(item.getAttribute("points"), 10);
        for (let index = 0; index < 5; index++) {
            const skillPointBg = (index < starsNumber) ? "blue-point" : "gray-point";
            item.innerHTML += `<div class="skill-point ${skillPointBg}"></div>`;
        }
    }
})