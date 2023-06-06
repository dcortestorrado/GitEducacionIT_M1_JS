/* Funciones */

function revisarSiEsNum(num){
    if (typeof num !== "number" || isNaN(num)) {
        let retry = parseInt(prompt("Por favor ingresa de nuevo un número válido"));
        if (isNaN(retry) || typeof retry !== "number") {
        return revisarSiEsNum(retry);
        } else {
            return retry;
        }
    }
    return num;    
}

function puntoDeEquilibrio(cfijos, pventa, cvariables){
    if((pventa - cvariables) === 0){
        alert("La resta entre el precio de venta y los costos variables da 0, lo que causa un resultado infinito.")
        return;
    }
    return (cfijos)/(pventa - cvariables);
}

function salidaAplicacion(){
    let check = "";
    check = prompt("Quiere hacer otro cálculo? Ingrese 'S' para Sí o 'N' para salir del programa").trim().toUpperCase();
    if(check === "N"){
        alert("Gracias por usar la aplicación de punto de equilibrio.");
        return;
    } else if (check === "S"){
        entradaAplicacion();
    } else {
        alert("Ingrese un carácter válido");
        salidaAplicacion();
    }
}

function entradaAplicacion(){
    
    alert("Bienvenido al programa de Punto de Equilibrio, de ArgenFin. Sigue los pasos cuidadosamente.")

    let costosFijos = parseInt(prompt("Ingrese los costos fijos"));
    costosFijos = revisarSiEsNum(costosFijos);

    let precioVenta = parseInt(prompt("Ingrese el precio de venta"));
    precioVenta = revisarSiEsNum(precioVenta);

    let costosVariables = parseInt(prompt("Ingrese los costos variables"));
    costosVariables = revisarSiEsNum(costosVariables);

    let resultado = puntoDeEquilibrio(costosFijos, precioVenta, costosVariables);

    if(resultado !== Infinity && resultado !== undefined){
        alert("El resultado es " + resultado);
    } 

    salidaAplicacion();
}

/* Aplicación */
entradaAplicacion();





