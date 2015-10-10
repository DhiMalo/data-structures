var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [] //added array for storage
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage.push(item); //pushed item into array
};

setPrototype.contains = function(item){
  var bool = false;
  for (var i = 0; i < this._storage.length; i++) {
    if (i === item) {
      bool = true;
    };
  };
  return bool;
};

setPrototype.remove = function(item){
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
