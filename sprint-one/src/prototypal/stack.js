var Stack = function() {
  var someInstance = Object.create(stackMethods); // Whisper whisper, JS compiler: I'm going to create you a nice model!  It's whatever I pass into Object.create!
  someInstance.index = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {}; //test suite wants to use the phrase stackMethods instead of something like Stack.prototype. Updated.

stackMethods.push = function(value) {
    this.storage[this.index] = value;
    this.index++;
  };

stackMethods.pop = function() {
    if (this.index > 0) {
    var popped = this.storage[this.index-1];
    delete this.storage[this.index-1];
    this.index--;}
    return popped;
  };

stackMethods.size = function() {
  return this.index;
};
