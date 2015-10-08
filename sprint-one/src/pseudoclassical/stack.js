var Stack = function() {
this.index = 0;
this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

Stack.prototype.pop = function() {
   if (this.index > 0) {
    var popped = this.storage[this.index-1];
    delete this.storage[this.index-1];
    this.index--;}
    return popped;
};

Stack.prototype.size = function() {
  return this.index;
};

