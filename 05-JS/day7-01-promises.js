// pending, resolved, rejected

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Chaicode");
//     // rej(new Error("Chaicode"));
//   }, 2000);
// });
// console.log(promise); // Status: Pending

// const myFunction = (data) => {
//   console.log(data);
// };

// // promise.then(myFunction);

// // =================== Interview Question ===================
// //
// // promise.then(console.log); // Also works

// // promise.then(console.log).catch((error) => consol.log(data));

// promise
//   .then((data) => {
//     newData = data.toUpperCase();
//     return newData;
//   })
//   .then((data) => {
//     return data + ".com";
//   })
//   .then(console.log)
//   .catch((error) => {
//     console.log(error);
//     return "Chai";
//   })
//   .then(console.log);

// const turant = Promise.resolve("Turant");
// console.log(turant);

// const allPromise = Promise.any([
//   Promise.resolve("Chai"),
//   Promise.resolve("Code"),
//   Promise.reject("Error"),
// ]);

// allPromise.then(console.log);

// const allPromise2 = Promise.all([
//   Promise.resolve("Chai"),
//   Promise.resolve("Code"),
//   Promise.reject("Error"),
// ]);

// allPromise2.then(console.log);

const allPromise3 = Promise.allSettled([
  Promise.resolve("Chai"),
  Promise.resolve("Code"),
  Promise.reject("Error"),
]);

allPromise3.then(console.log);

// // =================== Async - Await ===================

const hPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej(new Error("Error"));
    // res("Hello");
  }, 2000);
});

console.log(hPromise);

async function nice() {
  try {
    const echo = await hPromise;
    console.log(echo);
  } catch (error) {
    console.log(error);
  }
}

nice();
