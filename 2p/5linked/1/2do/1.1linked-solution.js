import { Linked, Node } from '../../../../aeob/linked/node5es.js'

var nodo1 = new Node('1')
var nodo2 = new Node('2')

var listEnl = new Linked(nodo1)

listEnl.prepend(nodo2)
listEnl.append(new Node(3))
listEnl.prepend(new Node('4'))
listEnl.traverse(listEnl.getHead())
//listEnl.contains(2)
console.log(listEnl.getTail())
//encntrar elemento -->
console.log(listEnl.contains('4'))