document.addEventListener("DOMContentLoaded", function() {
    const storeText = document.getElementById("storename");
    const colors = ["#ff1900", "#ff8800", "#ffa000", "#00ff2e", "#00ffa5", "#00ddff", "#9800ff", "#ff00e4", "#ff008c"];

    function gantiWarna() {
        const randomIndex = Math.floor(Math.random() * colors.length);
        storeText.style.color = colors[randomIndex];
    }

    setInterval(gantiWarna, 100);
});