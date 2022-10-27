/** 
 *
 * your solution here
 *
 */
import { Linked, Node } from '../../../../aeob/linked/node5es.js'
let n1 = new Node('a')
let n2 = new Node('b')

let l = new Linked(n1)
l.append(n2)
l.append(new Node('c'))
l.traverse(l.getHead())
l.InsertAfter('b', new Node('e'))
l.traverse(l.getHead())

l.InsertBefore('b', new Node('f'))
l.traverse(l.getHead())