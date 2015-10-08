var Queue = function(){
  var beautifulNewObj = {};
  var index = 0;
  var storage = {};
  beautifulNewObj.enqueue = queueMethods.enqueue;
  beautifulNewObj.dequeue = queueMethods.dequeue;
  beautifulNewObj.size = queueMethods.size;
  // // _.extend(beautifulNewObj, queueMethods);
  console.log('beautifulNewObj.enqueue is', beautifulNewObj.enqueue);
  return beautifulNewObj;
};

var queueMethods = {};
queueMethods.enqueue = function(){
  storage[index] = value;
  index++;
};
queueMethods.dequeue = function(){
  if (index > 0) {
    var shifted = storage[0];
    storage[0] = storage[1];
    index--;
  }
};
queueMethods.size = function(){
  return index; 
};

var lilqueue = Queue();
console.log('lilqueue is', lilqueue);


