When you create a variable inside a function, the variable is

- created when encountered within the function
- destroyed when the function terminates (finishes)

Take a a look at the `createAnimal()` function inside `main.js`. 

```javascript
function createAnimal(event) {
  
  var ctr;
```

The `ctr` variable is created when `var ctr;` is executed. It then can be used within the `createAnimal()` function while it is executing. 

However, as soon as the function terminates, it is detroyed. 

- the next time the function is entered it has to be created again
- no other function can access `ctr`.

In our application, we need to make sure that the `userChoices` object variable can be accessed from 