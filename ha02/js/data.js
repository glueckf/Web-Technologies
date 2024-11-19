//DO NOT TOUCH!!!
var data = [
  { id: "a01-01", cmd: "multiply(17, 13)", expected: "221" },
  { id: "a01-02", cmd: "multiply(17)", expected: "17" },
  { id: "a01-03", cmd: "multiplyAll(17)", expected: "17" },
  { id: "a01-04", cmd: "multiplyAll(17, 13)", expected: "221" },
  { id: "a01-05", cmd: "multiplyAll(17, 13, 23, 37, 43)", expected: "8087053" },

  { id: "a02-01", cmd: "addArrayElement('giraffe')", expected: ["hund", "katze", "maus", "elefant", "schlange", "stachelschwein", "affe", "giraffe"] },
  { id: "a02-02", cmd: "addArrayElement('tiger')", expected: ["hund", "katze", "maus", "elefant", "schlange", "stachelschwein", "affe", "giraffe", "tiger"] },
  { id: "a02-03", cmd: "getArrayElements(3, 2)", expected: ["maus", "elefant", "schlange"] },
  { id: "a02-04", cmd: "getArrayElements(100, 2)", expected: ["maus", "elefant", "schlange", "stachelschwein", "affe", "giraffe"] },
  { id: "a02-05", cmd: "getArrayElements(2, 113)", expected: ["katze", "maus"] },
  { id: "a02-06", cmd: "deleteArrayElements(6, 0, 2)", expected: { "newResult": [null, "katze", null, "elefant", null, "stachelschwein", "affe", "giraffe"], "removedItems": ["hund", "maus", "schlange"] } },
  { id: "a02-07", cmd: "deleteArrayElements(5, 7, 13)", expected: { "newResult": ["hund", "katze", "maus", "elefant", "schlange", "stachelschwein", "affe", null], "removedItems": ["giraffe"] } },
  { id: "a02-08", cmd: "deleteArrayElements(113, 117, 1)", expected: { "newResult": ["hund", "katze", "maus", "elefant", "schlange", null, null, null], "removedItems": ["stachelschwein", "affe", "giraffe"] } },

  { id: "a03-01", cmd: "addObjectElement('i', 'tiger')", expected: { "a": "hund", "b": "katze", "c": "maus", "d": "elefant", "e": "schlange", "f": "stachelschwein", "g": "affe", "h": "giraffe", "i": "tiger" } },
  { id: "a03-02", cmd: "addObjectElement('a', 'tiger')", expected: {"a":"hund", "b":"katze", "c":"maus", "d":"elefant", "e":"schlange", "f":"stachelschwein", "g":"affe", "h":"giraffe", "a_1":"tiger"} },
  { id: "a03-03", cmd: "addObjectElement('a', 'elefant')", expected: {"a":"hund", "b":"katze", "c":"maus", "d":"elefant", "e":"schlange", "f":"stachelschwein", "g":"affe", "h":"giraffe", "a_1":"elefant"} },
  { id: "a03-04", cmd: "getObjectElements(['a', 'b', 'z', 'c'])", expected: ["hund", "katze", "not found", "maus"] },
  { id: "a03-05", cmd: "getObjectElements(['a', 'a_1', 'a_2', 'a_3', 'b', 'z', 'c'])", expected: ["hund", "not found", "not found", "not found", "katze", "not found", "maus"] },
  { id: "a03-06", cmd: "deleteObjectElements(['a', 'b', 'c'])", expected: {"d":"elefant", "e":"schlange", "f":"stachelschwein", "g":"affe", "h":"giraffe"} },
  { id: "a03-07", cmd: "deleteObjectElements(['a', 'a_1', 'a_2', 'a_3', 'a_4'])", expected: {"b":"katze", "c":"maus", "d":"elefant", "e":"schlange", "f":"stachelschwein", "g":"affe", "h":"giraffe"} },

];