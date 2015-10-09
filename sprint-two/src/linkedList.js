var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){ // thought I needed thisses but I didn't.
    if(list.tail) { //if we've assigned a previous tail, then...
      list.head = {};
      list.tail; //set the head to the tail value
      list.tail['value'] = value;
    } else {
      list.tail = {}; //create this cool little value storage device
      list.tail['value'] = value; //place the value inside there
    }
    return value;
  };

  list.removeHead = function(){
    list.head = list.tail['value'];
    //list.head = list.tail;
  };

  list.contains = function(target){
    //return (list.head === target || list.tail === target); // return bool
  };

  return list;
};
var linkedList1 = LinkedList();
linkedList1.addToTail(4);
//linkedList1.addToTail(5);
//linkedList1.removeHead();
console.log('linkedList1 is: ', linkedList1)

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
var node1 = Node();
console.log('node1 is: ' ,node1);

/*
 * Complexity: What is the time complexity of the above functions?
 */
