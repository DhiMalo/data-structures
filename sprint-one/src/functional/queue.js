var Queue = function() {
  var someInstance = {};
  var index = 0;
  var storage = {};

  someInstance.enqueue = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.dequeue = function() { 
    if(index > 0) {
      var shifted = storage[0];
      storage[0] = storage[1];
      index--;
    };
    return shifted;
  };

  someInstance.size = function() {
    return index;
  };

  return someInstance;
};