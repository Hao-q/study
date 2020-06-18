const fs = require('fs');


// 使用async和await时，只需要设置ok的调用即可
function readFile(path) {
  return new Promise((ok, err) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      // 无论成功还是失败都触发ok
      if (error) {
        ok(null); // 失败时传入一些错误信息
      } else {
        ok(data); // 成功时传入数据
      }
    })
  });
}

// 1 后续我们设置一个async函数
async function myFun() {
  // 2 调用可以返回promise对象的函数readFile()
  //  - 调用前设置await
  let data1 = await readFile('./1.json');
  // console.log(data1); // 可以根据data1的结果进行ifelse判断

  let data2 = await readFile('./2.json');
  console.log(data2);

  let data3 = await readFile('./3.json');
  console.log(data3);
}
myFun();