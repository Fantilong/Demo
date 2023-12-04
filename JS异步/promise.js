// Promise.resolve().then(() => {
//   console.log(1);
// }).catch(() => {
//   console.log(2);
// }).then(() => {
//   console.log(3);
// })

// Promise.resolve().then(() => {
//   console.log(1);
//   throw new Error()
// }).catch(() => {
//   console.log(2);
// }).then(() => {
//   console.log(3);
// })

// Promise.resolve().then(() => {
//   console.log(1);
//   throw new Error()
// }).catch(() => {
//   console.log(2);
// }).catch(() => {
//   console.log(3);
// })

// function loadImg(src) {
//   const p = new Promise(
//       (resolve, reject) => {
//           const img = document.createElement('img')
//           img.onload = () => {
//               resolve(img)
//           }
//           img.onerror = () => {
//               const err = new Error(`图片加载失败 ${src}`)
//               reject(err)
//           }
//           img.src = src
//       }
//   )
//   return p
// }


// function loadImg(src) {
//   return new Promise((resolve, reject) => {
//     const img = document.createElement('img')

//     img.onload = () => {
//       resolve(img)
//     }
//     img.onerror = () => {
//       reject(new Error(`图片加载失败 ${src}`))
//     }

//     img.src = src
//   })
// }

// const url = 'https://seccdn.libravatar.org/avatar/a00cb054d121654bd0fba4bd5b166cb5?s=46&d=identicon'

// async function appendImg() {
//   try {
//     const img = await loadImg(url)
//     document.querySelector('body').appendChild(img)
//   } catch (error) {
//     alert(error.message)
//   }
// }
// appendImg()

/**
 * then / catch 返回fulfilled状态的promise，如果里面有报错则返回rejected状态的promise
 */
// const p = Promise.resolve().then()
// console.log(p); // fulfilled

// const p1 = Promise.resolve().then(() => {
//   throw new Error()
// })
// console.log(p1);// rejected


// resolve 修改promise状态为 fulfilled， 触发 then 当中的回调
// reject 修改promise状态为 rejeted, 触发 catch 当中的回调

// then 和 catch 都返回一个 fulfilled 状态的promise,如果当中有报错，则返回 rejected 的promise
// rejected 状态的promise 则触发 catch，fullfilled 状态的 promise则触发 then


const p = new Promise((resolve, reject) => {
  throw new Error(123)
  resolve(123)
})
console.log(p);
const p1 = new Promise((resolve, reject) => {
  resolve(123)
}).then(() => {
  throw new Error(123)
})
console.log(p1);

