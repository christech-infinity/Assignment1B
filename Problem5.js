// Problem 5 - Schema Validator

function validateSchema(obj, schema) {
  // 1. Create an empty array to store errors
  const errors = [];

  // 2. Loop through the schema keys
  for (const key in schema) {

    // 3. Check if the property exists in the object
    if (!Object.hasOwn(obj, key)) {
      errors.push(`${key}: missing property`);
    }

    // 4. Check if the property's type matches the expected type
    else if (typeof obj[key] !== schema[key]) {
      errors.push(
        `${key}: expected ${schema[key]}, got ${typeof obj[key]}`
      );
    }
  }

  // 5. Return the errors array
  return errors;
}

const schema = {
  name: 'string',
  age: 'number',
  isAdmin: 'boolean'
};

console.log(validateSchema(
  { name: 'Ada', age: 21, isAdmin: false },
  schema
));
// []

console.log(validateSchema(
  { name: 'Ada', age: '21' },
  schema
));
// [
//   'age: expected number, got string',
//   'isAdmin: missing property'
// ]
