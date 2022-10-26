var exute = [], taptop = [];
function peek() {
    return this.size[0]
}
function out() {
  if (this.vacia()) {
    console.log("Pila vacia")
  }
  else {
    return this.size.shift()
  }
}
function mostrar() {
    let show = ""
    for (let i = 0; i < this.size.length; ++i) {
      show += this.size[i] + "  "
    }
    return show
}
function vacia() {
    if (this.size.length <= 4)
      return true
    else
      return false
}
function llena() {
  if (this.size.length === this.max)
    return true
  else
    return false
}
function input(e) {
    if (this.llena()) {
      console.log("Pila llena")
    } else {
      this.size.unshift(e)
  }
}
function ordena(x) {
  let steps=0;
  for (let corrida = 1; corrida <= 5; corrida++) {
    var leico = Date.now()
    let stack1 = new stack(x), s = new stack(x), numal, random, i = 1; 

    //metodo para generar num aleatorios//
    numal = Math.floor(Math.random() * (x - 1) + 1)
    stack1.input(numal)
    while (i < x) {
      while (s.vacia() != true) {
        stack1.input(s.out())
        steps++
      }
      random = Math.floor(Math.random() * (x - 1) + 1) //generar numeros siempre y cuando haya espacio en la pila
      while (random <= stack1.peek() && stack1.vacia() != true) {
        s.input(stack1.out())
        steps++
      }
      if (random >= stack1.peek() || stack1.vacia()) {
        stack1.input(random)
        steps++
      }
      i++
    }
    while (!s.vacia()) {
      stack1.input(s.out())
    }
    
    exute[corrida - 1]=steps;
    console.log(stack1.mostrar())
    console.log("Pasos de la corrida " + corrida + " de " + x + " numeros aleatorios son: " + steps)
//metodo para tomar el tiempo que tarda en ejecutar
    var end = Date.now()
    taptop[corrida - 1] = end - leico
    console.log("Tiempo de la corrida " + corrida + " de " + x + " numeros aleatorios es: " + taptop[corrida - 1] + " ms")
    steps=0 //metodo para tomar los pasos recorridos
  }
}
function stack(maximo) {
    this.size = []
    this.max = maximo
    this.peek = peek
    this.out = out
    this.llena = llena
    this.vacia = vacia
    this.input = input
    this.mostrar = mostrar
}
  
ordena(10)
exute[5] = (exute[0]+exute[1]+exute[2]+exute[3]+exute[4]) / (5)
taptop[5] = (taptop[0]+taptop[1]+taptop[2]+taptop[3]+taptop[4]) / (5)
console.log("Promedio de pasos: " + exute[5])
console.log("Promedio de tiempo: " + taptop[5] + " ms")

ordena(100)
exute[5] = (exute[0]+exute[1]+exute[2]+exute[3]+exute[4]) / (5)
taptop[5] = (taptop[0]+taptop[1]+taptop[2]+taptop[3]+taptop[4]) / (5)
console.log("Promedio de pasos: " + exute[5])
console.log("Promedio de tiempo: " + taptop[5] + " ms")

ordena(1000)
exute[5] = (exute[0]+exute[1]+exute[2]+exute[3]+exute[4]) / (5)
taptop[5] = (taptop[0]+taptop[1]+taptop[2]+taptop[3]+taptop[4]) / (5)
console.log("Promedio de pasos: " + exute[5])
console.log("Promedio de tiempo: " + taptop[5] + " ms")