/*
 * Time complexity assessment: 
 .addNode is Constant Time.
 .contains and .removeNode have a Linear Time complexity.
 .hasEdge is TBD.
 */
var Graph = function(value) {
  this.value = value;
  this.edge = []; // every part of a graph has 2 attributes: value and edge.  It can have more than one edge.
};

// .addNode is a method that takes a new node and adds it to the graph.

Graph.prototype.addNode = function(node) {
  var newNode = new Graph(node);
  this.edge.push(newNode); 
};

// The .contains method takes any node and returns a boolean reflecting whether it can be found in the graph.

Graph.prototype.contains = function(node) {
  var boolResult = false;
  for (var i = 0; i < this.edge.length; i++) { //iterate through the graph to see if it contains the node value
    if (this.edge[i].value === node) {
      boolResult = true;
    };
  };
  return boolResult;
};

// .removeNode is a method that takes any node and removes it from the graph, if present. All edges connected to that Node are removed as well.

Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.edge.length; i++) {
    if (this.edge[i].value === node) {
      delete this.edge[i].value;
      // could probably also use splice here, but delete is clearer.
    };
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  //set a bool to false
  var bool = false;
  //iterate through toNode edges.  
    //if fromNode is in its EDGES Array then reset bool to TRUE!
  for (var i = 0; i < this.edge.length; i++) { //
    if (this.edge[i].value === toNode || this.edge[i].value === fromNode) { 
      bool = true;
    };
    //if toNode is in its EDGES Array then reset bool to TRUE!
  }
  return bool;
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var key in this) {
  console.log(this.key)}
  // toNode.edge.push(fromNode);
  // fromNode.edge.push(toNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode) {};

Graph.prototype.forEachNode = function(cb) {};

//implementation tests (remove at completion)
var graph = new Graph(5);
console.log('newly created graph is', graph);
graph.addNode('puppies');
graph.addNode('kittens');
graph.addNode('penguins');
console.log('after adding 3 nodes, graph is: ', graph);
graph.removeNode('puppies');
console.log('after removing a node, graph is: ', graph);
