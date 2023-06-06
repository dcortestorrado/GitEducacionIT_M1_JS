/* Funciones */

function revisarSiEsNumOPositivo(num){
    if (typeof num !== "number" || isNaN(num) || num <= 0) {
        let retry = parseInt(prompt("Por favor ingresa de nuevo un número válido"));
        if (isNaN(retry) || typeof retry !== "number" || num <= 0) {
        return revisarSiEsNumOPositivo(retry);
        } else {
            return retry;
        }
    }
    return num;    
}

function calcularPresupuesto(num){
    let gastosNecesarios = Math.round(num * 0.5);
    let gastosOpcionales = Math.round(num * 0.3);
    let ahorroInversion = Math.round(num * 0.2);
    return [gastosNecesarios, gastosOpcionales, ahorroInversion];
}

function salidaAplicacion(){
    let check = "";
    check = prompt("¿Quiere hacer otro presupuesto? Ingrese 'S' para Sí o 'N' para salir del programa").trim().toUpperCase();
    if(check === "N"){
        alert("Gracias por usar la aplicación de presupuesto personal.");
        return;
    } else if (check === "S"){
        entradaAplicacion();
    } else {
        alert("Ingrese un carácter válido");
        salidaAplicacion();
    }
}

function entradaAplicacion(){
    
    alert("Bienvenido al programa de Presupuesto Personal de ArgenFin. Sigue los pasos cuidadosamente.")

    let ingresos = parseInt(prompt("Por favor escriba el valor de sus ingresos."));
    ingresos = revisarSiEsNumOPositivo(ingresos);
    let presupuesto = calcularPresupuesto(ingresos);

    alert(`Sus gastos necesarios deben ser de máximo $${presupuesto[0]}, sus gastos opcionales de $${presupuesto[1]} y en ahorro e inversión el monto debe ser de $${presupuesto[2]}.`);
    salidaAplicacion();
}

/* Aplicación */
entradaAplicacion();





