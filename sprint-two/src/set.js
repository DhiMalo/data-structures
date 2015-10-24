/*
Time complexity assessment: 
setPrototype.add is Constant, .contains is Linear and .remove has a Quadratic time complexity.  
The setPrototype.remove has a time complexity of n^2 due to the _.indexOf function needing to traverse the array a second time after the for-loop has run.  In the worst case scenario this is n*n traversals.
*/

var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  var bool = false;
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      bool = true;
    };
  };
  return bool;
};

setPrototype.remove = function(item) {
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      var targetIndex = _.indexOf(item); // search for the target index.
      this._storage.splice(this._storage[targetIndex], 1); // use splice to remove just 1 item located at the target index. 
    };
  };
};
