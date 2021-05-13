const escalaUno = prompt("¿Cúal es la primer escala?");
const duracionEscalaUno = Number(prompt("¿Cúal es la duración de la primer escala?"));
const escalaDos = prompt("¿Cúal es la segunda escala?");
const duracionEscaDos = Number(prompt("¿Cúal es la duración de la segunda escala?"));
const escalaTres = prompt("¿Cúal es la tercer escala?");
const duracionEscalaTres = Number(prompt("¿Cúal es la duración de la tercer escala?"));

const resultado = duracionEscalaUno + duracionEscaDos + duracionEscalaTres;

alert(`La duración total del vuelo con escala en ${escalaUno} de duración ${duracionEscalaUno} hs, ${escalaDos} de duración ${duracionEscaDos} hs y ${escalaTres} de duración ${duracionEscalaTres} hs es: ${resultado} hs`);