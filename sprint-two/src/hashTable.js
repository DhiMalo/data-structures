var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

};

HashTable.prototype.remove = function(k){

};

hash1 = new HashTable;
console.log('hash1 sample is : ', hash1);
hash1.insert('Steven', 'Seagal');
console.log('after insertion, hash1 sample is : ', hash1);


/*
 * Complexity: What is the time complexity of the above functions?
 */
