var Queue = function(){
  var someInstance = {};
  someInstance.index = 0;
  someInstance.storage = {};
  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;
  // // _.extend(someInstance, queueMethods);
  //console.log('someInstance.enqueue is', someInstance.enqueue);
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.index] = value;
  this.index++;
};

queueMethods.dequeue = function(){
  if (this.index > 0) {
    var shifted = this.storage[0];
    this.storage[0] = this.storage[1];
    this.index--;
  }
  return shifted; 
};

queueMethods.size = function(){
  return this.index; 
};

var lilFuncSharedQueue = Queue();
lilFuncSharedQueue.enqueue('a');
lilFuncSharedQueue.enqueue('b');
console.log ('size of lilFuncSharedQueue is', lilFuncSharedQueue.size())
console.log('lilFuncSharedQueue is', lilFuncSharedQueue);


