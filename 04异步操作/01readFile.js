const fs = require('fs');

// 需求：按顺序依次读取3个json文件，并输出内容
// 1 第一次读取
fs.readFile('./1.json', 'utf-8', (err, data) => {
  if (err) { throw err; }
  console.log(data); // 输出文件内容
  // 2 第二个文件读取
  fs.readFile('./2.json', 'utf-8', (err, data) => {
    if (err) { throw err; }
    console.log(data); // 输出文件内容
    // 3 第三个文件读取
    fs.readFile('./3.json', 'utf-8', (err, data) => {
      if (err) { throw err; }
      console.log(data); // 输出文件内容
    });
  });
});
