let object = {
  a: "hund", b: "katze", c: "maus", d: "elefant", e: "schlange", f: "stachelschwein", g: "affe", h: "giraffe"
}

function addObjectElement(key, value) {
  let objectCopy = Object.assign({}, object)
  // TODO: implement me

  let newKey = key;

  while(newKey in objectCopy){
    let i = 1;
    newKey = key + "_" + i;
  }

  objectCopy[newKey] = value;

  return objectCopy;
}

function getObjectElements(keys) {
  let result = [];

  for(let i = 0; i < keys.length; i++){
    if(keys[i] in object){
      result[i] = object[keys[i]];
    }else{
      result[i] = "not found";
    }
  }

  return result;
}

function deleteObjectElements(keys) {
  let objectCopy = Object.assign({}, object)
  // TODO: implement me

  for (let i = 0; i < keys.length; i++){
    if(keys[i] in objectCopy){
      // TODO: Delete
      delete objectCopy[keys[i]]
    }
  }
  return objectCopy;
}