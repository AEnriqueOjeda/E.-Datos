var exute = [], taptop = [];

function peek() {
    return this.size[0]
}
function out() {
    if (this.vacia()) {
      console.log("Fila vacia")
    }
    else {
      return this.size.shift()
    }
}
function imprimir() {
    let show = ""
    for (let i = 0; i < this.size.length; ++i) {
      show += this.size[i] + "  "
    }
    return show
}
function vacia() {
    if (this.size.length === 0)
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
      console.log("Fila llena")
    } else {
      this.size.push(e)
    }
}
function inSort(e) {
  if (this.llena()) {
    console.log("La fila esta llena")
  } else {
    this.size.push(e)
  }
}
function outSort() {
  if (this.vacia()) {
    console.log("La fila esta vacia")
  }
  else {
    return this.size.shift()
  }
}
function ordena(x) {
  let steps = 0;
  for (let corrida = 1; corrida <= 5; corrida++) {
    var leico = Date.now(), enqueue = new fila(x), enqueue2 = new fila(x), numal, random, i = 1;

    numal = Math.floor(Math.random() * (x - 1) + 1)
    enqueue.input(numal)
    while (i < x) {
      random = Math.floor(Math.random() * (x - 1) + 1)
      while (enqueue.vacia() != true) {
        enqueue2.input(enqueue.out())
        steps++
      }
      while (random > enqueue2.peek()) {
        enqueue.input(enqueue2.out())
        steps++
      }
      if (enqueue2.vacia()) {
        enqueue.input(random)
        steps++
      }
      if (random <= enqueue2.peek()) {
        enqueue.input(random)
        steps++
      }
      while (enqueue2.vacia() != true) {
        enqueue.input(enqueue2.out())
      }
      i++
    }
    exute[corrida - 1] = steps;

    console.log(enqueue.imprimir())
    console.log("Los pasos de la corrida " + corrida + " de " + x + " numeros aleatorios son: " + steps)

    //metodo para tomar el tiempo que tarda en ejecutar
    var end = Date.now()
    taptop[corrida - 1] = end - leico

    console.log("El tiempo de la corrida " + corrida + " de " + x + " numeros aleatorios son: " + taptop[corrida - 1] + " ms")

    steps = 0 //metodo para tomar los pasos recorridos
  }
}
function fila() {
    this.size = []
    this.peek = peek
    this.out = out
    this.llena = llena
    this.vacia = vacia
    this.input = input
    this.inSort = inSort
    this.outSort = outSort
    this.imprimir = imprimir
}

ordena(10)
exute[5] = (exute[0] + exute[1] + exute[2] + exute[3] + exute[4]) / (5)
taptop[5] = (taptop[0] + taptop[1] + taptop[2] + taptop[3] + taptop[4]) / (5)
console.log("El promedio de pasos es: " + exute[5])
console.log("El promedio de tiempo es: " + taptop[5] + " ms")

ordena(100)
exute[5] = (exute[0] + exute[1] + exute[2] + exute[3] + exute[4]) / (5)
taptop[5] = (taptop[0] + taptop[1] + taptop[2] + taptop[3] + taptop[4]) / (5)
console.log("El promedio de pasos es: " + exute[5])
console.log("El promedio de tiempo es: " + taptop[5] + " ms")

ordena(1000)
exute[5] = (exute[0] + exute[1] + exute[2] + exute[3] + exute[4]) / (5)
taptop[5] = (taptop[0] + taptop[1] + taptop[2] + taptop[3] + taptop[4]) / (5)
console.log("El promedio de pasos es: " + exute[5])
console.log("El promedio de tiempo es: " + taptop[5] + " ms")
