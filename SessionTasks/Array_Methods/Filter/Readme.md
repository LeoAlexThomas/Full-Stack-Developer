# Filter

This array method is used to get new array from an existing array. It has callbackFn with return value of boolean.

In this callbackFn, it'll run on each elements in an array. and check for certain condition if condition return true then the current element in an array will be added to new array otherwise it'll not include in the new array.

It will not affect the existing array.

Syntax:

```jsx
arrayName.filter((element, currentIndex, array) => boolean);
```

> [!NOTE]
>
> callbackFn:
> **element** - It represents current element in the array which is being processed.
>
> **currentIndex** - It represent current index position in an array.
>
> **array** - It represent array that runs filter method.
