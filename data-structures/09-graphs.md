# Graphs
1. Intro
2. Implementation of Graph
3. Add Vertex to Graph
4. Add Edges to Vertex
5. Get Vertices
6. Get Edges
7. Depth First Search Traversal
8. Breadth First Search Traversal
9. Summary

## Intro
**Edges** - Relationship between Entities  
**Vertices** - Entities or Nodes  
**Undirected Graphs** - Edges have 0 or 1 directions.   
**Directed Graphs** - Edges can have 0, 1 or 2 directions. 

## Implementation of Graph
```js
function Graph() {

  // Vertices to store nodes
  this.vertices = {};
  
  // Keep count of the vertices
  this.vertexCount = 0;

}
```

## Add Vertex to Graph
#### Algorithm:
1. Handle Edge Cases - If v is not a number or string OR v exists in vertices, return null
2. Add v to vertices obj and set value to empty obj
3. Increment vertexCount
#### Code:
```js
Graph.prototype.addVertex = function(v) {

  // Handle Edge Cases:
  // If v is not a number or string OR v exists in vertices, return null
  if (typeof v !== 'number' && typeof v !== 'string' || 
      this.vertices.hasOwnProperty(v)) return null;

  // Add v to vertices obj and set value to empty object
  this.vertices[v] = {};

  // Increment vertexCount
  this.vertexCount++;
}
```

## Adding Edges to a Vertex
#### Algorithm:
1. If vertex does not exist, throw error
2. Set edgesObj variable to value of v in vertices
3. Iterate through edges  
   Check to see if v exists in vertices, if so, cannot add edge to self.  
   Add Edge
#### Code:
```js
Graph.prototype.addEdges = function(v, edges) {

  // If vertex does not exist, throw error
  if (!this.vertices.hasOwnProperty(v)) throw 'Vertex not found';

  // Edges object is the value of v
  let edgesObj = this.vertices[v];

  // Iterate through edges
  for (let i = 0; i < edges.length; i++) {
    let edge = edges[i];

    // Check to see if v exists in vertices, if so, cannot add edge to self
    if (this.vertices.hasOwnProperty(v)) 
      throw 'Invalid vertex cannot be added as edge';

    // Add edge
    edgesObj[edge] = true;
  }
}
```

## Get Vertices
#### Algorithm:
1. If vertex does not exist, throw error
2. Set edgesObj variable to value of v in vertices
3. Iterate through edges  
   Check to see if v exists in vertices, if so, cannot add edge to self.  
   Add Edge
#### Code:
```js
Graph.prototype.getVertices = function() {

  // Assign all vertices to empty array
  let allVertices = [];

  // Iterate through all items in vertices and push them to all vertices
  for (let v in this.vertices) allVertices.push(v);

  // Return all vertices
  return allVertices;
}
```
## Get Edges
#### Algorithm:
1. If v is not inside vertices object, throw error
2. Set edgesObj variable to vertices object w/ index v
3. Iterate through edges obj and add them to edges array
4. Return edges array
#### Code:
```js
Graph.prototype.getEdges = function(v) {

  // If v is not inside vertices object, throw error
  if (!this.vertices.hasOwnProperty(v)) throw 'Vertex not found';

  // set edgesObj variable to vertices object w/ index v
  let edgesObj = this.vertices[v];

  let edges = [];

  // Iterate through edges obj and add them to edges array
  for (let e in edgesObj) edges.push(e);

  // Return edges array
  return edges;
}
```
## Depth First Search Traversal
#### Algorithm:
1. Get all vertices from graph
2. If vertices is empty, just return
3. Populate all vertices visited to false
4. Implement DFS taking in vertex  
   Set visited[vertex] to true  
   Get all edges from graph  
   Iterate through all edges and recursively call DFSImpl if not yet visited
5. Start DFS by iterating through vertices, if vertices has not yet been visited, call DFSImpl
#### Code:
```js
const DFS = function(graph) {

  //  get all vertices from graph
  let vertices = graph.getVertices();

  // if vertices is empty, just return
  if (vertices.length === 0) return;

  // populate all vertices visited to false
  let visited = {};
  for (let i = 0; i < vertices.length; i++) {
    visited[vertices[i]] = false;
  }

  // Implement DFS
  function DFSImpl(v) {

    // Set visited to true
    visited[v] = true;

    // Get all edges
    let edges = graph.getEdges(v);

    // Go through all edges, and recursively call DFS if not yet visited
    for (let j = 0; j < edges.length; j++) {
      let edge = edges[j];
      if (!visited[edge]) 
        DFSImpl(edge);
    }
  }

  // Start DFS
  for (let i = 0; i < vertices.length; i++) {
    let vertex = vertices[i];
    if (!visited[vertex]) DFSImpl(vertex);
  }

}
```
## Breadth First Search Traversal
#### Algorithm:
1. Get all vertices from graph
2. If vertices is empty, just return
3. Populate all vertices visited to false
4. Implement DFS taking in vertex
   Set visited to true  
   Get all edges  
   Iterate through all edges and recursively call DFSImpl if not yet visited
5. Start DFS by iterating through vertices, if vertices has not yet been visited, call DFSImpl
#### Code:
```js
const BFS = function(graph) {
  let vertices = graph.getVertices();
  if (vertices.length === 0) return;

  let visited = {};
  for (let i = 0; i < vertices.length; i++) {
    visited[vertices[i]] = false;
  }

  let queue = [];
  let startV = vertices[0];
  queue.push(startV);
  visited[startV] = true;

  while (queue.length > 0) {
    let v = queue.shift();
    let edges = graph.getEdges(v);

    for (let i = 0; i < edges.length; i++) {
      let e = edges[i];
      if (!visited[e]) {
        queue.push(e);
        visited[e] = true;
      }
    }
  }
}
```
## Summary
1. A graph is a set of vertices and edges.
2. Graphs can be represented using either adjacency matrices or adjacency list. 
3. Lookups are fast in adjacency matrices but adjacency lists take up less space in memory.
4. Two most common algorithms to traverse the graph are called Depth First Search (DFS) and Breadth First Search (BFS).
