// Problem 2- Object Diff
function diffObjects(oldObj, newObj) {
  const added = {};
  const removed = {};
  const changed = {};

  // Check for added and changed properties
  for (const key in newObj) {
    if (!Object.hasOwn(oldObj, key)) {
      // Key exists in newObj but not oldObj
      added[key] = newObj[key];
    } else if (oldObj[key] !== newObj[key]) {
      // Key exists in both but has different values
      changed[key] = {
        from: oldObj[key],
        to: newObj[key]
      };
    }
  }

  // Check for removed properties
  for (const key in oldObj) {
    if (!Object.hasOwn(newObj, key)) {
      removed[key] = oldObj[key];
    }
  }

  return {
    added,
    removed,
    changed
  };
}

console.log(diffObjects(
  { name: 'Setemi', role: 'Engineer', country: 'Jamaica' },
  { name: 'Setemi', role: 'Senior Engineer', city: 'Kingston' }
));
