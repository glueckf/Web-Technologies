let array = ["hund", "katze", "maus", "elefant", "schlange", "stachelschwein", "affe", "giraffe"];

function addArrayElement(element) {
  let arrayCopy = [...array];
  if (arrayCopy.includes(element)){
    return arrayCopy;
  }
  arrayCopy.push(element);
  return arrayCopy;
}

function getArrayElements(number, startIndex) {
  let result = [];
  if (!array || array.length === 0 || number <= 0){
    return result;
  }

  let normalizedIndex = startIndex % array.length

  let i = normalizedIndex;
  while (i < array.length && i < normalizedIndex + number){
    result.push(array[i]);
    i++;
  }

  return result;

}

function deleteArrayElements(number, startIndex, everyIth) {
  let arrayCopy = []
  let removedItems = []
  if(!array || array.length === 0 || number <= 0){
    return {
      newResult: arrayCopy,
      removedItems: removedItems
    }
  }

  let normalizedIndex = startIndex % (array.length - 1)

  let i = normalizedIndex;
  while (i < array.length && i < (normalizedIndex + number)){
    arrayCopy.push(array[i]);
    i++;
  }

  for(let i = 0; i < arrayCopy.length; i += everyIth){
    removedItems.push(arrayCopy[i])
    arrayCopy[i] = null
  }

  return {
    newResult: arrayCopy,
    removedItems: removedItems
  };  
}