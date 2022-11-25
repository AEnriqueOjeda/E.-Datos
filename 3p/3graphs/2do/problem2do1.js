//
// your undirected graph solution here
//
//Marcial Vazquez Luis Oswaldo
//Moran Hernández Carlos Antonio
//Ojeda Bejarano Angel Enrique
//Vega puentes Óscar Antonio
//Vizcaino Lupian Alejandro

import { grafo } from '../../../aeob/linked/graphs/1.js'

let graph = new grafo(5)
graph.addEdge(1, 2)
graph.addEdge(1, 3);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 5);

graph.showGraph()

graph.dfs(0)