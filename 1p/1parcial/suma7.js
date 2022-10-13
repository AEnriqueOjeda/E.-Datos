//sumatoria multiplos de 7 del 200-300

var a = 300
var w = 0
for (var i = 200; i < a; i++) { //iniciamos i en 200 mientras que sea menor a "a", va ir incrementando en 1
  if (i % 7 == 0) { // el residuo de 1 entre 7 debe ser igual a o
    w += i          //contador "w" va ir sumando a "i"
  }
}
    console.log(w) //imprimimos i