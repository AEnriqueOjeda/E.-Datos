//
// your solution here
//
// pick one:
// digraph
// dfs on an undirected graph
// bfs on an undirected graph
//
//Marcial Vazquez Luis Oswaldo
//Moran Hernández Carlos Antonio
//Ojeda Bejarano Angel Enrique
//Vega puentes Óscar Antonio
//Vizcaino Lupian Alejandro

import { grafo } from '../../../aeob/linked/graphs/2.js'

var graph = new grafo(5)
graph.addEdge(1, 2)
graph.addEdge(1, 3);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 5);

graph.showGraph()

graph.dfs(0)