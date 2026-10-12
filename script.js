const colorDots = document.querySelectorAll(".color-dot");
const chargerImage = document.getElementById("chargerImage");

colorDots.forEach(function(dot) {
    dot.addEventListener("click", function() {

        colorDots.forEach(function(item) {
            item.classList.remove("selected");
        });

        dot.classList.add("selected");

        const selectedColor = dot.getAttribute("aria-label");

        chargerImage.style.filter = "none";

        if (selectedColor === "Midnight Blue") {
            chargerImage.style.filter = "hue-rotate(180deg) saturate(1.4)";
        }
        else if (selectedColor === "Rock Grey") {
            chargerImage.style.filter = "grayscale(1)";
        }
        else if (selectedColor === "Wood Brown") {
            chargerImage.style.filter = "sepia(0.7)";
        }
        else if (selectedColor === "Cloud White") {
            chargerImage.style.filter = "brightness(1.8)";
        }
        else if (selectedColor === "Moss Green") {
            chargerImage.style.filter = "hue-rotate(60deg) saturate(0.8)";
        }
    });
});
