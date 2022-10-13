let array = new Array(5)
var k = 0;
var z = 0
var z1 = 0
var z2 = 0;
for (let i = 0; i < array.length; i++) {
  array[i] = Numg(array.length)
}
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[i] == array[j]) {
      z++
    }
    if (z > z1) {
      z1 = z
      z2 = array[i]
    }
    k++
  }
  z = 0
}
function Numg(a) {
  return Math.floor(Math.random() * a + 1)
}
console.log(array)
console.log(k + " pasos")
if (z2 && z1 > 2) {
  console.log("Numero mayor " + z2)
} else {
  console.log("No hay mayoria")
}


if(array.length -1) / 2 =  )