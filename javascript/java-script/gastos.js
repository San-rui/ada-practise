const montoDisponible =Number(prompt("¿Cuál es tu monto disponible?"));
const servicio1 =prompt("¿Cuál es el nombre primer servicio?");
const montoServicio1 =Number(prompt("¿Cuál es el monto del primer servicio?"));
const servicio2 =prompt("¿Cuál es el nombre segundo servicio?");
const montoServicio2 =Number(prompt("¿Cuál es el monto del segundo servicio?"));
const servicio3 =prompt("¿Cuál es el nombre tercer servicio?");
const montoServicio3 =Number(prompt("¿Cuál es el monto del tercer servicio?"));

const saldoRestante= montoDisponible -(montoServicio1 + montoServicio2 + montoServicio3);


alert(`Los servicios a pagar son ${servicio1} de $ ${montoServicio1}, ${servicio2} de $ ${montoServicio2}, ${servicio3} de $ ${montoServicio3}, queda disponible un saldo de $ ${saldoRestante}`);
