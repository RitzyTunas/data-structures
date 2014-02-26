var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  
  // Keep track of storage size
  var size = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[size++] = value;
  };

  instance.dequeue = function(){
    if (size !== 0) {
      var item = storage[0];

      for (var i=0; i < size; i++){
        storage[i] = storage[i+1]; 
        delete storage[i+1];
      }
      size--;
      return item;
    }

    return size;  
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
