# ascyn和await

## 介绍

`目标`：

​	知道什么是async和await 和 作用



`什么是`：

​	async 和 await 是**es7**技术，可以简化 Promise 操作，提高 Promise 代码的 阅读性 和 理解性；

​	async和await结合起来，可以使得异步调用不返回Promise对象，而直接把then<font color="red">回调函数的第一个形参result</font>给返回出来，使得代码更节俭，提高开发效率，也可以保证异步调用的<font color=red>顺序</font>执行。



`作用`：

1. 替代then()
2. 保证各个异步调用**顺序**执行

`好处`：

1. 代码更节省、结构更清晰、便于阅读和理解
2. 提高开发效率



## 应用

`目标`：

​	通过async和await升级改造获取频道列表的代码



`语法`：

```js
async function xxx(){
  let rst = await yyy()
}
```

> xxx函数嵌套调用yyy函数，yyy会返回一个promise对象
>
> 在xxx前边设置async，在yyy前边设置await
>
> rst：就是then方法  **回调函数实参的形参**，即 下述代码的result
>
> function xxx(){
>
> ​	let pro = yyy()
>
> ​	pro
>
> ​		.then(result=>{xxx})	
>
> }



`应用`：

目前获取频道的代码结构：

```js
// 获得频道列表数据
getChannelList () {
  let pro = this.$http.get('/channels')
  pro
    .then(result => {
      if (result.data.message === 'OK') {
        // 把获得的频道信息赋予给channelList成员
        this.channelList = result.data.data.channels
      }
    })
    .catch(err => {
      return this.$message.error('获得频道错误：' + err)
    })
}
```

async和await介入应用

```js
// 获得频道列表数据
async getChannelList () {
  let rst = await this.$http.get('/channels')
  // 现在的rst就是then里边的result结果
  this.channelList = rst.data.data.channels
}
```



## 错误处理

`目标`：

​	掌握try/catch的使用方法



如果axios请求过程中发生错误，可以通过异常机制  try、catch 加以处理，语法为：

> try、catch是 javascript语言本身技术

```js
try{
  // 放置有可能产生错误的代码
  aaaa
  bbbb
  cccc
}catch(err){
  // 对try内部的错误进行捕捉处理
  // err:是具体错误对象
  dddd
}
eeee

try、catch使用情形分析：
1. 没有任何错误，那么执行： a   b   c   e
2. try中的b有错误，那么执行：  a   d   e

特点：
	try内部：  如果有错误，错误后续代码不执行
  无论是否有错误，try/catch后续代码都会运行，其可以保证流程是"完整"的
  如果try或catch内部有return，就另当别论了

```

> try/catch根据实际情况进行使用
>
> 如果没有必要也可以不设置，使得项目代码更简洁、运行速度更快



`应用`：

```js
// 获得使用的真实频道列表数据
async getChannelList () {
  try {
    var pro = await this.$http.get('/channelsrrrrrrrr')
    this.channelList = pro.data.data.channels
  } catch (err) {
    return this.$message.error('获得频道列表失败！' + err)
  }
}
```



`注意`：

​	try/catch可以保证项目代码"**完整**"运行，但要设置return就不保证完整了



## async和await应用其他



```javascript
var obj = {
  async getInfo(){
    await getXXXX()
    await getXXXX()
  }
}
或
function ffff(){
    // async需要设置到Promise对象的外层最近function的前边位置
  getInfo(async function(){
 		await getXXXX()
    //console.log(getXXXX())
  })
}
或
async function XXXX(){
  await getXXXX()
}
```

注意：

1. async需要设置到Promise对象外边**最近**的function前边位置
2. await必须结合async一并使用
3. async可以独立修饰函数使用，返回值是Promise对象(了解)
4. 一个async可以对应**多个**await，并且各个await**顺序**执行
5. await 后面可以跟任何的JS 表达式(字符串、数值。。)，但是修饰 **Promise对象** 更有意义

