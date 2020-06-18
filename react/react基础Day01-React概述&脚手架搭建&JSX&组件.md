

# React基础知识点

## 目标-react基础知识与项目

- 能够说出React是什么
- 能够说出React的特点
- 能够使用React脚手架
- react的基础语法
- 演示项目(租房项目)

## 1.1 什么是React （★★★）

React 是一个用于构建用户界面的javaScript库，起源于facebook的内部项目，后续在13年开源了出来

angular  -- 

vue  必会

官网： https://react.docschina.org/ 

### 特点

- 声明式

你只需要描述UI看起来是什么样式，就跟写HTML一样，React负责渲染UI

![](./images/raact语法初了解.png)

- 基于组件

组件时React最重要的内容，组件表示页面中的部分内容

- 学习一次，随处使用

使用React可以开发Web应用，使用React可以开发移动端app (react-native)，可以开发VR应用

## 1.2 React基本使用-script直接引入js-了解

### React的安装

npm i react react-dom 

- react 包是核心，提供创建元素，组件等功能
- react-dom 包提供DOM相关功能

### React的使用

- 引入react和react-dom的两个js文件

```html
<script src="./node_modules/react/umd/react.development.js"></script>
<script src="./node_modules/react-dom/umd/react-dom.development.js"></script>
```

- 创建React元素

```javascript
// 创建元素节点
// 1. 元素名称
// 2. 元素属性 传递的是个对象
// 3. 元素内容
let title = React.createElement('li', null, 'hellow react');
```

- 渲染到页面

```javascript
// 渲染到页面
ReactDOM.render(title, root)
```

属性的注意点

```
  // 注意 1 class属性 要写成 className   因为class在js语法里面 关键字
    //      2 for属性 要写成 htmlFor  
    //      3 tabindex 写成 tabIndex
```

根据刚才 写法 我们发现 特别难写



## 1.3 React脚手架（★★★）

### React脚手架意义

- 脚手架是开发现代Web应用的必备
- 充分利用 Webpack，Babel，ESLint等工具辅助项目开发
- 零配置，无需手动配置繁琐的工具即可使用
- 关注业务，而不是工具配置

### 使用React脚手架初始化项目-创建之后分析命令

vue   1 npm i @vue/cli -g  2 vue create 项目

![](./images/脚手架.png)

- 初始化项目，命令： npx create-react-app my-pro
  - npx 目的：提升包内提供的命令行工具的使用体验
  - 原来：先安装脚手架包，再使用这个包中提供的命令
  - 现在：无需安装脚手架包，就可以直接使用这个包提供的命令
  - create-react-app  这个是脚手架名称 不能随意更改
  - my-pro  自己定义的项目名称
- 启动项目，在项目根目录执行命令： npm start



yarn命令简介

- yarn 是Facebook发布的包管理器，可以看做是npm的替代品，功能与npm相同
- yarn具有快速，可靠和安全的特点
- 初始化新项目：yarn init
- 安装包： yarn add 包名称
- 安装项目依赖： yarn

### 脚手架中使用React-了解目录就行

重要的 ：App.js  类似vue的 App.vue 根组件

​                index.js  类似vue的 main.js  入口文件------***

1  可以删掉只留index.js  2 不管他 清空index.js 自己写

- 导入react和react-dom两个包

```react
import React from 'react'
import ReactDOM from 'react-dom'
```

- 创建元素

```react
let myh1 = React.createElement('h1',null,'我是标题')
```

- 渲染到页面

```react
ReactDOM.render(myh1,document.getElementById('root'))
```

# JSX的使用

js文件里面 默认是不能写 html标签的

## 目标

- 知道什么是JSX
- 能够使用JSX创建React元素
- 能够在JSX中使用JavaScript表达式
- 能够使用JSX的条件渲染和列表渲染
- 能够给JSX添加样式

## 2.1 概述

<img src="./images/createElement的问题.png" style="zoom: 200%;" />

#### JSX产生的原因

由于通过createElement()方法创建的React元素有一些问题，代码比较繁琐，结构不直观，无法一眼看出描述的结构，不优雅，用户体验不爽

#### JSX的概述

jsx    在js中可以写 html

JSX是JavaScript XML 的简写，表示在JavaScript代码中写HTML格式的代码

优势：声明式语法更加直观，与HTML结构相同，降低了学习成本，提升开发效率

## 2.2 简单入门使用（★★★）

#### 使用步骤

- 使用JSX语法创建react元素

```react
let h1 = <h1>我是通过JSX创建的元素</h1>
```

- 使用ReactDOM来渲染元素

```react
ReactDOM.render(h1,document.getElementById('root'))
```

#### 为什么在脚手架中可以使用JSX语法

- JSX 不是标准的ECMAScript语法，它是ECMAScript的语法拓展
- 需要使用babel编译处理后，才能在浏览器环境中使用
- create-react-app脚手架中已经默认有该配置，无需手动配置
- 编译JSX语法的包： @bable/preset-react

#### 2.3 注意点

- React元素的属性名使用驼峰命名法
- 特殊属性名：class -> className，for -> htmlFor，tabindex -> tabIndex
- 如果没有子节点的React元素可以用 `/>` 来结束
- 推荐：使用 小括号包裹JSX，从而避免JS中换行的问题

## 2.4 JSX语法（★★★）

JSX是来描述页面的结构，我们一般在编写业务逻辑渲染页面的时候，需要涉及到传递值，调用函数，判断条件，循环等，这一些在JSX中都能得到支持

#### 嵌入JS表达式-{}

语法：{JavaScritp表达式}

例子：

```react
let content = '插入的内容'
let h1 = <h1>我是通过JSX创建的元素+ {content}</h1>
```

#####  注意点

- 只要是合法的js表达式都可以进行嵌入
- JSX自身也是js表达式  和vue差不多 三元可以    if for while不可以 
- 注意：js中的对象是一个例外，一般只会出现在style属性中
- 注意：在{}中不能出现语句

### 注意

在 react中 没有  v-if v-for类似的 指令 react写法类似 原生js

#### 3.1 条件渲染 

根据不同的条件来渲染不同的JSX结构---if 或者三元

```react
let isLoading = true
let loading = ()=>{
    if(isLoading){
        return <div>Loading...</div>
    }
    return <div>加载完成</div>
}

--
loading
```

可以发现，写JSX的条件渲染与我们之前编写代码的逻辑是差不多的，根据不同的判断逻辑，返回不同的 JSX结构，然后渲染到页面中

#### 3.2 列表渲染

map语法

- 如果需要渲染一组数据，我们应该使用数组的 map () 方法
- 注意：渲染列表的时候需要添加key属性，key属性的值要保证唯一
- 原则：map()遍历谁，就给谁添加key属性
- 注意：尽量避免使用索引号作为key

```react
let arr = [
  {id: 1,name: '三国演义'}, 
  {id: 2,name: '水浒传'}, 
  {id: 3,name: '西游记'}, 
  {id: 4,name: '红楼梦'}
]
let myul = (<ul>
    {arr.map(item => <li key={item.id}>{item.name}</li>)}
</ul>)
ReactDOM.render(myul,document.getElementById('root'))
```

#### 3.3 样式处理

##### 行内样式 -style

在style里面我们通过对象的方式传递数据

```react
<li key={item.id} style={{'color': 'red',"backgroundColor": 'pink'}}>{item.name}</li>
```

这种方式比较的麻烦，不方便进行阅读，而且还会导致代码比较的繁琐

##### 4.1 类名 -className

创建CSS文件编写样式代码

```css
.container {
    text-align: center
}
```

在js中进行引入，然后设置类名即可

```react
import './css/index.css'

<li className='container'> </li>
```

### 小结

- JSX是React的核心内容
- JSX表示在JS代码中写HTML结构，是React声明式的体现
- 使用JSX配合嵌入的JS表达式、条件渲染、列表渲染、可以描述任意UI结构
- 推荐使用className的方式给JSX添加样式
- React完全利用JS语言自身的能力来编写UI，而不是造轮子增强HTML功能

# React组件

## 目标

- 能够使用函数创建组件
- 能够使用class类创建组件
- 能够给React元素绑定事件
- 能够使用state和setState()
- 能够处理事件中的this指向问题

## 4.2 React组件介绍

- 组件是React的一等公民，使用React就是在用组件
- 组件表示页面中的部分功能
- 组合多个组件实现完整的页面功能
- 特点：可复用、独立、可组合

![](images/组件.png)

## 组件的两种创建方式

### 4.2 函数创建组件

- 函数组件：使用JS的函数创建组件
- **约定1：**函数名称必须以大写字母开头
- **约定2：**函数组件必须有返回值，表示该组件的结构
- 如果返回值为null，表示不渲染任何内容

#### 示例demo

编写函数组件

```react
function Header() {
    return (
        <div>这是第一个函数组件</div>
    )
}
```

利用ReactDOM.render()进行渲染

```react
ReactDOM.render(<Header />,document.getElementById('root'))
```

### 4.3 类组件（★★★）

#### class 语法 就是构造函数

```
class Person {
        // constructor(){
        //     this.money=100000
        // }
        money=100000
        sing(){
            console.log("你好啊 健林")
        }

}

class Teacher extends Person{
    // constructor(){
    //     super()
    //     this.name='王俊草'
    // }
    name='王俊草'
    sayHi(){
   		 console.log("hihihi~~")
    }
}
```



- 使用ES6语法的class创建的组件
- 约定1：类名称也必须要大写字母开头
- 约定2：类组件应该继承React.Component父类，从而可以使用父类中提供的方法或者属性
- 约定3：类组件必须提供 render 方法
- 约定4：render方法中必须要有return返回值

#### 示例demo

创建class类，继承React.Component，在里面提供render方法，在return里面返回内容

```react
class Hello extends React.Component{
    render(){
        return (
            <div>这是第一个类组件</div>
        )
    }
}
```

通过ReactDOM进行渲染

```react
ReactDOM.render(<Hello />,document.getElementById('root'))
```

### 4.4 抽离成单独的JS文件（★★★）

- 思考：项目中组件多了之后，该如何组织这些组件？
- 选择一：将所有的组件放在同一个JS文件中
- 选择二：将每个组件放到单独的JS文件中
- **组件作为一个独立的个体，一般都会放到一个单独的JS文件中**

#### 示例demo

- 创建Hello.js
- 在Hello.js 中导入React，创建组件，在Hello.js中导出

```react
// 1 每个组件必须导入 react
import React from 'react'
// 2 写一个组件
class Header extends React.Component{

    // 必须有render
    render(){
       return <div>我是头部导出的</div>
    }
 }
 
// 3 导出组件
export default Header
```

- 在index.js中导入Hello组件，渲染到页面

```react
import Header from './zujian/Header'
ReactDOM.render(<Header />,document.getElementById('root'))
```

## React事件处理（★★★）

### 5.1 事件绑定

- React事件绑定语法与DOM事件语法相似
- 语法：on+事件名称=事件处理函数，比如  onClick = function(){}
- 注意：React事件采用驼峰命名法

#### 示例demo

```react
 class My extends React.Component {
    clickHandle(e){
        console.log('点了')
    }
    render(){
        return (
            <div><button onClick = {this.clickHandle}>点我点我点我</button></div>
        )
    }
}
```

#### 小结

- 在React中绑定事件与原生很类似
- 需要注意点在于，在React绑定事件需要遵循驼峰命名法
- 类组件与函数组件绑定事件是差不多的，只是在类组件中绑定事件函数的时候需要用到this，代表指向当前的类的引用，在函数中不需要调用this

### 5.2 事件对象

- 可以通过事件处理函数的参数获取到事件对象
- React中的事件对象叫做：合成事件
- 合成事件：兼容所有浏览器，无需担心跨浏览器兼容问题
- 除兼容所有浏览器外，它还拥有和浏览器原生事件相同的接口，包括 `stopPropagation()`和 `preventDefault()`
- 如果你想获取到原生事件对象，可以通过 `nativeEvent` 属性来进行获取

#### 示例demo

```react
 class My extends React.Component {
    clickHandle(e){
        // 获取原生事件对象
        e.preventDefault()
        //console.log(e.nativeEvent)
    }
    render(){
        return (
            <div><a href=‘http://www.itcast.cn’ onClick = {this.clickHandle}>点我点我点我</a></div>
        )
    }
}
```

### 支持的事件（有兴趣的课下去研究）

- Clipboard Events  剪切板事件

  - 事件名 ：onCopy onCut onPaste
  - 属性     ：DOMDataTransfer clipboardData

- compositionEvent  复合事件

  - 事件名： onCompositionEnd onCompositionStart onCompositionUpdate
  - 属性： string data

- Keyboard Events  键盘事件

  - 事件名：onKeyDown onKeyPress onKeyUp
  - 属性： 例如 number keyCode  太多就不一一列举

- Focus Events  焦点事件  （这些焦点事件在 React DOM 上的所有元素都有效，不只是表单元素）

  - 事件名： onFocus onBlur
  - 属性： DOMEventTarget relatedTarget

- Form Events  表单事件

  - 事件名： onChange onInput onInvalid onSubmit

- Mouse Events  鼠标事件

  - 事件名：

    ```react
    onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
    onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
    onMouseMove onMouseOut onMouseOver onMouseUp
    ```

- Pointer Events  指针事件

  - 事件名：

    ```react
    onPointerDown onPointerMove onPointerUp onPointerCancel onGotPointerCapture
    onLostPointerCapture onPointerEnter onPointerLeave onPointerOver onPointerOut
    ```

- Selection Events  选择事件

  - 事件名：onSelect

- Touch Events  触摸事件

  - 事件名：onTouchCancel onTouchEnd onTouchMove onTouchStart

- UI Events  UI 事件

  - 事件名： onScroll

- Wheel Events  滚轮事件

  - 事件名：onWheel

  - 属性： 

    ```react
    number deltaMode
    number deltaX
    number deltaY
    number deltaZ
    ```

- Media Events  媒体事件

  - 事件名：

    ```react
    onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted
    onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay
    onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend
    onTimeUpdate onVolumeChange onWaiting
    ```

- Image Events 图像事件

  - 事件名：onLoad onError

- Animation Events 动画事件

  - 事件名：onAnimationStart onAnimationEnd onAnimationIteration

- Transition Events 过渡事件

  - 事件名：onTransitionEnd

- Other Events  其他事件

  - 事件名： onToggle

## 5.3 有状态组件有state数据和无状态组件

- 函数组件又叫做 无状态组件，类组件又叫做 有状态组件
- 状态(state) 即数据
- 函数组件没有自己的状态，只负责数据展示
- 类组件有自己的状态，负责更新UI，让页面动起来

![](images/状态.png)

## 5.4 State和SetState（★★★）

### state基本使用

- 状态(state)即数据，是组件内部的私有数据，只能在组件内部使用
- state的值是对象，表示一个组件中可以有多个数据
- 通过this.state来获取状态

#### 示例demo

```react
 class My extends React.Component {
    constructor(){
        super()

        // 第一种初始化方式
        this.state = {
            count : 0
        }
    }
    // 第二种初始化方式
    state = {
        count:1
    }
    render(){
        return (
            <div>计数器 :{this.state.count}</div>
        )
    }
}
```

### 6.1 setState() 修改状态

1. 数据写  state={  名字:值... }
2. 获取值 this.state.名
3. 修改值  this.setState({ 名:新值 })



- 状态是可变的
- 语法：this.setState({要修改的数据})
- **注意：不要直接修改state中的值，这是错误的**
- setState() 作用：1.修改 state 2.更新UI
- 思想：数据驱动视图

![](images/修改状态.png)

#### 示例demo

```react
export default class extends React.Component {
    // 第二种初始化方式
    state = {
        count:1
    }
    render(){
        return (
            <div>
                <div>计数器 :{this.state.count}</div>
                <button onClick={() => {
                     this.setState({
            	 		count: this.state.count+1
           			  })   
                }}>+1</button>
            </div>
        )
    }
}
```

#### 小结

- 修改state里面的值我们需要通过 this.setState() 来进行修改
- React底层会有监听，一旦我们调用了setState导致了数据的变化，就会重新调用一次render方法，重新渲染当前组件

### 抽取事件处理函数

- 当我们把上面代码的事件处理程序抽取出来后，会报错，找不到this

![](images/this找不到.png)

#### 原因

- 在JSX中我们写的事件处理函数可以找到this，原因在于在JSX中我们利用箭头函数，箭头函数是不会绑定this，所以会向外一层去寻找，外层是render方法，在render方法里面的this刚好指向的是当前实例对象

## 6.2 6.3事件绑定this指向

### 箭头函数

- 利用箭头函数自身不绑定this的特点

![](images/箭头函数.png)

### 利用bind方法（★★★）

利用原型bind方法是可以更改函数里面this的指向的，所以我们可以在构造中调用bind方法，然后把返回的值赋值给我们的函数即可

```react
class App extends React.Component {
  state={a:1}
  // 事件处理程序
  onIncrement() {
    ...
  }

  render() {
    ...
    <button onClick={this.onIncrement.bind(this)}>点击+1</button>
  }
}
```

### class的实例方法-直接就写箭头函数（★★★）

- 利用箭头函数形式的class实例方法
- 注意：该语法是实验性语法，但是，由于babel的存在可以使用

```react
  // 事件处理程序
  onIncrement = () => {
    console.log('事件处理程序中的this：', this)
    this.setState({
      count: this.state.count + 1
    })
  }
```

### 小结--写上  -1  复习前面

- 推荐：总结  以后是 事件函数 都写成 箭头函数 

### state操作--受控组件与非受控组件

```
//  实现一个 类似表单 v-model的双向数据绑定功能
//  单项数据绑定 ---js去绑定到页面 可以  文本框值修改 js的值没改 
//  文本框要修改成v-model双向 ：1 先绑定value  2 写上分onChange事件 去setState
```

## 表单处理

v-model 需要自己实现 类似v-model的效果

### 1.1 受控组件（★★★）-使用state数据

使用state数据的组件叫 受控组件

使用state数据的表单元素叫 受控表单

- HTML中的表单元素是可输入的，也就是有自己的可变状态
- 而React中可变状态通常保存在state中，并且只能通过`setState()` 方法来修改
- React讲state与表单元素值value绑定在一起，有state的值来控制表单元素的值
- 受控组件：值受到react控制的表单元素

![](images/受控组件.png)

#### 使用步骤

- 在state中添加一个状态，作为表单元素的value值
- 给表单元素绑定change事件，将表单元素的值设置为state的值

#### 示例demo

```react
class App extends React.Component {

    state = {
        txt : ''
    }
    inputChange=(e)=>{
       this.setState({
           txt: e.target.value
       })
    }
    render(){
        console.log(this.state);
        
        return (
            <div>
                {/* 把state的值设置给输入框的value，绑定change事件，这样用户在输入内容的时候调用相应函数，在函数里面把当前设置的值赋值给state，从而达到数据的统一 */}
                <input type="text" value={this.state.txt} onChange={this.inputChange}/>
            </div>
        )
    }
}
ReactDOM.render(<App />,document.getElementById('root'))
```

- react 表单基本都可以这样处理 -v--model就是这样实现的

### 1.2 非受控组件 （了解）不用state 单纯只想ref操作dom获取文本框值

- 说明：借助于ref，使用元素DOM方式获取表单元素值
- ref的作用：获取DOM或者组件

#### 使用步骤

- 调用 `React.createRef()` 方法创建ref对象
- 将创建好的 ref 对象添加到文本框中
- 通过ref对象获取到文本框的值

```react
class App extends React.Component {
    constructor(){
        super()
        
        //创建 ref
        this.txtRef = React.createRef()
    }
    //或者 txtRef = React.createRef()
    // 获取文本框的值
    getTxt =() => {
        console.log(this.txtRef.current.value)
    }
    render(){
        return (
          <div>
            <input type ="text" ref={this.txtRef} />
            <button onClick ={this.getTxt}>获取值</button>
          </div>
        )
    }
}
```

# 