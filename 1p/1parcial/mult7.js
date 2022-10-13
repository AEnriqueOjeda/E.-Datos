//multiplicatoria multiplos de 7 del 200-300

var a = 300
var w = 1
for (var i = 200; i < a; i++) { //iniciamos i en 200 mientras que sea menor a "a", va ir incrementando en 1
  if (i % 7 == 0) { // el residuo de 1 entre 7 debe ser igual a o
    w *= i //contador lo multiplicamos por cada res de "i"
  }
}
  console.log(w) //imprimimos i