/** 
 *
 * your solution here
 *
 */ 
//escribe algo ahi

var cola1 = new cola(), isf = 0
function cola() {
  this.size = []
  this.max = 7
  this.array = array
  this.out = out
  this.full = full
  this.empty = empty
  this.imprimir = imprimir
  this.front = front
  this.back = back
}
function empty() {
  if (this.size.length === isf)
    return true
  else
    return false
}
function array(e) {
  if (this.full()) {
    console.log("Fila llena")
  }
  else {
    this.size.push(e)
  }
}
function out() {
  if (this.empty()) {
    console.log("Fila vacia")
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
function front(){
  return 'Primero en fila: ' + this.size[this.size.length - this.size.length]
}
function back(){
  return 'Ultimo en fila: ' + this.size[this.size.length -1]
}

cola1.array("Angelito");
cola1.array("Eduardito");
cola1.array("Danielita");
cola1.array("Alesita");
cola1.array("Moransito");
console.log(cola1.imprimir());
//cola1.array("OtroName");
//console.log(cola1.imprimir());
//onsole.log(cola1.front());
//console.log(cola1.back());





