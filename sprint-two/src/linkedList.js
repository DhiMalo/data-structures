var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail) { // if we've assigned a previous tail, then...
      list.tail['value'] = value; // re-set it to the input value.
    } else {  // if not, then.
      list.tail = {}; // set it to this cool little value storage object
      list.tail['value'] = value; // and pass the input value there. 
      list.head = {};  // Go ahead and set the head up to another storage object.
      list.head['value'] = list.tail['value']; // Set the head to the tail value
      //place the value inside there
    };
    return value;  
    // We now have: 
    // list = {
         // head : {value : someNumber}
         // tail : {value : someNumber};  // THESE ARE THE SAME NUMBER.  We have list of 2 things that is self-referencial - the arrow points to itself.
    // } 
  };

  list.removeHead = function() {
    var removed = list.head['value']; // Before removing it, we give the 'head' a name so can refer to (in line 28) what we removed.
    list.head['value'] = list.tail['value']; // We then assign the new value of 'head' to the old value of 'tail'
    list.tail['value'] = null; // ...and reset the tail to null.  
    return removed;
  };

  list.contains = function(target) {
    return (list.head['value'] === target || list.tail['value'] === target); // return bool : either the fact that list.head contains target or list.tail does.
  };

  return list;
};

var Node = function(value) {
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

 
// ASA: NB - To stay 'compact, safe, and predictable', and gain speed by 3 orders of magnitude, we can also use an Array structure. Using linked lists is often sub-optimal becuause it maximizes cache misses, according to this talk (https://www.youtube.com/watch?v=YQs6IC-vgmo) by Bjarne Stroustrup, creator of C++.
