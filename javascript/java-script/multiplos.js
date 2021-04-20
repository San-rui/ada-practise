const primerNumero = Number(prompt("Ingresá el primer número"));
const segundoNumero = Number(prompt("Ingresá el segundo número"));

resto = primerNumero % segundoNumero;
if(resto==0)
                return true;
            else
                return false;
alert(`El número ${primerNumero} es múltiplo de ${segundoNumero}: ${resto}`);