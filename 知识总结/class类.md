### class类

类抽象了对象的公共部分，用类来实例化对象

es6之js并没有引入类的概念，对象不是基于类创建的，而是用一种称作构造函数的特殊函数定义对象和他们的特征。

#### 0.构造函数

创建对象的方式：

##### 创建对象的方式

###### 1.字面量 var person = {}

###### 2.var p =new Object()

​	p.name = 'list'

​	p.say = function(){

​	}

以上两种造成代码重复

###### 3.工厂模式

可以实例化多个对象，但无法识别对象，都是类型用instanceof检测都是object

```
function Create(name,age,address){
	var p = new Object()
	p.name = name;
	p.age = age;
	p.address = address
	p.say = function(){

	}
	return p
}
var person = Create('lilk',18,['wwww','eeee'])
var person2 = Create('jaxk',30,'ddd')
```



###### 4.构造函数模式

没直接创建对象，而是将方法和属性都赋予给this，没有return

```
function Create(name,age){
	this.name = name
	this.age = age
	this.say = function(){
		console.log(1)
	}
}
var p1 = new Create('lili',18)
var p2 = new Create('haha',20)
```

###### 5.原型模式

所有实例对象都有共享的属性和方法，还可以自己设置自己的私有属性

```
function Person(){
}
Person.prototype.name = 'lilli';
Person.prototype.age = 19;
Person.prototype.say  = function(){
	console.log(1)
}
//创建一个实例对象
var p1 = new Person()
console.log(p1.name) //lilli
//创建实例对象
var p2 = new Person()
p2.name = 'lala'
console.log(p2)
```

###### 6.混合模式（原型+构造函数）

用构造函数的模式定义实例属性，用原型模式定义共有的属性和方法，节省内存，共享共有的同时又保存自己私有属性和方法

```
function Person(name,age){
	this.name = name;
	this.age = age;
	
}
Person.prototype = {
	constructor:Person,
	this.say = function(){
		console.log(1)
	}
}
var p1 = new Person('lala',18)
console.log(p1)
var p2 = new Person('hehe',19)
console.log(p2)
```

#### 构造函数

主要用来初始化对象，即为对象成员变了赋初始值，总与new一起使用，可以吧对象中一些公共的属性和方法抽取出来，封装

注意：用于创建某一类对象，其首字母要大写；与new一起使用才有意义

###### 但是缺点：方法是函数是复杂的数据类型，存储的时候存储的是地址，然后地址指向函数，因此每创建一个实例机会开辟一个空间，会浪费内存。因此就要把公共的方法放到原型对象中prototype。

##### 原型对象prototype：就是一个属性，是构造函数的属性。用于共享方法

```
function Alls(name,age){
	this.name = name;
	this.age = age
}
Alls.prototype.sing=function(){
	console.log(this.name+'changge')
}
var p1 = new Alls('hahah',18)
var p2 = new Alls('lalal', 20)
p1.sing()
p2.sing()
```

##### 对象原型——proto——：指向原型对象

构造函数和原型对象都有一个——proto——属性指向构造函数的原型对象prototype。

——proto——是只读属性；意义：为对象的查找机制提供一个方向，知识内部指向，不能作为实际开发使用。

###### 每一个对象都有一个原型proto，指向原型对象prototyp

##### constructor  构造函数：指回构造函数本身，每个原型和原型对象里面都会有一个constructor属性指回构造函数本身

#### 三者关系

![构造函数，原型对象，对象实例关系](E:\就业班\05javascript高级\day1\笔记1、2\构造函数，原型对象，对象实例关系.jpg)

![原型链](E:\就业班\05javascript高级\day1\笔记1、2\原型链.jpg)

##### 继承：

###### 1.构造函数实现属性继承+原型对象实现方法继承=组合继承

主要使用call()实现属性继承

call（this，arg1，arg2）

​	this:当前调用的函数的this的指向对象

​	arg1/2传递参数

```
   function Father(name, age) {
      this.name = name;
      this.age = age
    }
	Father.prototype.sing = function() {
      console.log(this.name + 'chang')
    }
    function Son(name, age, details) {
      this.details = details
      Father.call(this, name, age)

    }
    Son.prototype.sang = function() {
      console.log(this.name + 'chang')
    }
    var p1 = new Son('hahah', 18, 'jjj')
    Son.prototype = new Father
    console.log(p1.sing())//方法
    console.log(p1.name, p1.age, p1.details);
    console.log(p1.sang())//属性
```

###### 方法继承:本质：方法都在原型对象，若想将父类的方法继承给子类，将父类的实例化对象赋值给子类的原型对象，从而实现继承，父类实例化对象另外开辟了空间不会影响原来父类的原型对象

###### 实现继承后一定要指回构造函数



#### 1.创建类  



class  Star {}

var  hq = new  Star（）

抽取公共的属性和方法来定义





