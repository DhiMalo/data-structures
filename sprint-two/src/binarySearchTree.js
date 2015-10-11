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
  
};

binarySearchMethods.depthFirstLog = function(callback) {
  _.each(valuesInTree, callback)
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
binTree1 = BinarySearchTree(5)
binTree1.insert(2);
console.log('3 is smaller than', this.value, 'as expected?: ', 3<this.value)
binTree1.insert(3);
binTree1.insert(7);
binTree1.insert(6);
console.log(binTree1);
console.log(binTree1.left.right.value)//3
console.log(binTree1.right.left.value)//6