var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var index = getIndexBelowMaxForKey(key, this._limit); //this runs hashing func
  //now I can pass that integer around
  var bucket = this._storage.get(index);

  if(bucket === undefined) {
      bucket = [];
      this._storage.set(index, bucket);
  }

  var bool = false;

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket [i];
    if (tuple[0] === key) {
      tuple[1] = value;
      bool = true;
      break;
    };
  };

  if (bool = false) {
    bucket.push(key, value);
  }

  var newLimitedArray = new LimitedArray;
  return new LimitedArray
};

HashTable.prototype.retrieve = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);//this runs hashing func

var bucket = this._storage.get(index);

  if(bucket === undefined) {
    return null;
  }

  var bool = false;

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket [i];
    if (tuple[0] === key) {
      return tuple[1];
    };
  };
  return null;
};

HashTable.prototype.remove = function(key){
   var index = getIndexBelowMaxForKey(key, this._limit);//this runs hashing func

var bucket = this._storage.get(index);
if (bucket === undefined) {
  return null;
};

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket [i];
    if (tuple[0] === key) {
      bucket.splice(i, 1);
      return tuple[1];
      break;
    };
  };
  return null;

};

hash1 = new HashTable;
console.log('hash1 sample is : ', hash1);
hash1.insert('Steven', 'Seagal');
console.log('after insertion, hash1 sample is : ', hash1);
console.log('here I am');

/*
 * Complexity: What is the time complexity of the above functions?
 */

 //a bucket stores multiple tupols and a tupol stores multiple key/value pairs
    //within that tupol, posotion 2 is always the key and position 1 is always the value.
