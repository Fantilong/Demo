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

// async function async1() {
//   console.log('async1 start'); // 2
//   await async2()
//   console.log('async1 end');// 3
  
// }

// async function async2() {
//   console.log('async 2'); // 6
// }

// console.log('script start');// 1

// setTimeout(() => {
//   console.log('setTimeout'); // 8
// }, 0);

// async1()

// new Promise(function (resolve) {
//   console.log('promise1'); // 4 
//   resolve()
// }).then(function () {
//   console.log('promise2'); // 7
// })
// console.log('script end'); // 5

// async function f1() {
//   // return 100 // 相当于return一个 Promise.resolve(100)
//   return Promise.resolve(20) // 直接返回，不封装
// }


// !(async function () {
//   const data = await f1()
//   console.log(data, '1');
// })()

// !(async function () {
//   const data = await f1()
//   console.log(data, '2');
// })()

// // const p1 = f1()
// // console.log('p1', p1);
// // p1.then((data) => {
// //   console.log(data);
// // })

// !(async function () {
//   const p1 = Promise.resolve(300)
//   const data = await p1
//   console.log(data);
// })()

// !(async function () {
//   const data = await 400// 相当于 await Promise.resolve(400)
//   console.log(data);
// })()


// !(async function () {
//   const p = Promise.reject('err123123')
//   try {
//     await p
//   } catch (error) {
//     console.log(error);
//   }
// })()

// 相当于把 await 后面的所有内容都放进 callback 中，等待执行；
// 异步回调语法糖


