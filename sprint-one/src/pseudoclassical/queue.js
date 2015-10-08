var Queue = function() {
  this.index = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
  this.storage[this.index] = value;
  this.index++;
};

Queue.prototype.dequeue = function(){
  if (this.index > 0) {
    var shifted = this.storage[0];
    this.storage[0] = this.storage[1];
    this.index--;
  }
  return shifted; 
};

Queue.prototype.size = function(){
  return this.index; 
};