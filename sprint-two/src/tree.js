// ![Tree image]

// * A `tree` class, in functional with shared methods style, with the following
//   properties:
//   - [ ] `.children` property, an array containing a number of subtrees
//   - [ ] `.addChild()` method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
//   - [ ] A `.contains()` method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
//   - [ ] What is the time complexity of the above functions?

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
  console.log(this.children);
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
