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
  let arrayCopy = [...array]
  let removedItems = []

  let normalizedIndex = startIndex % arrayCopy.length

  for (let i = 0; i < number; i++){

    if (i >= arrayCopy.length ||normalizedIndex >= arrayCopy.length){
      continue;
    }

    if(i % everyIth === 0){
      removedItems.push(arrayCopy[normalizedIndex])
      arrayCopy[normalizedIndex] = null
    }

    normalizedIndex++
  }

  return {
    newResult: arrayCopy,
    removedItems: removedItems
  };  
}