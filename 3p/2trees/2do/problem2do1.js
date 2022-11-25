//
// your binary tree solution here
//

//Marcial Vazquez Luis Oswaldo
//Moran Hernández Carlos Antonio
//Ojeda Bejarano Angel Enrique
//Vega puentes Óscar Antonio
//Vizcaino Lupian Alejandro

import { Arbol, Hoja } from '../../../aeob/linked/trees/1.js'

let tree = new Arbol(), sheet = new Hoja(1)

tree.Insert(sheet, 1, new Hoja(2))
tree.Insert(sheet, 1, new Hoja(3))
tree.Insert(sheet, 2, new Hoja(4))
tree.Insert(sheet, 2, new Hoja(5))
tree.Insert(sheet, 2, new Hoja(6))
tree.remove(sheet, 5)
tree.traverse(sheet)
tree.search(sheet, 2)