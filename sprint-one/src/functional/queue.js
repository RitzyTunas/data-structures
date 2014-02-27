var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  
  // Keep track of storage size
  //var size = 0;
  var start = -1;
  var end = -1;

  // Implement the methods below

  instance.enqueue = function(value){
    end++;
    storage[end] = value;
  };

  instance.dequeue = function(){
    if (instance.size()) {
      start++
    }  
    var result = storage[start];
    delete storage[start];
    return result; 
  };

  instance.size = function(){
    return end - start;
  };

  return instance;
};


/* Original Solution
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

    //return size;  
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
*/
