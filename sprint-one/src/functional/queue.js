var Queue = function(){
  var someInstance = {};
  var index = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[index] = value;
    index++;
  };

  someInstance.dequeue = function(){ 
    if(index > 0) {
      var shifted = storage[0];
      //console.log('shifted is', shifted,'and storage is',storage);
      storage[0] = storage[1];
      // storage [1] = storage[2]
      index--;
    };
    return shifted;
  };

  someInstance.size = function(){
    return index;
  };

  return someInstance;
};
