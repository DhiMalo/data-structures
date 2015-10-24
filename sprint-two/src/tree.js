/* Time complexity assessment:
The treeMethods.addChild function has Constant time complexity, O(1)
The .contains function has a linear time complexity, O(n). Potential to iterate on this by using an object instead of an array for child storage and might be interesting to return to later.
*/
// Tree implementation using a functional-shared method.
var Tree = function(value) { // Always pass in a tree value at instantiation time.
  var newTree = {};
  newTree.value = value;
  newTree.children = []; // an array that will contain a number of sub-trees
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  return newTree;
};

var treeMethods = {};

//takes any value, sets that as the target of a node, and adds that node as a child of the tree

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
  return this.children;
};

//The .contains method takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node.

treeMethods.contains = function(target) {
  var resultBool = false;
  if (this.value === target) {
    resultBool = true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        resultBool = true;
      };
    };
  };
  return resultBool;
};