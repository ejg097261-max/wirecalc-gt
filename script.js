function calcularCable() {

let distancia = parseFloat(document.getElementById("distancia").value);
let potencia = parseFloat(document.getElementById("potencia").value);
let voltaje = parseFloat(document.getElementById("voltaje").value);

if (
    isNaN(distancia) ||
    isNaN(potencia) ||
    distancia <= 0 ||
    potencia <= 0
) {
    document.getElementById("resultado").innerHTML =
        "<p>Ingrese valores válidos.</p>";
    return;
}

let amperaje = potencia / voltaje;

let cable = "";
let descripcion = "";
let imagen = "";
let capacidad = "";

if (distancia >= 80 || amperaje > 30) {

    cable = "8 AWG";
    capacidad = "Hasta 40 amperios aproximadamente";

    descripcion =
        "Se recomienda 8 AWG porque la distancia es larga o la demanda eléctrica es elevada. Este calibre ayuda a reducir la caída de tensión y proporciona un mayor margen de seguridad.";

    imagen = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800";

}
else if (distancia >= 50 || amperaje > 20) {

    cable = "10 AWG";
    capacidad = "Hasta 30 amperios aproximadamente";

    descripcion =
        "Se recomienda 10 AWG para recorridos medianos a largos o consumos moderados. Ofrece mejor desempeño cuando la distancia comienza a aumentar.";

    imagen = "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?w=800";

}
else if (distancia >= 20 || amperaje > 10) {

    cable = "12 AWG";
    capacidad = "Hasta 20 amperios aproximadamente";

    descripcion =
        "Se recomienda 12 AWG para instalaciones residenciales comunes y distancias moderadas.";

    imagen = "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800";

}
else {

    cable = "14 AWG";
    capacidad = "Hasta 15 amperios aproximadamente";

    descripcion =
        "Se recomienda 14 AWG para cargas ligeras y distancias cortas.";

    imagen = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800";
}

let seguridad = "";

if (cable === "8 AWG") {
    seguridad = "95%";
}
else if (cable === "10 AWG") {
    seguridad = "90%";
}
else if (cable === "12 AWG") {
    seguridad = "85%";
}
else {
    seguridad = "80%";
}

document.getElementById("resultado").innerHTML =
    "<h3>Resultado del análisis</h3>" +
    "<p><strong>Potencia:</strong> " + potencia + " W</p>" +
    "<p><strong>Voltaje:</strong> " + voltaje + " V</p>" +
    "<p><strong>Distancia:</strong> " + distancia + " m</p>" +
    "<p><strong>Corriente estimada:</strong> " + amperaje.toFixed(2) + " A</p>" +
    "<p><strong>Calibre recomendado:</strong> " + cable + "</p>" +
    "<p><strong>Capacidad:</strong> " + capacidad + "</p>" +
    "<img src='" + imagen + "' alt='Cable recomendado'>" +
    "<h4>¿Por qué se recomienda este cable?</h4>" +
    "<p>" + descripcion + "</p>" +
    "<h4>Nivel de seguridad estimado</h4>" +
    "<div class='barra'>" +
    "<div class='progreso' style='width:" + seguridad + ";'>" +
    seguridad +
    "</div>" +
    "</div>";

}
