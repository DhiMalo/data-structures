// ![Tree image]

// * A `tree` class, in functional with shared methods style, with the following
//   properties:
//   - [X] `.children` property, an array containing a number of subtrees
//   - [X] `.addChild()` method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
//   - [X] A `.contains()` method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
//   - [X] What is the time complexity of the above functions?  The .addChild function has a constant (or O(1) time complexity, whereas the .contains function currently has a linear time complexity (O(n)). I might be able to change this by using an object instead of an array for child storage, which might be something to return to.

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];  // fixed
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

//Remember: If invoking the constructor, always pass arguments for the params!!!!!

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
  return this.children;
};

treeMethods.contains = function(target){
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

/*
 * Complexity: What is the time complexity of the above functions?
 */
