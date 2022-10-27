/** 
 *
 * your solution here
 *
 */
import { Linked, Node } from '../../../../aeob/linked/node5es.js'

var nodo1 = new Node('1'), nodo2 = new Node('2'), listEnl = new Linked(nodo1)

listEnl.append(nodo2)
listEnl.append(new Node('3'))
//traverse
listEnl.traverse(listEnl.getHead())
//After
listEnl.InsertAfter('2', new Node('5'))
listEnl.traverse(listEnl.getHead())
//before
listEnl.InsertBefore('2', new Node('6'))
listEnl.traverse(listEnl.getHead())