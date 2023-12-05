const innerHtml = '<p>一段文字</p><p>一段文字</p><p>一段文字</p>'
const body = document.querySelector('body')
body.innerHTML = innerHtml

console.log('length',  body.childNodes )

alert('本次 call stack 结束，DOM 结构已更新，但尚未触发渲染')
// （alert 会阻断 js 执行，也会阻断 DOM 渲染，便于查看效果）

Promise.resolve().then(() => {
  console.log('length',  body.childNodes )
})
// 微任务会在宏任务前触发

// 到此，即本次 call stack 结束后（同步任务都执行完了），浏览器会自动触发渲染，不用代码干预

// 另外，按照 event loop 触发 DOM 渲染时机，setTimeout 时 alert ，就能看到 DOM 渲染后的结果了
setTimeout(function () {
    alert('setTimeout 是在下一次 Call Stack ，就能看到 DOM 渲染出来的结果了')
})