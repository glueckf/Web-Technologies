let array = ["hund", "katze", "maus", "elefant", "schlange", "stachelschwein", "affe", "giraffe"];

function addArrayElement(element) {
  let arrayCopy = [...array];
  // TODO: implement me
  return arrayCopy;
}

function getArrayElements(number, startIndex) {
  let result = [];
  // TODO: implement me
  return result;
}

function deleteArrayElements(number, startIndex, everyIth) {
  let arrayCopy = [...array];
  let removedItems = [];
  // TODO: implement me
  return {
    newResult: arrayCopy,
    removedItems: removedItems
  };  
}