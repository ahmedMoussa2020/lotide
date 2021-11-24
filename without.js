const without = function(array, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (array[i] === itemsToRemove[x]) {
        break;
      }
      if (itemsToRemove.length - 1 === x) {
        newArray.push(array[i]);
      }
    }
  }
  return newArray;
};

module.exports = without;