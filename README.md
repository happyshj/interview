# 前端基础面试题
## html
## css
## js
### 基础知识
#### *********** 变量类型和计算 *************
#### 1、js的基本类型有几种？
#####  答：五种（Number, String, null, undefined, Boolean）
#### 2、js的数据类型
##### 答：基本类型有五种（Number， String， null， undefined， Boolean）, 引用类型（Object, Array, Function）
#### 3、js中使用typeof能得到哪些类型
##### 答：typeof可以得到基本数据类型，Number=》Number，String=》String， Boolean =》Boolean，null =》object，undefined=》undefined，object，Array=》object，function =》function
#### 4、何时使用 === 何时使用 ==
##### 答：== 可能会引起变量转换，====不会。obj.a == null 时，使用==（相当于obj.a === null || obj.a === undefined）
#### 5、JS有哪些内置函数
##### 答：Object，Array，Boolean，Number，String，Function，Date，RegExp，Error
#### 6、JS变量按照存储方式区分为哪些类型，并描述其特点
##### 答：值类型，引用类型。值类型可以分块放在内存中，引用类型可以存在一个块中，变量指针指向它
#### 7、如何理解JSON
##### 答：JSON是个JS对象也是个数据格式，JSON.stringify({a:10, b:20})：对象转换为字符串，parse字符串转换为对象
#### ********** 原型和原型链 **********
#### 8、如何判断一个变量是数组类型
##### 答：instanceof
#### 9、写一个原型链继承的例子
#### 10、描述new一个对象的过程
#### 11、zepto源码中如何使用原型链
#### 12、js 如何实现继承
##### 答：1）
#### 5、window.onload 和 DOMContentLoaded的区别
#### 6、用JS创建10个<a>标签，点击的时候弹出来对应的序号
#### 7、简述如何实现一个模块加载器，实现类似require.js的基本功能
#### 8、实现数组的随机排序
### js api
### 开发环境
### 运行环境