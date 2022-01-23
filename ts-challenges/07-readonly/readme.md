> 欢迎 PR 改进翻译质量。

不要使用内置的`Readonly<T>`，自己实现一个。

该 `Readonly` 会接收一个 _泛型参数_，并返回一个完全一样的类型，只是所有属性都会被 `readonly` 所修饰。

也就是不可以再对该对象的属性赋值。

例如：

```ts
interface Todo {
  title: string;
  description: string;
}

const todo: MyReadonly<Todo> = {
  title: 'Hey',
  description: 'foobar',
};

todo.title = 'Hello'; // Error: cannot reassign a readonly property
todo.description = 'barFoo'; // Error: cannot reassign a readonly property
```

<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://tsch.js.org/7/answer/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://tsch.js.org/7/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <hr><h3>相关挑战</h3><a href="https://github.com/type-challenges/type-challenges/blob/master/questions/8-medium-readonly-2/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-8%E3%83%BBReadonly%202-d9901a" alt="8・Readonly 2"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/master/questions/9-medium-deep-readonly/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-9%E3%83%BB%E6%B7%B1%E5%BA%A6%20Readonly-d9901a" alt="9・深度 Readonly"/></a> <!--info-footer-end-->
