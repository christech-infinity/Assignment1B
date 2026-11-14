// Problem 4- Private Counter Factory
function createCounter() {
  // 1. Create a private variable
  let count = 0;

  // 2. Return an object containing the methods
  return {
    increment() {
      count++;
    },

    decrement() {
      count--;
    },

    // 3. Use a getter to access the private count
    get value() {
      return count;
    }
  };
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.decrement();

console.log(counter.value); // 1
console.log(counter.count); // undefined
