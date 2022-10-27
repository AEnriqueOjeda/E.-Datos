import { Linked, Node } from '../../../../aeob/linked/node5es.js'

let n1 = new Node('a')
let n2 = new Node('b')

let l = new Linked(n1)

l.prepend(n2)
l.append(new Node(3))
l.prepend(new Node('d'))
l.traverse(l.getHead())
//probar el contain
//l.contains('a')
//l.contains(2)
//Obtener la cola
console.log(l.getTail())
console.log(l.contains('d'))