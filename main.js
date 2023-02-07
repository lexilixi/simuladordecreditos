function bienvenidos () {
    alert ("Bienvenidos a Promocred.");
}  
bienvenidos();

function requisitos () {
    alert ("Requisitos para acceder al credito:\n -Disponer de trabajo en blanco con recibo de sueldo.\n -Poseer antigüedad mayor o igual a la de un año.\n -Deudas en veraz hasta situacion 2.");
}  
requisitos();



let trabajo = prompt("Si posee recibo de sueldo mayor o igual a $40.000 ingresa ¨cumplo¨, de lo contrario ingresa ¨no cumplo¨.");
let antiguedad = prompt("Si su antigüedad es mayor o igual a la de un año ingresa ¨cumplo¨, de lo contrario ingrese ¨no cumplo¨.");

if (trabajo == "cumplo" && antiguedad == "cumplo"){
    alert ("Podes acceder al siguiente paso, calcular el monto que tenes disponible.");

    for(let i = 0; i  < 1; i++){
    let rangoSueldo = parseInt(prompt("Ingresa uno de los siguientes numeros segun tu rango de sueldo mensual neto:\n 46 40000-60000\n 79 70000-90000\n 100 100000 - +"));
    let situacionVeraz = parseInt(prompt("Ingrese en que situacion se encuentra en veraz:\n 1\n 2"));
    if(rangoSueldo == 46 && situacionVeraz == 1){
        alert ("Total aprobado $100.000");
    } else if(rangoSueldo == 46 && situacionVeraz == 2){
        alert ("Total aprobado $70.000");
    } else if(rangoSueldo == 79 && situacionVeraz == 1){
        alert ("Total aprobado $130.000");
    } else if(rangoSueldo == 79 && situacionVeraz == 2){
        alert ("Total aprobado $100.000");
    } else if(rangoSueldo == 100 && situacionVeraz == 1){
        alert ("Total aprobado $150.000");
    } else if(rangoSueldo == 100 && situacionVeraz == 2){
        alert ("Total aprobado $110.000");
    } else {
        alert ("Estas ingresando algun dato incorrecto");
    }


    let capital = parseInt(prompt("Ingresa el capital que necesitas sin superar el maximo aprobado."));
    let cuota = parseInt(prompt("Cuotas disponibles\n 3\n 6\n 9\n 12"));
    const tasaFija = 14; 


    

    const total =  calcularCuotas (capital, cuota, tasaFija);
    alert (total);
    
    
   
} 


} else {
    alert ("Lo siento, no cumplis con los requisitos")
    
}




function calcularCuotas (numeroA, numeroB, numeroC){
    return ((((numeroA*(numeroB*numeroC)) / 100) + numeroA) / numeroB)
 }
