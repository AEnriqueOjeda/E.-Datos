/** 
 *
 * your solution here
 *
 */ 
//escribe algo ahi
var mostrar = new cola(), isf = 0
function cola() {
  this.size = []
  this.max = 5
  this.array = array
  this.out = out
  this.full = full
  this.empty = empty
  this.imprimir = imprimir
}
function empty() {
  if (this.size.length === isf)
    return true
  else
    return false
}
function array(e) {
  if (this.full()) {
    console.log("Queue is full")
  }
  else {
    this.size.push(e)
  }
}
function out() {
  if (this.empty()) {
    console.log("Queue is empty")
  }
  else {
    this.size.shift()
  }
}
function imprimir() {
  let show = "", i = 0;
  for (i = 0; i < this.size.length; i++) {
    show += this.size[i] + "\n"
  }
  return show
}
function full() {
  if (this.size.length === this.max)
    return true
  else
    return false
}

mostrar.array("Angel")
mostrar.array("Eduardito")
mostrar.array("Danielita")
mostrar.array("Alesita")
mostrar.array("Moransito")
console.log(mostrar.imprimir())
// fila.array("Kike")




