

var Graph = function(value) {
  this.value = value;
  this.friends = [];
};

Graph.prototype.addNode = function(node) {
  var newNode = new Node(node);
  this.friends.push(newNode);
};

Graph.prototype.contains = function(node) {
  var boolResult = false;
  for (var i = 0; i < this.friends.length; i++) {
    if (this.friends[i].value === node) {
      boolResult = true;
    };
  };
  return boolResult;
};

Graph.prototype.removeNode = function(node){
  for (var i = 0; i < this.friends.length; i++) {
    if (this.friends[i].value === node) {
      delete this.friends[i].value;
    };
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  //set a bool to false
  //iterate through fromNode friends.  
  //if toNode is in its Friends Array then reset bool to TRUE!
  //iterate through toNode friends.  
  //if fromNode is in its Friends Array then reset bool to TRUE!
  //return bool.

  var bool = false;
  for (var i = 0; i < this.friends.length; i++) {
    if (this.friends[i].value === fromNode || this.friends[i].value === toNode) {
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

var newGraph = new Graph('flowers');
console.log(newGraph);
newGraph.addNode('puppies');
newGraph.addNode('kittens');
newGraph.addNode('penguins');
console.log('after adding 3 nodes, newGraph is: ', newGraph);
newGraph.removeNode('puppies');
console.log('after removing a node, newGraph is: ', newGraph);



/*
 * Complexity: What is the time complexity of the above functions?
 */



