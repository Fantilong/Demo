// async function fn() {
//   return 100
// }

// (async function () {
//   const a = fn()
//   const b = await fn()

//   console.log(a);
//   console.log(b);
// })()


// (async function () {
//   console.log('start');
//   const a = await 100
//   console.log('a', a);
//   const b = await Promise.resolve(200)
//   console.log('b', b);
//   const c = await Promise.reject(300)
//   console.log('c', c);
//   console.log('end');
// })()

// console.log(100);
// setTimeout(() => {
//   console.log(200);
// });
// Promise.resolve().then(() => {
//   console.log(300);
// })
// console.log(400);

async function async1() {
  console.log('async1 start'); // 2
  await async2()
  console.log('async1 end');// 3
  
}

async function async2() {
  console.log('async 2'); // 6
}

console.log('script start');// 1

setTimeout(() => {
  console.log('setTimeout'); // 8
}, 0);

async1()

new Promise(function (resolve) {
  console.log('promise1'); // 4 
  resolve()
}).then(function () {
  console.log('promise2'); // 7
})
console.log('script end'); // 5



// 微任务 async2() 