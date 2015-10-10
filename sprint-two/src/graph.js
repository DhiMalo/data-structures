

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
    if(this.friends[i].value === node) {
      boolResult = true;
    };
  };
  return boolResult;
};

Graph.prototype.removeNode = function(node){
  for (var i = 0; i < this.friends.length; i++) {
    if (this.friends[i] === node) {
      delete node;
    };
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
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


/*
 * Complexity: What is the time complexity of the above functions?
 */



