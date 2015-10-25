var BinarySearchTree = function(value) {
  var binTree = Object.create(binarySearchMethods);
  binTree.right = Object.create(binarySearchMethods);
  binTree.left = Object.create(binarySearchMethods);
  binTree.value = value;
  return binTree;
};

var binarySearchMethods = {};

binarySearchMethods.insert = function(value) {
  //return new object and pass in a new instantiation with the new value
  if (value > this.value && !this.right.value) {
    this.right = BinarySearchTree(value);
  };
  if (value > this.value && this.right.value) {
    if (value > this.right.value) {
      this.right.right = BinarySearchTree(value);
    } else {
      this.right.left = BinarySearchTree(value);
    };
  };
  if (value < this.value && !this.left.value) {
    this.left = BinarySearchTree(value);
  }
  if (value < this.value && this.left.value) {
    if (value < this.left.value) {
      this.left.left = BinarySearchTree(value);
    } else {
      this.left.right = BinarySearchTree(value);
    }
  };
};

binarySearchMethods.contains = function(value) {

  var bool = false;

  if (value === this.value) {
    bool = true;
  }; //if they're equal, it's the head of the tree

  if (value > this.value) { //if val is greater than tree val
    // conduct a recursive check for it on the right-sided branch.
    if (this.right.contains(value)){
      bool = true;
    };
  };

  if (value < this.value) { // check left if val is less
    // conduct a recursive check for it on the left-sided branch.
    if (this.left.contains(value)){
      bool = true;
    };
  };

  return bool;

};

binarySearchMethods.depthFirstLog = function(callback) {
  //evaluate whether there is a deeper level.
 
  if ((!this.right.value) && (!this.left.value)) {
    callback(this.value);
  } else {

    if (this.right.value) {
      callback(this.right.value);
    };

    if (this.left.value) {
      callback(this.left.value);
    };
  };

    this.right.depthFirstLog;
    this.left.depthFirstLog;

  // this.value.depthFirstLog;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
binTree1 = BinarySearchTree(5)
binTree1.insert(2);
binTree1.insert(3);
binTree1.insert(7);
console.log(binTree1);
console.log(binTree1.contains(7))
console.log(binTree1.contains(8))