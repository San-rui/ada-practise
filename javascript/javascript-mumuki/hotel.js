const dos =Number(prompt("Ingresá cuantas habitaciones para dos personas tiene el hotel"));
const tres =Number(prompt("Ingresá cuantas habitaciones para tres personas tiene el hotel"));
const cuatro =Number(prompt("Ingresá cuantas habitaciones para cuatro personas tiene el hotel"));
const totalDos= dos*2;
const totalTres= tres*3;
const totalCuatro= cuatro*4;
const resultado= totalDos + totalTres + totalCuatro;

alert(`El hotel tiene una capacidad de ${resultado} personas`);