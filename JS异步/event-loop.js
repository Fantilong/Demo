// console.log('Hi')

// setTimeout(function cb1() {
//     console.log('cb1') // cb 即 callback
// }, 5000)

// console.log('Bye')


/**
 * DOM 事件 和 event-loop
 */

console.log('hi');

document.querySelector('#btn').addEventListener('click', function (e) {
  console.log('button clicked');
})

console.log('bye');
