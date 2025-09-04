# DATATYPES IN JAVASCRIPT

In JavaScript, data types define the type of value that can be stored in a variable or memory location.

Understanding data types is important because they determine how values are stored and used in programs.

There are 9 datatypes in javascript with 2 categories:

- Primitive datatypes

  1. String
  2. Number
  3. BigInt
  4. Boolean
  5. Null
  6. Undefined
  7. Symbol

- Non-primitive datatypes
  1. Array
  2. Object

### PRIMITIVE DATATYPES

Primitive data types store the actual value directly. When a variable with a primitive type is copied or reassigned, changes to the new variable do not affect the original variable.

**String** - It represents text / Characters within quotes(“, ‘).

```Jsx
let name = 'Leoalex'
let intro = "Hi, I'm Leoalex from Chennai."
```

**Number** - It represents ‘Numerical’ values.

```Jsx
let weight = 68.5;
```

**Boolean** - It represents true/false values.

```Jsx
let isCourseCompleted = false;
```

**Null** - It represents no value. If we want to remove the value of a variable but to keep the variable memory location.

```jsx
let profileImage = null;
```

**Undefined** - It represents a value not assigned to a variable. If a user creates a variable and not assigned any value to it by default it is assigned as undefined.

```jsx
let email;
```

**BigInt** - It represents a numerical value which is too high / too low to represent by number. And also ‘n’ will add at the end of the number.

```jsx
let nuclearCode = 1111111n;
```

**Symbol** - It represents a unique and immutable value in a variable. It mostly used in Objects to prevents naming conflicts.

```jsx
let newSym = Symbol("leo");
```

### NON-PRIMITIVE DATATYPES

Non-primitive data types store references to memory locations, not the actual value itself. When you copy or reassign them, changes to the new variable also affect the original variable, because both point to the same memory location.

**Array** - It represents a collection of values.

```jsx
let primeNumbers = [1, 3, 5, 7, 11];
```

**Object** - It represents a collection of key-value pairs, where each value is labeled with a unique key.

```jsx
let personInfo = {
  name: "Leoalex",
  age: 20,
  gender: "male",
  isSingle: true,
  skills: ["HTML", "CSS", "JavaScript", "React"],
};
```

> [!NOTE]
> In the above example, **'name'** is key and **'Leoalex'** is the value. If a user wants to _access value_ from an object. Users have to use key name with object name like below.
>
> ```jsx
> let myName = personInfo["name"];
> let myAge = personInfo["age"];
> console.log(`My name is ${myName} and I'm ${myAge} years old`);
> ```
