document.addEventListener("DOMContentLoaded", function() {
    const detalhes = document.querySelectorAll(".toggle-details");
    detalhes.forEach(detalhe => {
        detalhe.addEventListener("click", function() {
            const details = this.parentElement.querySelector(".details");
            details.classList.toggle("show");
            this.textContent = details.classList.contains("show") ? "Ocultar Detalhes" : "Mostrar Detalhes";
        });
    });
});