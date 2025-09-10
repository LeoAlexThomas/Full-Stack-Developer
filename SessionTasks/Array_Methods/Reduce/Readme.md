# Reduce

This Array method is used to generate single value by iterate through all the elements in the array.

Syntax:

```jsx
arrayName.reduce((accumulator, currentValue, currentIndex, array ) {
    //code block
}, initialValue);
```

> [!NOTE]
>
> **_callbackFn_** [(accumulator, currentValue, currentIndex, array ) {}]
>
> **accumulator** - It represent the value return by callbackFn. If first call, then it'll take first index value of an array like array[0].
>
> **currentValue** - It represent the value of an current element. If it's a first call, and initialValue is specified then the initialValue otherwise it'll take first index value of an array.
>
> **currentIndex** - It represent the current index position in an array.
>
> **array** - The array reduce method called upon
>
> **initialValue** - [optional] This props is used to assign initial value to the reduce method before callbackFn get called. If this value is not given, then array[0] is assign as initial value at the start of the iteration.
