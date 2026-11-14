// Problem 3 - Deep Freeze

function deepFreeze(obj) {
  // 1. Check if the value is an object or null
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // 2. Get all the keys in the object
  const keys = Object.keys(obj);

  // 3. Loop through the keys and recursively freeze nested objects
  for (const key of keys) {
    deepFreeze(obj[key]);
  }

  // 4. Freeze the current object
  return Object.freeze(obj);
}

const config = deepFreeze({
  api: {
    baseUrl: 'https://x.com',
    retries: 3
  },
  debug: false
});

config.api.baseUrl = 'https://changed.com'; // Ignored
config.debug = true;                        // Ignored

console.log(config.api.baseUrl, config.debug);
// "https://x.com" false

console.log(Object.isFrozen(config.api));
// true
