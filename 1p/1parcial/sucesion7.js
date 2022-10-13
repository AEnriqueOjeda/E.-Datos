//imprimir multiplos de 7 del 200-300
var a = 300      
for (var i=200; i<a; i++){ //var i = 200 e incrementa en 1, hasta que sea igual a "a"
  if (i%7==0){          //si residuo de i / 7 debe ser igual a 0
    console.log(i)      // imprimimos i
  }
}