//building an undirectional graph

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  //add new vertex
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  //this is an undirected graph
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2); //find key of v1 and add v2 to v1 array
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    let v1Index = this.adjacencyList[v1].indexOf(v2);
    let v2Index = this.adjacencyList[v2].indexOf(v1);
    if (v1Index > -1) this.adjacencyList[v1].splice(v1Index, 1);
    if (v2Index > -1) this.adjacencyList[v2].splice(v2Index, 1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacencyVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacencyVertex);
    }

    delete this.adjacencyList[vertex];
  }
}

const g = new Graph();

g.addVertex("Japan");
g.addVertex("Vietnam");
g.addVertex("USA");

g.addEdge("Japan", "Vietnam");
g.addEdge("Japan", "USA");
g.addEdge("USA", "Vietnam");

// g.removeEdge("Japan", "Vietnam");

g.removeVertex("Vietnam");
console.log(g.adjacencyList);
