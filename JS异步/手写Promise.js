/**
 * @description MyPromise
 * @author tilong
 */
class MyPromise {
  status = 'pending'
  value = ''
  reason = ''
  resolvedCallbackList = []
  rejectedCallbackList = []

  constructor(fn) {
    // 转换promise状态，存储值，执行回调
    const resolveFunc = (value) => {
      this.status = 'fulfilled'
      this.value = value
      this.resolvedCallbackList.forEach(fn => fn(value))
    }
    const rejectFunc = (reason) => {
      this.status = 'rejected'
      this.reason = reason
      this.rejectedCallbackList.forEach(fn => fn(reason))
    }

    try {
      fn(resolveFunc, rejectFunc)
    } catch (error) {
      rejectFunc(error)
    }
  }
  then(resolveHandle, rejectHandle) {
    resolveHandle = typeof resolveHandle === 'function' ? resolveHandle : (v) => v
    rejectHandle = typeof rejectHandle === 'function' ? rejectHandle : (e) => e

    if (this.status === 'pending') {
      return new MyPromise((resolve, reject) => {
        this.resolvedCallbackList.push(() => {
          try {
            resolve(resolveHandle(this.value))
          } catch (error) {
            reject(error)
          }
        })

        this.rejectedCallbackList.push(() => {
          try {
            reject(rejectHandle(this.reason))
          } catch (error) {
            reject(error)
          }
        })
      })
    }

    if (this.status === 'fulfilled') {
      return new MyPromise((resolve, reject) => {
        // 立即执行 then 回调
        try {
          resolve(resolveHandle(this.value))
        } catch (error) {
          reject(error)
        }
      })
    }

    if (this.status === 'rejected') {
      return new MyPromise((resolve, reject) => {
        // 立即执行 then 回调
        try {
          reject(rejectHandle(this.reason))
        } catch (error) {
          reject(error)
        }
      })
    }
  }
  catch(catchHandle) {
    this.then(null, catchHandle)
  }
}
MyPromise.resolve = function name(value) {
  return new MyPromise((resolve) => resolve(value))
}
MyPromise.reject = function name(value) {
  return new MyPromise((resolve, reject) => reject(value))
}
MyPromise.all = function name(promiseList = []) {
  const result = []
  const length = promiseList.length
  let count = 0
  return new MyPromise((resolve, reject) => {
    promiseList.forEach(p => {
      p.then((value) => {
        result.push(value)
        count++
        if (length === count) resolve(result)

      }).catch((err) => {
        reject(err)
      })
    })
  })
}
MyPromise.race = function name(promiseList = []) {
  let resolved = false
  return new MyPromise((resolve, reject) => {
    promiseList.forEach(p => {
      p.then((value) => {
        if (!resolved) {
          resolve(value)
          resolved = true
        }
      }).catch((err) => {
        reject(err)
      })
    })
  })
}

console.log(1);

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(3)
  }, 1000);
})

p.then((v) => {
  console.log(v);
  return 4
}).then((v) => {
  console.log(v);
})

MyPromise.resolve(111).then((v) => {
  console.log(v);
})

console.log(2);