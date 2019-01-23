title: Typescript Advanced
class: animation-fade
layout: true

<!-- This slide will serve as the base layout for all your slides -->
.bottom-bar[
  {{title}}
]

---

class: impact

# {{title}}
## Presentation

---

# What is TypeScript

.col-6.space-right[
TypeScript is a superset of JavaScript which primarily provides strongly typing, classes, interfaces...

One of the big benefits is to enable IDEs to provide a richer environment for spotting common errors as you type the code.
]
.contain[
![large](./images/typescript-basic.png)
]

---

# How TypeScript works

Common browsers only knows Javascript, then you need to transpile your TS files to JS.

In Node.js ecosystem there are tools to run TypeScript directly like `ts-node`.

If there are any error, TypeScript will throw it in transpiling time.

Most IDEs show errors when writing, so you earn a lot of time and you are more productive.

TypeScript has a [playground](https://www.typescriptlang.org/play/index.html) where you could try it online.

> There is no pure TypeScript code, it is Javascript + extra features.

---

# Work with TypeScript

.col-6[
## Install

```bash
$ yarn add -D typescript
```
]

--

.col-6[
## Initialize

```bash
$ yarn tsc --init
```

This will create a `tsconfig.json` with a default configuration to run TypeScript in your project
]

--

## Compile

.col-5[
```bash
$ yarn tsc
```
]

.col-2[
OR
]

.col-5[
```bash
$ yarn tsc file.ts
```
]

---

# Implicit/Explicit types

Types could be implicit or explicit.

.col-6[
Implicit type:

```typescript
let name = 'MyName';
```

]

.col-6[
Explicit type:

```typescript
let name: string;
name = 'MyName';
```

]

If no type is inferred, typescript will assume that is `any`

---

# Types

.col-6[
## Basic types

- boolean
- number
- string
- Function/void
- null/undefined/never
- any
- array
- tuples `(array different types)`
- object
- enum

]

--

.col-6[
## Advanced types

- Custom types `(class or interface)`
- Union `(number | string)`
- Intersection `(Person & Loggable)`
- Type aliases `(type numString = number | string)`
- Function as types

]

---

# Classes

```typescript
class Person {
  readonly name: string;
  private static _instance: Person;
  private constructor(name: string, public username: string) {
    this.name = name;
  }
  static getInstance(name: string, username: string): Person {
    if (!this._instance) {
      this._instance = new Person(name, username);
    }
    return this._instance;
  }
}
```

It also have `static` parameters and methods, `abstract` classes, `private constructors` (singleton) and `readonly` parameters

---

# Namespaces

Namespaces are simply named JavaScript objects in the global namespace.

This makes namespaces a very simple construct to use.

They can span multiple files. And namespace inside other namespaces.

Namespaces can be a good way to structure your code in a JavaScript Application.

```typescript
/// <reference path="myNamespace.ts" />
namespace MyMath {
  const PI = 3.14;
  
  export function calc(diameter: number) {
    return diameter * PI;
  }
}
```

---

# Modules

Just like namespaces, modules can contain both code and declarations. The main difference is that modules declare their dependencies.

For large applications modules provide for better `code reuse`, `stronger isolation` and better tooling support for `bundling`.

It is also worth noting that, for Node.js applications, modules are the default and the recommended approach to structure your code.

Starting with ECMAScript 2015, modules are native part of the language, and should be supported by all compliant engine implementations. Thus, for new projects modules would be the recommended code organization mechanism.

```typescript
import { Component } from '@angular/core';
```

---

# Namespaces vs Modules

.col-6[
.center[
## Namespaces
]
- Organize app with JS Objects
- Can be split up over multiple files
- No module loader required
- Dependencies get difficult to manage in bigger apps
]

.col-6[
.center[
## Modules
]
.space-left[
- Organize app with real modules
- Can be split up over multiple files
- Module loader required
- Explicit dependency declaration
]
]

---

# Interfaces

Interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

> See examples

---

# Generics

## Simple

```typescript
function echo(data: any) {
  return data;
}
console.log(echo('hello').length);
console.log(echo(33).length);
console.log(echo({name: 'my name', age: 22}).length);
```

--

We want to create function that accept many kind of types, without loosing type  and without using `any`.

---

# Decorators

Decorators provide a way to add both annotations and a meta-programming syntax for class declarations and members.

Decorators are a stage 2 proposal for JavaScript and are available as an experimental feature of TypeScript.

Exists 4 decorator types

- Class decorator
- Method decorator
- Property decorator
- Parameter decorator

---

# Third-party libraries

If you need to import an external library that is not implemented in typescript, there is a repository where the community has created a type implementation for a huge variety of libraries.

.col-8[
## Definitelytyped

- [http://definitelytyped.org/](http://definitelytyped.org/)
- [https://github.com/DefinitelyTyped/DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)
]

.col-4[
### Examples:

- @types/node
- @types/jquery
- @types/jest
]

Also, you could create your own description files for other js files. Using a `file.d.ts`, more info: [https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html](https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html) 

---

# Documentation

[Typescript playground](http://www.typescriptlang.org/play/)
[Basic documentation](http://www.typescriptlang.org)
[TSLint](https://palantir.github.io/tslint/)
[@Types -DefinitelyTyped-](https://github.com/DefinitelyTyped/DefinitelyTyped)

---

# End
