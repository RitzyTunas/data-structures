var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  
  // Keep track of storage size
  var size = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    size++;
    storage[size-1] = value;
  };

  instance.dequeue = function(){
    if (size !== 0) {
      var item = storage[size-1];
      delete storage[size-1];
      size--;
    }
    return item;  
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
