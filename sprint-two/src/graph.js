
//Previously passed with 5 of 6 tests.
//However, additional implementation notes are below.  Come back and fix these when you have time. 

var Graph = function(value) {
  this.value = value;
  this.friends = []; //I actually want to add the friends array to each node, not each graph.
};

Graph.prototype.addNode = function(node) {
  var newNode = new Node(node); // So each of these newNodes needs to have a friends array (not a 'next' key like in linkedList)
  //should create a node with value of the 'Graph'(value) above, and an empty friends array.
  this.friends.push(newNode); //Use a nodesArray instead of a friends array?
};

Graph.prototype.contains = function(node) {
  var boolResult = false;
  for (var i = 0; i < this.friends.length; i++) { //iterate through the graph to see if it contains the node value
    if (this.friends[i].value === node) { //continue on same premise here
      boolResult = true;
    };
  };
  return boolResult;
};

Graph.prototype.removeNode = function(node){
  for (var i = 0; i < this.friends.length; i++) { //remove from nodesArray instead of friends array.
    if (this.friends[i].value === node) {
      delete this.friends[i].value; //continue on same premise here
    };
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  //set a bool to false
  //iterate through fromNode edges!
  //if toNode is in its EDGES Array then reset bool to TRUE!
  //iterate through toNode edges.  
  //if fromNode is in its EDGES Array then reset bool to TRUE!
  //return bool.

  var bool = false;
  for (var i = 0; i < this.edge.length; i++) { //already started changing this. Needs to make a edges array in each node, though.
    if (this.edges[i].value === fromNode || this.edges[i].value === toNode) { //Will depend on edges Array creation.  
      bool = true;
    };
  };
  return bool;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  //push fromNode into toNode's friends Array.
  //push toNode into fromNode's friends Array.

};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

//implementation tests (remove at completion)
// var newGraph = new Graph('flowers');
// console.log(newGraph);
// newGraph.addNode('puppies');
// newGraph.addNode('kittens');
// newGraph.addNode('penguins');
// console.log('after adding 3 nodes, newGraph is: ', newGraph);
// newGraph.removeNode('puppies');
// console.log('after removing a node, newGraph is: ', newGraph);



/*
 * Complexity: What is the time complexity of the above functions?
 */



