var Queue = function(){
  var someInstance = {};
  someInstance.index = 0;
  someInstance.storage = {};
  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;
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



