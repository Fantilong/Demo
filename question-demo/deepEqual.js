function isObj(obj) {
  return typeof obj === 'object' && obj !== null
}
function isEqual(obj1, obj2) {
  if (!isObj(obj1) || !isObj(obj1)) return obj1 === obj2 // 判断类型

  const obj1Keys = Object.keys(obj1)
  const obj2Keys = Object.keys(obj2)
  if (obj1Keys.length !== obj2Keys.length) return false // 判断key个数

  for (const key of obj1Keys) {
    const res = isEqual(obj1[key], obj2[key])
    if (!res) return false
  }

  return true
}


// 测试
const obj1 = {
  a: 100,
  b: {
    x: 100,
    y: 300
  }
}
const obj2 = {
  a: 100,
  b: {
    x: 100,
    y: 200
  }
}

console.log(isEqual(obj1, obj2));