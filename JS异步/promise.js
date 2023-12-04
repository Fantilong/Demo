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

// // const url = 'https://img.mukewang.com/5a9fc8070001a82402060220-140-140.jpg'
// // loadImg(url).then(img => {
// //     console.log(img.width)
// //     return img
// // }).then(img => {
// //     console.log(img.height)
// // }).catch(ex => console.error(ex))

// const url1 = 'https://img.mukewang.com/5a9fc8070001a82402060220-140-140.jpg'
// const url2 = 'https://img3.mukewang.com/5a9fc8070001a82402060220-100-100.jpg'

// loadImg(url1).then(img1 => {
//   console.log(img1.width)
//   return img1 // 普通对象
// }).then(img1 => {
//   console.log(img1.height)
//   return loadImg(url2) // promise 实例
// }).then(img2 => {
//   console.log(img2.width)
//   return img2
// }).then(img2 => {
//   console.log(img2.height)
// }).catch(ex => console.error(ex))


function loadImg(src) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img')

    img.onload = () => {
      resolve(img)
    }
    img.onerror = () => {
      reject(new Error(`图片加载失败 ${src}`))
    }

    img.src = src
  })
}

const url = 'https://seccdn.libravatar.org/avatar/a00cb054d121654bd0fba4bd5b166cb5?s=46&d=identicon'

async function appendImg() {
  try {
    const img = await loadImg(url)
    document.querySelector('body').appendChild(img)
  } catch (error) {
    alert(error.message)
  }
}

appendImg()
