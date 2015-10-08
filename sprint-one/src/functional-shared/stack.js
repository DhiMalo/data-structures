var Stack = function() {
  var someInstance = {};
  someInstance.index = 0;
  someInstance.storage = {};
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value){
    this.storage[this.index] = value;
    this.index++;
  };

stackMethods.pop = function(){
    if (this.index > 0) {
    var popped = this.storage[this.index-1];
    delete this.storage[this.index-1];
    this.index--;}
    return popped;
  };

stackMethods.size = function(){
    return this.index;
}
