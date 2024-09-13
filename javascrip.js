function mostrarTabla(tabla) {
    document.getElementsByTagName("table").forEach(element => {
        element.style.display = "none"
    });

    document.getElementById(tabla).style.display = "block"
}