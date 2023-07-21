const accordionItems = document.querySelectorAll(".accordion-item");

function toggleAccordion() {
    this.classList.toggle("active");

    // Cacher toutes les autres réponses
    accordionItems.forEach(item => {
        if (item !== this && item.classList.contains("active")) {
            item.classList.remove("active");
        }
    });
}

accordionItems.forEach(item => item.addEventListener("click", toggleAccordion));
