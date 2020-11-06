// Single Threaded
// IO non blocking
// Callback Queue
// Promise dedicated queue

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

function resolvedPromise() {
  return Promise.resolve("Resolved promised");
}

resolvedPromise().then(console.log);

setTimeout(() => {
  console.log("4");
}, 0);

console.log("5");
