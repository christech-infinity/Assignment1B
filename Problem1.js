// Problem 1- Deep Equal
function deepEqual(objA, objB) {
  // 1. Check if both values are strictly equal
  if (objA === objB) {
    return true;
  }

  // 2. Check if either value is null or not an object
  if (
    objA === null ||
    objB === null ||
    typeof objA !== "object" ||
    typeof objB !== "object"
  ) {
    return false;
  }

  // 3. Get the keys of both objects
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // 4. Check if both objects have the same number of keys
  if (keysA.length !== keysB.length) {
    return false;
  }

  // 5. Compare each key and its value recursively
  for (const key of keysA) {
    if (!Object.hasOwn(objB, key)) {
      return false;
    }

    if (!deepEqual(objA[key], objB[key])) {
      return false;
    }
  }

  // 6. If all checks pass, return true
  return true;
}

console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true

console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })); // false

console.log(deepEqual({ a: 1 }, { a: 1, b: 2 })); // false