// the global variable
var fixedValue = 4;

function incrementer () {
  // Add your code below this line
  let newValue = fixedValue;

  return newValue + 1;
  // Add your code above this line
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4
