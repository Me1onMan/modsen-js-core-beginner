"use strict";

function errorIfAccessUndefinedProperty(obj) {
  try {
    obj.undefinedProperty = "value";
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("TypeError caught!", error.message);
      return "Default value";
    } else {
      console.error("Error occured!");
      return "Another default value";
    }
  }
}

const obj = { name: "John", age: 30 };
Object.seal(obj);

console.log(errorIfAccessUndefinedProperty(obj));
