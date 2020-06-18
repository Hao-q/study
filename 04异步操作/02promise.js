const fs = require('fs');
// 1 Promise是一个构造函数
//   - 必须传入一个回调函数
/*
// 这是每一步都保存后的示例写法
let p = new Promise(() => {
});
let p1 = p.then();
let p2 = p1.catch();
p2.finally(); */


// 这是链式编程写法
//  - 推荐使用resolve, reject，但是随便叫什么都行
//  - 我使用ok和err进行演示

//  - ok和err都是函数
//    - 成功时，调用ok，会自动执行then()
//    - 失败时，调用err，会自动执行catch()

// - ok和err调用时传入的参数，分别传递给then() 和 catch()
/* new Promise((ok, err) => {
  // ok('成功时读取到的数据');
  err('失败时的错误信息');
})
  .then((data) => {// 成功时的处理函数
    console.log(data, 'then中的功能')
  })
  .catch((err) => {// 失败时的处理函数
    console.log(err, '错误时执行的功能');
  }) */
/* .finally(() => {// 都会执行
console.log('反正都会执行');
});  */



// 使用promise进行读取文件的异步处理
/* new Promise((ok, err) => {
  // 在promise中进行异步操作设置
  fs.readFile('./1123.json', 'utf-8', (error, data) => {
    // 如果有错误产生，触发catch
    if (error) {
      // 调用err()
      err('读取文件错误');
    } else {
      // 成功时调用ok()触发then()
      ok(data);
    }
  })
})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
 */


// 将读取文件功能进行封装
function readFile(path) {
  // 将当前读取文件的promise对象返回
  return new Promise((ok, err) => {
    // 在promise中进行异步操作设置
    fs.readFile(path, 'utf-8', (error, data) => {
      // 如果有错误产生，触发catch
      if (error) {
        // 调用err()
        err('读取文件错误');
      } else {
        // 成功时调用ok()触发then()
        ok(data);
      }
    })
  });
}

// 进行多次异步的文件读取操作
//  - 当给then()设置的返回值是promise对象，这个对象会成为then的返回值
readFile('./1.json')
  .then((data) => {
    // 第一次文件读取
    console.log(data);  // 第一次输出

    // 希望读取第二次文件
    return readFile('./21.json')
  })
  .then((data) => {
    console.log(data); // 第二次输出

    // 希望读取第三次文件
    return readFile('./3.json');
  })
  .then((data) => {
    console.log(data);  // 第三次输出
  })
  .catch((err) => {
    console.log(err);
  });