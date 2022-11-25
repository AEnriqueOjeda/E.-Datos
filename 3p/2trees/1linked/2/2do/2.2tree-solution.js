function Node(o) { //comenzando por izquierda
  this.d = o
  this.l = null
  this.r = null
}
function preorder(n) { //comenzando por izquierda
  if (n) {
    console.log(n.d) //imprimimos al de llegar
    preorder(n.l)
    preorder(n.r)
  }
}
function inorder(n) { //comenzando por izquierda
  if (n) {
    preorder(n.l)
    console.log(n.d) //imprimimos entre la llegada
    preorder(n.r)
  }
}
function posorder(n) { //comenzando por izquierda
  if (n) {
    preorder(n.l)
    preorder(n.r)
    console.log(n.d) //imprimimos al salir
  }
}

function preorder_D(n) { //comenzando por derecha
  if (n) {
    console.log(n.d) //imprimimos al de llegar
    preorder(n.r)
    preorder(n.l)
  }
}
function inorder_D(n) { // comenzando por derecha
  if (n) {
    preorder(n.r)
    console.log(n.d) //imprimimos entre la llegada
    preorder(n.l)
  }
}
function posorder_D(n) { // comenzando por derecha
  if (n) {
    preorder(n.r)
    preorder(n.l)
    console.log(n.d) //imprimimos al salir
  }
}

let p = new Node('+')
let o1 = new Node(3)
let o2 = new Node('/')
p.l = o1;
p.r = o2;
let q1 = new Node(2)
let q2 = new Node(7)
o2.l = new Node(2)
o2.r = new Node(7)

preorder(p)
inorder(p)
posorder(p)