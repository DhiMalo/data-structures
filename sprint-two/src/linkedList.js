var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){ // thought I needed thisses but I didn't.
    if(list.tail) { //if we've assigned a previous tail, then...
      list.tail['value'] = value;
    } else {
      list.tail = {}; //create this cool little value storage device
      list.tail['value'] = value;
      list.head = {};
      list.head['value'] = list.tail['value']; //set the head to the tail value
       //place the value inside there
    };
    return value;
  };

  list.removeHead = function(){
    var removed = list.head['value']; 
    list.head['value'] = list.tail['value'];
    list.tail['value'] = null;
    return removed;
  };

  list.contains = function(target){
    return (list.head['value'] === target || list.tail['value'] === target); // return bool
  };

  return list;
};

// var linkedList1 = LinkedList();
// linkedList1.addToTail(4);
// linkedList1.removeHead();
// console.log('linkedList1 is: ', linkedList1)

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

// var node1 = Node();
// console.log('node1 is: ' ,node1);

/*
 * Complexity: What is the time complexity of the above functions?
 */
