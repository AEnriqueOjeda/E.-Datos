//
// your solution here
//
// pick one:
// binary search tree

//optional

//Marcial Vazquez Luis Oswaldo
//Moran Hernández Carlos Antonio
//Ojeda Bejarano Angel Enrique
//Vega puentes Óscar Antonio
//Vizcaino Lupian Alejandro

import { Arbol, Hoja } from '../../../aeob/linked/trees/2.js'

let tree = new Arbol();
let sheet = new Hoja(10);

tree.Insert(sheet, 10, new Hoja(5));
tree.Insert(sheet, 10, new Hoja(15));
tree.Insert(sheet, 5, new Hoja(9));
tree.Insert(sheet, 5, new Hoja(4));
tree.traverse(sheet)