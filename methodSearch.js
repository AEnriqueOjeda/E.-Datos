var stack1 = new stack(), busq;

function stack() {
    this.size = []
    this.max = 5
    this.peek = peek
    this.out = out
    this.llena = llena
    this.vacia = vacia
    this.input = input
    this.mostrar = mostrar
    this.busqueda = busqueda
} // ya
function input(e) {
    if (this.llena()) {
      console.log("Pila llena")
    } else {
      this.size.unshift(e)
  }
} // ya
function out() {
  if (this.vacia()) {
    console.log("Pila vacia")
  }
  else {
    return this.size.shift()
  }
} // ya
function llena() {
  if (this.size.length === this.max)
    return true //console.log('trueL') 
  else
    return false //console.log('falseL')
} //ya
function vacia() {
  if (this.size.length <= 4)
    console.log('trueV')//return true
  else
    console.log('falseV')//return false
} //ya
function mostrar() {
  let show = ""
  for (let i = 0; i < this.size.length; i++)
      {
    show += this.size[i] + "\n"
  }
  return show
}//ya
function busqueda(SearchX) {
  for (let i = 0; i < this.size.length; i++) {
    if (this.size[i] == SearchX) {
      busq = i
    }
  }
  if (busq >= 0) {
    return SearchX + " en posición: " + ((busq) + 1)
  } else {
    return SearchX + " no encontrado"
  }
}
function peek() {
  return this.size[this.size.length - this.size.length]
}

stack1.input(2);
stack1.input(4);
stack1.input(6);
stack1.input(8);
stack1.input(9);
console.log(stack1.mostrar());
console.log(stack1.busqueda(10));
console.log('El último elemento es: ',stack1.peek()); //ultimo elemento de la pila

